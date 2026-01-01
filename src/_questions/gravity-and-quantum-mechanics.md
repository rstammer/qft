---
layout: question
title: Why can't gravity be unified with Quantum Mechanics?
tags:
  - Gravity
  - QFT
  - Foundations
  - Open Problems
---

## The Short Answer

Gravity **can** be combined with quantum mechanics at low energies—this is called **Quantum Field Theory on curved spacetime**. What we **cannot** do is make gravity itself a quantum field theory in the same way as the other forces. This is the problem of **quantum gravity**.

---

## What Works: QFT on Curved Spacetime

We can do quantum field theory on a curved spacetime background. This means:

- Spacetime is a curved Lorentzian manifold <span class="math-inline">(M, g)</span>
- The metric <span class="math-inline">g</span> is **fixed** (classical, not quantized)
- Quantum fields (electrons, photons, etc.) propagate on this background
- The fields are quantized, the geometry is not

This works perfectly well and gives predictions like **Hawking radiation**—black holes emit thermal radiation due to quantum effects near the horizon.

### The Limitation

The metric is treated as a fixed background. We don't ask: "What happens if we try to put the metric itself into a superposition?" This semiclassical approach breaks down when:

- Spacetime curvature becomes extreme (Planck scale)
- We need to describe the gravitational field quantum mechanically

---

## What Doesn't Work: Quantizing Gravity

When we try to quantize gravity using the same techniques as QED or QCD, we encounter fundamental problems.

### The Perturbative Approach

In standard QFT, we expand around a background and compute corrections order by order. For gravity:

<span class="math-display">g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}</span>

where <span class="math-inline">h_{\mu\nu}</span> is a small perturbation (the graviton field).

The linearized theory works—gravitons are spin-2 massless particles. But when we compute quantum corrections:

### Non-Renormalizability

The gravitational coupling constant has dimensions:

<span class="math-display">[G_N] = [\text{length}]^2 = [\text{mass}]^{-2}</span>

In 4 dimensions, this makes gravity **non-renormalizable**. At each order in perturbation theory, new divergences appear that require new counterterms. We would need infinitely many parameters to absorb all divergences.

Compare with QED:
<span class="math-display">[\alpha] = [\text{dimensionless}]</span>

Dimensionless coupling → renormalizable → finite number of parameters.

### What Non-Renormalizability Means

It doesn't mean the theory is wrong—it means perturbation theory breaks down at high energies. Specifically, at the **Planck scale**:

<span class="math-display">E_{Planck} = \sqrt{\frac{\hbar c^5}{G_N}} \approx 10^{19} \text{ GeV}</span>

Above this energy, our perturbative description fails. We need new physics.

---

## Why Gravity is Fundamentally Different

### Background Dependence

In gauge theories:
- Spacetime is fixed
- Fields live **on** spacetime
- Gauge transformations are symmetries of the fields

In gravity:
- Spacetime itself is dynamical
- There's no fixed background
- Diffeomorphisms (coordinate changes) are gauge symmetries

This is called **background independence**—the theory should not depend on any fixed background structure.

### The Metric vs The Connection

| Gauge Theory | Gravity |
|--------------|---------|
| Connection <span class="math-inline">A_\mu</span> is dynamical | Metric <span class="math-inline">g_{\mu\nu}</span> is dynamical |
| Metric is fixed background | No fixed background |
| Curvature = field strength | Curvature = geometry of spacetime |
| Internal symmetry | Spacetime symmetry |

### The Problem of Time

In quantum mechanics, time is a parameter—it tells us how states evolve. In general relativity, time is part of the dynamical geometry. When we try to quantize:

- What is the "time" in the Schrödinger equation?
- How do we define "equal time" when spacetime is dynamical?

This is the **problem of time** in quantum gravity.

---

## Approaches to Quantum Gravity

### String Theory

Replace point particles with 1-dimensional strings. Gravity emerges automatically:
- Closed strings have a massless spin-2 excitation = graviton
- Consistent only in 10 or 11 dimensions
- Extra dimensions compactified on small manifolds

### Loop Quantum Gravity

Quantize spacetime geometry directly:
- Area and volume are quantized
- Spacetime has discrete structure at Planck scale
- Background independent by construction

### Asymptotic Safety

Perhaps gravity is non-perturbatively renormalizable:
- There exists a UV fixed point
- Only finitely many parameters needed
- Still an active research area

### Emergent Gravity

Maybe spacetime geometry emerges from something more fundamental:
- Entanglement entropy of quantum systems
- Holography (AdS/CFT)
- Spacetime from quantum information

---

## Summary

| Regime | Description | Status |
|--------|-------------|--------|
| QFT on flat spacetime | Standard Model | Well-understood |
| QFT on curved spacetime | Quantum fields + classical gravity | Works, gives Hawking radiation |
| Perturbative quantum gravity | Gravitons as spin-2 fields | Non-renormalizable |
| Full quantum gravity | Spacetime itself quantum | Open problem |

The statement "QFT uses Riemannian geometry when gravity is considered" refers to the **semiclassical regime**—quantum fields on a classical curved background. This is well-defined and useful. The **full problem** of making gravity quantum is unsolved.
