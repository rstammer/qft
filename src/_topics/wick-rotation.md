---
layout: topic
title: What is Wick Rotation and why does it work?
tags:
  - QFT
  - Path Integrals
  - Mathematics
---

## Short Answer

**Wick rotation** is the analytic continuation from real time <span class="math-inline">t</span> to imaginary time <span class="math-inline">\tau = it</span>. It transforms oscillatory path integrals in Minkowski space into convergent integrals in Euclidean space. It works because of the analytic properties of quantum field theories.

---

## The Problem: Oscillatory Integrals

### Path Integrals in Minkowski Space

The quantum mechanical amplitude is:

<span class="math-display">Z = \int \mathcal{D}\phi \, e^{iS[\phi]/\hbar}</span>

The integrand <span class="math-inline">e^{iS}</span> is a phase—it oscillates wildly and doesn't converge in any naive sense.

### Example: Free Particle

For a free particle, the path integral involves:

<span class="math-display">\int_{-\infty}^{\infty} dx \, e^{i\alpha x^2}</span>

This doesn't converge absolutely. We need a prescription to make sense of it.

---

## The Solution: Wick Rotation

### The Idea

Analytically continue time to imaginary values:

<span class="math-display">t \to -i\tau</span>

(The sign convention varies in the literature.)

### What Changes

| Minkowski | Euclidean |
|-----------|-----------|
| Time <span class="math-inline">t</span> | Imaginary time <span class="math-inline">\tau = it</span> |
| Metric <span class="math-inline">ds^2 = -dt^2 + d\vec{x}^2</span> | Metric <span class="math-inline">ds^2 = d\tau^2 + d\vec{x}^2</span> |
| Signature <span class="math-inline">(-,+,+,+)</span> | Signature <span class="math-inline">(+,+,+,+)</span> |
| Lorentzian | Riemannian |

### The Action Transforms

For a scalar field with action:

<span class="math-display">S = \int dt \, d^3x \left[ \frac{1}{2}(\partial_t \phi)^2 - \frac{1}{2}(\nabla\phi)^2 - V(\phi) \right]</span>

Under <span class="math-inline">t = -i\tau</span>:

<span class="math-display">iS \to -S_E</span>

where the Euclidean action is:

<span class="math-display">S_E = \int d\tau \, d^3x \left[ \frac{1}{2}(\partial_\tau \phi)^2 + \frac{1}{2}(\nabla\phi)^2 + V(\phi) \right]</span>

### The Path Integral Converges

<span class="math-display">Z_E = \int \mathcal{D}\phi \, e^{-S_E[\phi]}</span>

Now the integrand is <span class="math-inline">e^{-S_E}</span>, which is exponentially suppressed for large field configurations. The integral converges!

---

## Why It Works: Analytic Continuation

### Analyticity of Correlation Functions

In QFT, correlation functions like:

<span class="math-display">\langle \phi(x_1) \phi(x_2) \cdots \phi(x_n) \rangle</span>

are analytic functions of the time coordinates (in suitable regions).

### The Key Theorem

If a function is analytic, knowing it on one region determines it everywhere (by analytic continuation).

**Strategy:**
1. Compute in Euclidean space (where integrals converge)
2. Analytically continue back to Minkowski space

### Osterwalder-Schrader Axioms

These axioms specify conditions under which a Euclidean QFT defines a valid Lorentzian theory:

1. **Euclidean covariance**: Rotation invariance in <span class="math-inline">\mathbb{R}^4</span>
2. **Reflection positivity**: A positivity condition involving time reflection
3. **Regularity**: Suitable growth conditions

If satisfied, the Euclidean theory can be continued to a unitary Lorentzian QFT.

---

## Physical Interpretations

### Thermal Field Theory

Euclidean time with period <span class="math-inline">\beta</span> corresponds to temperature <span class="math-inline">T = 1/\beta</span>:

<span class="math-display">Z(\beta) = \text{Tr}(e^{-\beta H}) = \int_{\phi(\tau+\beta) = \phi(\tau)} \mathcal{D}\phi \, e^{-S_E}</span>

The path integral with periodic boundary conditions computes the thermal partition function!

### Tunneling and Instantons

In Euclidean space, classical solutions called **instantons** mediate tunneling between different vacua.

Example: Double-well potential
- Minkowski: Particle oscillates in one well
- Euclidean: Instanton solution connects the two wells

The tunneling amplitude is <span class="math-inline">\sim e^{-S_E[\text{instanton}]}</span>.

### Quantum Mechanics as Euclidean Statistics

The Euclidean path integral:

<span class="math-display">Z_E = \int \mathcal{D}\phi \, e^{-S_E}</span>

looks like a statistical mechanics partition function:

<span class="math-display">Z = \sum_{\text{configs}} e^{-E/kT}</span>

Quantum fluctuations ↔ Thermal fluctuations

---

## Practical Applications

### Lattice QFT

Discretize Euclidean spacetime on a lattice:
- Time direction: <span class="math-inline">N_t</span> points
- Space directions: <span class="math-inline">N_s^3</span> points

The path integral becomes a finite sum, computable by Monte Carlo.

This is how we compute:
- Hadron masses
- QCD phase diagram
- Non-perturbative quantities

### Perturbation Theory

Feynman rules are often derived in Euclidean space, then continued:

<span class="math-display">\frac{1}{k^2 + m^2} \xrightarrow{\text{continue}} \frac{1}{k^2 - m^2 + i\epsilon}</span>

The <span class="math-inline">i\epsilon</span> prescription handles the poles correctly.

---

## Subtleties and Limitations

### When Wick Rotation Fails

Not all theories can be Wick-rotated:
- Theories with complex actions
- Chern-Simons theory (topological)
- Real-time dynamics (scattering, decay)

### The Sign Problem

For some theories (finite density QCD), the Euclidean action is complex:

<span class="math-display">e^{-S_E} \text{ is not real positive}</span>

Monte Carlo fails. This is a major unsolved problem.

### Real-Time Physics

Some questions require real time:
- Scattering amplitudes
- Time-dependent phenomena
- Non-equilibrium systems

These require direct Minkowski calculations or Schwinger-Keldysh formalism.

---

## Summary

| Aspect | Minkowski | Euclidean |
|--------|-----------|-----------|
| Time | Real <span class="math-inline">t</span> | Imaginary <span class="math-inline">\tau = it</span> |
| Signature | <span class="math-inline">(-,+,+,+)</span> | <span class="math-inline">(+,+,+,+)</span> |
| Geometry | Lorentzian | Riemannian |
| Path integral | <span class="math-inline">e^{iS}</span> (oscillatory) | <span class="math-inline">e^{-S_E}</span> (convergent) |
| Symmetry | Lorentz <span class="math-inline">SO(1,3)</span> | Rotation <span class="math-inline">SO(4)</span> |
| Use | Physical amplitudes | Computation, lattice |

---

## References

- G. C. Wick, "Properties of Bethe-Salpeter Wave Functions," *Physical Review* 96, 1124 (1954) — [Original paper](https://doi.org/10.1103/PhysRev.96.1124)
- K. Osterwalder and R. Schrader, "Axioms for Euclidean Green's Functions," *Communications in Mathematical Physics* 31, 83–112 (1973)
- J. Glimm and A. Jaffe, *Quantum Physics: A Functional Integral Point of View*, 2nd ed. (Springer, 1987)
- M. E. Peskin and D. V. Schroeder, *An Introduction to Quantum Field Theory* (Westview Press, 1995), Section 9.3
- J. Zinn-Justin, *Quantum Field Theory and Critical Phenomena*, 4th ed. (Oxford University Press, 2002)
- M. Creutz, *Quarks, Gluons and Lattices* (Cambridge University Press, 1983) — Lattice QFT introduction
