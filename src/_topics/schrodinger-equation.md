---
layout: topic
title: The Schrodinger Equation
tags:
  - Quantum Mechanics
  - Foundations
---

## The Equation

The time-dependent Schrodinger equation is:

<span class="math-display">i\hbar \frac{\partial}{\partial t}\Psi(x,t) = \hat{H}\Psi(x,t)</span>

where:
- <span class="math-inline">\Psi(x,t)</span> is the wave function
- <span class="math-inline">\hat{H}</span> is the Hamiltonian operator
- <span class="math-inline">\hbar</span> is the reduced Planck constant

## Mathematical Structure

### Hilbert Space Framework

The wave function <span class="math-inline">\Psi</span> lives in a **Hilbert space** <span class="math-inline">\mathcal{H} = L^2(\mathbb{R}^3)</span>, the space of square-integrable functions:

<span class="math-display">\langle \Psi | \Psi \rangle = \int |\Psi(x)|^2 \, d^3x < \infty</span>

### The Hamiltonian

For a non-relativistic particle in a potential <span class="math-inline">V(x)</span>:

<span class="math-display">\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V(x)</span>

This is a **self-adjoint operator** on <span class="math-inline">\mathcal{H}</span>.

### Time Evolution

The formal solution is:

<span class="math-display">\Psi(t) = e^{-i\hat{H}t/\hbar}\Psi(0)</span>

The operator <span class="math-inline">U(t) = e^{-i\hat{H}t/\hbar}</span> is **unitary**, preserving probability.

## Time-Independent Case

For stationary states with definite energy <span class="math-inline">E</span>:

<span class="math-display">\hat{H}\psi = E\psi</span>

This is an **eigenvalue problem**. The full solution becomes:

<span class="math-display">\Psi(x,t) = \psi(x)e^{-iEt/\hbar}</span>

## Connection to Classical Mechanics

| Classical | Quantum |
|-----------|---------|
| Position <span class="math-inline">x</span> | Operator <span class="math-inline">\hat{x}</span> |
| Momentum <span class="math-inline">p</span> | Operator <span class="math-inline">\hat{p} = -i\hbar\nabla</span> |
| Hamiltonian <span class="math-inline">H(x,p)</span> | Operator <span class="math-inline">\hat{H}(\hat{x},\hat{p})</span> |
| Poisson bracket | Commutator <span class="math-inline">\frac{1}{i\hbar}[\cdot,\cdot]</span> |

## Limitations

The Schrodinger equation is:
- **Non-relativistic**: Not compatible with special relativity
- **Single-particle**: Multi-particle versions exist but become unwieldy

These limitations motivate **Quantum Field Theory**, where particles are excitations of underlying fields.

---

## References

- E. Schrödinger, "Quantisierung als Eigenwertproblem," *Annalen der Physik* 79, 361–376 (1926) — [Original paper](https://doi.org/10.1002/andp.19263840404)
- D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed. (Cambridge University Press, 2018), Chapters 1–2
- J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 2nd ed. (Addison-Wesley, 2011)
- R. Shankar, *Principles of Quantum Mechanics*, 2nd ed. (Springer, 1994)
- C. Cohen-Tannoudji, B. Diu, and F. Laloë, *Quantum Mechanics*, Vols. 1–2 (Wiley, 1977)
