// Generates a static world-map module from Natural Earth data (public domain),
// so the site itself ships zero map dependencies.
//
//   source: world-atlas countries-110m (Natural Earth 1:110m, public domain)
//   output: src/data/worldMap.ts  — projected SVG path per country + ISO alpha-2
//
// Run it only when the map itself needs to change. The three packages below are
// build-time only and deliberately NOT in package.json, so the site keeps its
// zero-runtime-dependency budget:
//
//   npm i --no-save world-atlas topojson-client d3-geo i18n-iso-countries
//   node scripts/generate-world-map.mjs src/data/worldMap.ts

import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import * as topojson from "topojson-client";
import { geoNaturalEarth1, geoPath, geoGraticule10 } from "d3-geo";
import countries from "i18n-iso-countries";

const require = createRequire(import.meta.url);
const topology = require("world-atlas/countries-110m.json");

const WIDTH = 960;
const HEIGHT = 480;

const geo = topojson.feature(topology, topology.objects.countries);

// Antarctica eats a third of the frame and will never hold a talk.
geo.features = geo.features.filter(f => f.id !== "010");

const projection = geoNaturalEarth1().fitExtent(
  [[8, 8], [WIDTH - 8, HEIGHT - 8]],
  geo
);

// 1 decimal is plenty at this resolution and roughly halves the payload.
const path = geoPath(projection).digits(1);

const rows = [];
for (const f of geo.features) {
  const d = path(f);
  if (!d) continue;
  // world-atlas ids are ISO 3166-1 numeric; the site keys talks by alpha-2.
  const alpha2 = countries.numericToAlpha2(String(f.id).padStart(3, "0")) ?? null;
  // Projected centroid: where a marker for this country gets planted.
  const [cx, cy] = path.centroid(f).map(n => Math.round(n * 10) / 10);
  rows.push({ id: String(f.id), cc: alpha2, name: f.properties.name, d, cx, cy });
}

const graticule = path(geoGraticule10());

const out = `// src/data/worldMap.ts
// GENERATED FILE — do not edit by hand.
//
// Source: Natural Earth 1:110m cultural vectors, via the world-atlas package.
// Natural Earth data is explicitly in the public domain, so these paths carry
// no attribution requirement. Projection: Natural Earth I, fitted to the
// viewBox below. Antarctica is omitted on purpose.
//
// Regenerate with: node scripts/generate-world-map.mjs src/data/worldMap.ts

export const MAP_WIDTH = ${WIDTH};
export const MAP_HEIGHT = ${HEIGHT};

export interface Country {
  /** ISO 3166-1 numeric, as shipped by Natural Earth. */
  id: string;
  /** ISO 3166-1 alpha-2. Null for a few disputed or non-coded territories. */
  cc: string | null;
  name: string;
  d: string;
  /** Projected centroid, in viewBox units. Marker anchor. */
  cx: number;
  cy: number;
}

/** Latitude/longitude grid, same projection. Drawn under the countries. */
export const GRATICULE = ${JSON.stringify(graticule)};

export const countries: Country[] = ${JSON.stringify(rows, null, 0)};

const byCc = new Map(countries.filter(c => c.cc).map(c => [c.cc, c]));

export function countryByCode(cc: string): Country | undefined {
  return byCc.get(cc.toUpperCase());
}
`;

const target = process.argv[2];
writeFileSync(target, out, "utf8");

const kb = (Buffer.byteLength(out, "utf8") / 1024).toFixed(1);
console.log(`wrote ${target} — ${rows.length} countries, ${kb} KB`);
console.log(`with alpha-2: ${rows.filter(r => r.cc).length}`);
for (const cc of ["PE", "AR", "US", "ES", "BR"]) {
  const c = rows.find(r => r.cc === cc);
  console.log(`  ${cc}: ${c ? c.name : "MISSING"}`);
}
