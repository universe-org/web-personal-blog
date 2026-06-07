---
title: "Embedding security into CI/CD pipelines with GitHub Actions"
titleEs: "Integrando seguridad en pipelines CI/CD con GitHub Actions"
date: 2025-03-12
slug: devsecops-github-actions
tags: ["DevSecOps", "GitHub Actions", "Trivy", "Gitleaks"]
excerpt: "A practical guide to adding container scanning, secret detection, and IaC linting to your GitHub Actions workflows without slowing down developers."
excerptEs: "Guía práctica para agregar escaneo de contenedores, detección de secretos y linting de IaC a tus workflows de GitHub Actions sin frenar a los developers."
readingTime: 8
draft: false
---

# Embedding security into CI/CD pipelines with GitHub Actions

[REPLACE this content with your real article]

## Why shift-left matters

Security findings discovered in production cost 6× more to fix than those caught at the PR stage...

## The four stages

### 1. Secret detection (Gitleaks)
### 2. IaC linting (Checkov)
### 3. Container scanning (Trivy)
### 4. DAST (OWASP ZAP)

## Sample workflow

```yaml
name: DevSecOps pipeline

on: [push, pull_request]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Secret scan
        uses: gitleaks/gitleaks-action@v2
      - name: IaC scan
        uses: bridgecrewio/checkov-action@master
      - name: Container scan
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: myapp:latest
```
