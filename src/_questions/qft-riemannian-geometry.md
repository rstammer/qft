---
layout: question
title: Is QFT based on Riemannian Geometry?
tags:
  - QFT
  - Geometry
  - Foundations
---

## Short Answer

Quantum Field Theory (QFT) is not primarily based on Riemannian geometry, but rather on **pseudo-Riemannian geometry** (specifically Lorentzian geometry) when gravity is considered, and on **flat Minkowski spacetime** in most standard treatments.

## Detailed Explanation

### Standard QFT: Minkowski Spacetime

In conventional QFT (as used in the Standard Model), the underlying spacetime is **Minkowski space** <span class="math-inline">\mathbb{R}^{1,3}</span> with the metric:

<span class="math-display">\eta_{\mu\nu} = \text{diag}(-1, +1, +1, +1)</span>

This is a flat pseudo-Riemannian manifold with signature <span class="math-inline">(1,3)</span> or <span class="math-inline">(3,1)</span> depending on convention.

### QFT on Curved Spacetime

When combining QFT with General Relativity, we work on a **Lorentzian manifold** <span class="math-inline">(M, g)</span> where:
- <span class="math-inline">M</span> is a 4-dimensional smooth manifold
- <span class="math-inline">g</span> is a metric tensor with signature <span class="math-inline">(-,+,+,+)</span>

This is **not** Riemannian (which requires positive-definite metric) but **pseudo-Riemannian**.

### The Role of Fiber Bundles

The mathematical framework of QFT heavily relies on:

1. **Principal bundles** for gauge theories
2. **Vector bundles** for matter fields
3. **Spinor bundles** for fermionic fields

These structures live "above" the spacetime manifold and encode the internal symmetries of the theory.

### Euclidean QFT

In the **Euclidean formulation** (used for path integrals and lattice QFT), we perform a Wick rotation <span class="math-inline">t \to -i\tau</span>, which turns Minkowski space into genuine Riemannian space <span class="math-inline">\mathbb{R}^4</span>.

## Key Mathematical Structures

| Aspect | Mathematical Framework |
|--------|----------------------|
| Spacetime | Lorentzian manifold |
| Gauge fields | Connections on principal bundles |
| Matter fields | Sections of associated vector bundles |
| Fermions | Spinor bundles |
| Path integral | Euclidean (Riemannian) formulation |
