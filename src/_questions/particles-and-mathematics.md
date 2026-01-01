---
layout: question
title: How do particle types relate to mathematical objects?
tags:
  - Mathematics
  - Standard Model
  - Representation Theory
---

## Short Answer

Particles correspond to **irreducible representations** of the Poincare group (for spacetime properties) and the **gauge group** (for internal properties).

## Spacetime Structure: Poincare Group

The Poincare group <span class="math-inline">\mathcal{P}</span> is the symmetry group of special relativity:

<span class="math-display">\mathcal{P} = \mathbb{R}^{1,3} \rtimes SO(1,3)</span>

It consists of:
- Translations in spacetime
- Lorentz transformations (rotations + boosts)

### Wigner Classification

Particles are classified by irreducible representations labeled by:

1. **Mass** <span class="math-inline">m \geq 0</span>
2. **Spin** <span class="math-inline">s = 0, \frac{1}{2}, 1, \frac{3}{2}, 2, \ldots</span>

| Type | Mass | Spin | Examples |
|------|------|------|----------|
| Massive | <span class="math-inline">m > 0</span> | <span class="math-inline">s</span> | Electron, W/Z bosons, Higgs |
| Massless | <span class="math-inline">m = 0</span> | <span class="math-inline">\pm s</span> (helicity) | Photon, gluon, graviton |

## Internal Structure: Gauge Groups

Beyond spacetime, particles carry **charges** under gauge groups.

### Representation Theory

A **representation** of a Lie group <span class="math-inline">G</span> is a homomorphism:

<span class="math-display">\rho: G \to GL(V)</span>

where <span class="math-inline">V</span> is a vector space. Particles "living in" <span class="math-inline">V</span> transform according to <span class="math-inline">\rho</span>.

### Standard Model Gauge Group

<span class="math-display">G_{SM} = SU(3)_C \times SU(2)_L \times U(1)_Y</span>

Each factor corresponds to a fundamental force.

## Specific Examples

### Electron

The left-handed electron transforms as:
- **Poincare**: Spin-1/2 massive representation
- **<span class="math-inline">SU(3)_C</span>**: Trivial (singlet **1**) - no color
- **<span class="math-inline">SU(2)_L</span>**: Doublet **2** (with neutrino)
- **<span class="math-inline">U(1)_Y</span>**: Hypercharge <span class="math-inline">Y = -1/2</span>

### Quark

Left-handed up quark transforms as:
- **Poincare**: Spin-1/2 massive
- **<span class="math-inline">SU(3)_C</span>**: Fundamental **3** (three colors)
- **<span class="math-inline">SU(2)_L</span>**: Doublet **2** (with down quark)
- **<span class="math-inline">U(1)_Y</span>**: Hypercharge <span class="math-inline">Y = +1/6</span>

### Photon

- **Poincare**: Spin-1 massless (helicity <span class="math-inline">\pm 1</span>)
- **Gauge**: Singlet under all (after symmetry breaking)

### Gluon

- **Poincare**: Spin-1 massless
- **<span class="math-inline">SU(3)_C</span>**: Adjoint **8** (carries color)

## Mathematical Objects Summary

| Mathematical Object | Physical Meaning |
|--------------------|------------------|
| Lie group <span class="math-inline">G</span> | Symmetry of the theory |
| Lie algebra <span class="math-inline">\mathfrak{g}</span> | Infinitesimal symmetries |
| Representation <span class="math-inline">\rho</span> | How particles transform |
| Irreducible rep | Single particle type |
| Dimension of rep | Number of components |
| Casimir operators | Invariant labels (mass, spin) |

## Fiber Bundle Perspective

Mathematically, gauge theories are described by:

- **Principal bundle** <span class="math-inline">P \to M</span> with structure group <span class="math-inline">G</span>
- **Associated vector bundle** <span class="math-inline">E = P \times_\rho V</span>
- Matter fields are **sections** of <span class="math-inline">E</span>
- Gauge fields are **connections** on <span class="math-inline">P</span>
