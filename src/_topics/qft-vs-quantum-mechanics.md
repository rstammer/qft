---
layout: topic
title: How does QFT differ from Quantum Mechanics?
tags:
  - QFT
  - Quantum Mechanics
  - Foundations
---

## Short Answer

**Quantum Mechanics (QM)** describes a fixed number of particles as quantum objects. **Quantum Field Theory (QFT)** promotes fields to quantum objects, allowing particle creation and annihilation.

## Key Differences

| Aspect | Quantum Mechanics | Quantum Field Theory |
|--------|-------------------|---------------------|
| Basic object | Particle wave function <span class="math-inline">\Psi(x,t)</span> | Field operator <span class="math-inline">\hat{\phi}(x,t)</span> |
| Particle number | Fixed | Variable (creation/annihilation) |
| Relativity | Non-relativistic | Relativistic |
| Position | Observable <span class="math-inline">\hat{x}</span> | Label (parameter) |
| Hilbert space | <span class="math-inline">L^2(\mathbb{R}^3)</span> | Fock space |

## The Conceptual Shift

### In Quantum Mechanics

- Particles are fundamental objects
- Wave function gives probability amplitude for finding particle at position <span class="math-inline">x</span>
- Number of particles is conserved

### In Quantum Field Theory

- Fields are fundamental objects
- Particles are **excitations** of the underlying field
- Particle number can change (pair creation, annihilation)

## Mathematical Structure

### QM: Wave Functions

States are vectors in <span class="math-inline">L^2(\mathbb{R}^3)</span>:

<span class="math-display">\Psi(x) \in \mathcal{H} = L^2(\mathbb{R}^3)</span>

### QFT: Fock Space

States live in **Fock space**, a direct sum over particle number sectors:

<span class="math-display">\mathcal{F} = \bigoplus_{n=0}^{\infty} \mathcal{H}_n</span>

where <span class="math-inline">\mathcal{H}_n</span> is the <span class="math-inline">n</span>-particle Hilbert space.

### Field Operators

In QFT, we have **operator-valued distributions**:

<span class="math-display">\hat{\phi}(x) = \int \frac{d^3p}{(2\pi)^3} \frac{1}{\sqrt{2E_p}} \left( \hat{a}_p e^{-ipx} + \hat{a}_p^\dagger e^{ipx} \right)</span>

where:
- <span class="math-inline">\hat{a}_p^\dagger</span> creates a particle with momentum <span class="math-inline">p</span>
- <span class="math-inline">\hat{a}_p</span> annihilates a particle with momentum <span class="math-inline">p</span>

## Why QFT is Necessary

### Relativistic Consistency

Special relativity + quantum mechanics leads to:
1. **Negative energy solutions** (antiparticles)
2. **Pair creation** when <span class="math-inline">E > 2mc^2</span>
3. **Non-conservation of particle number**

### The Locality Principle

In QFT, **causality** is built in:

<span class="math-display">[\hat{\phi}(x), \hat{\phi}(y)] = 0 \quad \text{when } (x-y)^2 < 0</span>

Operators at spacelike-separated points commute (or anti-commute for fermions).

## Example: From QM to QFT

### Harmonic Oscillator (QM)

<span class="math-display">\hat{H} = \frac{\hat{p}^2}{2m} + \frac{1}{2}m\omega^2\hat{x}^2 = \hbar\omega\left(\hat{a}^\dagger\hat{a} + \frac{1}{2}\right)</span>

### Free Scalar Field (QFT)

<span class="math-display">\hat{H} = \int \frac{d^3p}{(2\pi)^3} E_p \left(\hat{a}_p^\dagger\hat{a}_p + \frac{1}{2}\right)</span>

QFT is like an infinite collection of harmonic oscillators, one for each momentum mode!
