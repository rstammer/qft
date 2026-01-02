---
layout: topic
title: "Electroweak Unification: How Electromagnetism Emerges"
tags:
  - Standard Model
  - Gauge Theory
  - Symmetry Breaking
  - Higgs
---

## The Puzzle

Electromagnetism and the weak force seem completely different:

| Property | Electromagnetism | Weak Force |
|----------|------------------|------------|
| Range | Infinite | ~10⁻¹⁸ m |
| Carrier mass | Photon (massless) | W±, Z (massive) |
| Strength | ~1/137 | ~10⁻⁵ |
| Affects | Charged particles | All fermions |

Yet they are **two aspects of a single electroweak force**, unified at high energies and separated by the Higgs mechanism at low energies.

---

## The Electroweak Gauge Group

The Standard Model electroweak sector has gauge group:

<span class="math-display">SU(2)_L \times U(1)_Y</span>

This is **not** electromagnetism! The subscripts mean:
- <span class="math-inline">L</span> = "left" — only left-handed fermions feel SU(2)
- <span class="math-inline">Y</span> = "hypercharge" — a different U(1) than electromagnetism

### The Gauge Bosons (Before Symmetry Breaking)

| Group | Generators | Gauge Bosons | Coupling |
|-------|------------|--------------|----------|
| <span class="math-inline">SU(2)_L</span> | <span class="math-inline">T^1, T^2, T^3</span> | <span class="math-inline">W^1_\mu, W^2_\mu, W^3_\mu</span> | <span class="math-inline">g</span> |
| <span class="math-inline">U(1)_Y</span> | <span class="math-inline">Y</span> | <span class="math-inline">B_\mu</span> | <span class="math-inline">g'</span> |

All four bosons are **massless** at this stage.

---

## What is Hypercharge?

Hypercharge <span class="math-inline">Y</span> is a quantum number assigned to each particle. It is **not** electric charge, but is related to it.

The **Gell-Mann–Nishijima formula** connects them:

<span class="math-display">Q = T_3 + \frac{Y}{2}</span>

Where:
- <span class="math-inline">Q</span> = electric charge
- <span class="math-inline">T_3</span> = third component of weak isospin (from SU(2))
- <span class="math-inline">Y</span> = hypercharge

### Hypercharge Assignments

| Particle | <span class="math-inline">T_3</span> | <span class="math-inline">Y</span> | <span class="math-inline">Q = T_3 + Y/2</span> |
|----------|------|------|------------------|
| <span class="math-inline">\nu_{eL}</span> (left-handed neutrino) | +1/2 | -1 | 0 |
| <span class="math-inline">e_L</span> (left-handed electron) | -1/2 | -1 | -1 |
| <span class="math-inline">e_R</span> (right-handed electron) | 0 | -2 | -1 |
| <span class="math-inline">u_L</span> (left-handed up quark) | +1/2 | +1/3 | +2/3 |
| <span class="math-inline">d_L</span> (left-handed down quark) | -1/2 | +1/3 | -1/3 |
| <span class="math-inline">u_R</span> (right-handed up quark) | 0 | +4/3 | +2/3 |
| <span class="math-inline">d_R</span> (right-handed down quark) | 0 | -2/3 | -1/3 |

Notice: Left-handed fermions come in **doublets** under SU(2), while right-handed fermions are **singlets**.

---

## The Higgs Mechanism

The Higgs field <span class="math-inline">\phi</span> is an SU(2) doublet with hypercharge <span class="math-inline">Y = +1</span>:

<span class="math-display">\phi = \begin{pmatrix} \phi^+ \\ \phi^0 \end{pmatrix}</span>

### Spontaneous Symmetry Breaking

The Higgs potential has a "Mexican hat" shape:

<span class="math-display">V(\phi) = -\mu^2 |\phi|^2 + \lambda |\phi|^4</span>

The minimum is not at <span class="math-inline">\phi = 0</span> but at:

<span class="math-display">|\phi| = \frac{v}{\sqrt{2}}, \quad v \approx 246 \text{ GeV}</span>

The Higgs field acquires a **vacuum expectation value** (VEV):

<span class="math-display">\langle \phi \rangle = \frac{1}{\sqrt{2}} \begin{pmatrix} 0 \\ v \end{pmatrix}</span>

This breaks <span class="math-inline">SU(2)_L \times U(1)_Y</span> down to a single <span class="math-inline">U(1)</span>:

<span class="math-display">SU(2)_L \times U(1)_Y \xrightarrow{\text{Higgs VEV}} U(1)_{EM}</span>

The surviving <span class="math-inline">U(1)_{EM}</span> **is** electromagnetism!

---

## How the Photon Emerges

The neutral gauge bosons <span class="math-inline">W^3_\mu</span> and <span class="math-inline">B_\mu</span> **mix** after symmetry breaking.

### The Weinberg Angle

Define the **Weinberg angle** (or weak mixing angle) <span class="math-inline">\theta_W</span> by:

<span class="math-display">\tan \theta_W = \frac{g'}{g}</span>

Experimentally: <span class="math-inline">\theta_W \approx 28.7°</span>, or <span class="math-inline">\sin^2 \theta_W \approx 0.231</span>

### The Physical Bosons

The mass eigenstates are:

<span class="math-display">
\begin{pmatrix} A_\mu \\ Z_\mu \end{pmatrix} =
\begin{pmatrix} \cos\theta_W & \sin\theta_W \\ -\sin\theta_W & \cos\theta_W \end{pmatrix}
\begin{pmatrix} B_\mu \\ W^3_\mu \end{pmatrix}
</span>

Where:
- <span class="math-inline">A_\mu</span> = **photon** (massless) — the gauge boson of <span class="math-inline">U(1)_{EM}</span>
- <span class="math-inline">Z_\mu</span> = **Z boson** (massive, ~91 GeV)

The charged W bosons come from:

<span class="math-display">W^\pm_\mu = \frac{1}{\sqrt{2}}(W^1_\mu \mp i W^2_\mu)</span>

With mass <span class="math-inline">m_W \approx 80</span> GeV.

### Summary of Mass Generation

| Boson | Before SSB | After SSB | Mass |
|-------|------------|-----------|------|
| <span class="math-inline">W^1, W^2</span> | massless | <span class="math-inline">W^\pm</span> | ~80 GeV |
| <span class="math-inline">W^3</span> | massless | mixes → | — |
| <span class="math-inline">B</span> | massless | mixes → | — |
| — | — | <span class="math-inline">Z^0</span> | ~91 GeV |
| — | — | <span class="math-inline">\gamma</span> (photon) | 0 |

The photon remains massless because <span class="math-inline">U(1)_{EM}</span> is **unbroken** — the Higgs VEV is neutral under electric charge.

---

## The Electric Charge

The electric charge operator is:

<span class="math-display">Q = T_3 + \frac{Y}{2}</span>

The photon couples to this combination. Its coupling strength is:

<span class="math-display">e = g \sin\theta_W = g' \cos\theta_W</span>

This is the **elementary electric charge**, related to the fine structure constant:

<span class="math-display">\alpha = \frac{e^2}{4\pi} \approx \frac{1}{137}</span>

---

## Why the Weak Force is Weak (and Short-Range)

The weak force appears weak because:

1. **Massive mediators**: W and Z bosons have large masses (~80-91 GeV)
2. **Propagator suppression**: At low energies <span class="math-inline">E \ll m_W</span>, the propagator gives:

<span class="math-display">\frac{1}{q^2 - m_W^2} \approx -\frac{1}{m_W^2}</span>

This makes the effective coupling:

<span class="math-display">G_F \sim \frac{g^2}{m_W^2} \approx 1.17 \times 10^{-5} \text{ GeV}^{-2}</span>

The **Fermi constant** <span class="math-inline">G_F</span> characterizes weak interactions at low energy.

At high energies (above ~100 GeV), the electromagnetic and weak forces have **comparable strength** — they are truly unified.

---

## The Big Picture

```
         ELECTROWEAK THEORY
         SU(2)_L × U(1)_Y
                │
                │ 4 massless gauge bosons:
                │ W¹, W², W³, B
                │
                ▼
         ┌──────────────┐
         │  HIGGS FIELD │
         │  acquires    │
         │  VEV = 246   │
         │  GeV         │
         └──────┬───────┘
                │
                │ Spontaneous Symmetry Breaking
                │
                ▼
         U(1)_EM survives
                │
    ┌───────────┼───────────┐
    │           │           │
    ▼           ▼           ▼
   W±          Z⁰          γ
 80 GeV      91 GeV     massless
    │           │           │
    └─────┬─────┘           │
          │                 │
     WEAK FORCE      ELECTROMAGNETISM
   (short range)     (infinite range)
```

---

## Experimental Confirmation

The electroweak theory made precise predictions, all confirmed:

| Prediction | Measured |
|------------|----------|
| <span class="math-inline">m_W \approx 80</span> GeV | 80.377 ± 0.012 GeV |
| <span class="math-inline">m_Z \approx 91</span> GeV | 91.1876 ± 0.0021 GeV |
| <span class="math-inline">\sin^2\theta_W \approx 0.23</span> | 0.23122 ± 0.00003 |
| Neutral currents | Discovered 1973 |
| W and Z bosons | Discovered 1983 |
| Higgs boson | Discovered 2012 |

The 1979 Nobel Prize was awarded to Glashow, Salam, and Weinberg for electroweak unification.

---

## Summary

| Concept | Meaning |
|---------|---------|
| <span class="math-inline">SU(2)_L \times U(1)_Y</span> | Electroweak gauge group |
| Hypercharge <span class="math-inline">Y</span> | Quantum number, not electric charge |
| <span class="math-inline">Q = T_3 + Y/2</span> | Electric charge formula |
| Higgs mechanism | Breaks <span class="math-inline">SU(2)_L \times U(1)_Y \to U(1)_{EM}</span> |
| Weinberg angle <span class="math-inline">\theta_W</span> | Mixing between <span class="math-inline">W^3</span> and <span class="math-inline">B</span> |
| Photon | Massless combination of <span class="math-inline">W^3</span> and <span class="math-inline">B</span> |
| W±, Z | Massive weak bosons |

**The photon is not fundamental** — it emerges from the mixing of more fundamental gauge bosons after the Higgs field breaks the electroweak symmetry.

---

## References

- S. Weinberg, "A Model of Leptons," *Physical Review Letters* 19, 1264–1266 (1967) — [Original paper](https://doi.org/10.1103/PhysRevLett.19.1264)
- A. Salam, "Weak and Electromagnetic Interactions," in *Elementary Particle Theory*, ed. N. Svartholm (Almqvist & Wiksell, 1968)
- S. L. Glashow, "Partial-symmetries of weak interactions," *Nuclear Physics* 22, 579–588 (1961)
- M. E. Peskin and D. V. Schroeder, *An Introduction to Quantum Field Theory* (Westview Press, 1995), Chapter 20
- D. J. Griffiths, *Introduction to Elementary Particles*, 2nd ed. (Wiley-VCH, 2008), Chapter 10
- T. P. Cheng and L. F. Li, *Gauge Theory of Elementary Particle Physics* (Oxford University Press, 1984)
- [Particle Data Group](https://pdg.lbl.gov/) — Current experimental values for W, Z masses and electroweak parameters
