---
layout: question
title: Is QFT based on Riemannian Geometry?
tags:
  - QFT
  - Geometry
  - Foundations
  - Fiber Bundles
---

## Short Answer

Quantum Field Theory (QFT) is not primarily based on Riemannian geometry. Standard QFT uses **flat Minkowski spacetime**. When we do QFT on a curved background (like near a black hole), we use **pseudo-Riemannian (Lorentzian) geometry**—but the spacetime is treated classically, not quantized. The geometric heart of QFT lies in **fiber bundle theory**, where gauge fields are connections and matter fields are sections.

**Important clarification:** "QFT on curved spacetime" means quantum fields on a classical gravitational background. This is **not** quantum gravity—the metric is fixed, not dynamical. Full quantum gravity (making spacetime itself quantum) remains an open problem. See [Why can't gravity be unified with Quantum Mechanics?](/questions/gravity-and-quantum-mechanics/)

---

## Spacetime Geometry

### Standard QFT: Minkowski Spacetime

In conventional QFT (as used in the Standard Model), the underlying spacetime is **Minkowski space** <span class="math-inline">\mathbb{R}^{1,3}</span> with the metric:

<span class="math-display">\eta_{\mu\nu} = \text{diag}(-1, +1, +1, +1)</span>

This is a flat pseudo-Riemannian manifold with signature <span class="math-inline">(1,3)</span> or <span class="math-inline">(3,1)</span> depending on convention.

### QFT on Curved Spacetime

When combining QFT with General Relativity, we work on a **Lorentzian manifold** <span class="math-inline">(M, g)</span> where:
- <span class="math-inline">M</span> is a 4-dimensional smooth manifold
- <span class="math-inline">g</span> is a metric tensor with signature <span class="math-inline">(-,+,+,+)</span>

This is **not** Riemannian (which requires positive-definite metric) but **pseudo-Riemannian**.

### Riemannian vs Pseudo-Riemannian

| Property | Riemannian | Pseudo-Riemannian (Lorentzian) |
|----------|------------|-------------------------------|
| Metric signature | <span class="math-inline">(+,+,+,+)</span> | <span class="math-inline">(-,+,+,+)</span> |
| Distance | Always positive | Can be positive, negative, or zero |
| Physical meaning | Space only | Spacetime with causality |
| Example | <span class="math-inline">\mathbb{R}^4</span> Euclidean | Minkowski space |

---

## Fiber Bundles: The Geometric Heart of QFT

The mathematical framework of QFT relies fundamentally on **fiber bundle theory**. This is where the true geometry of gauge theories lives.

### What is a Fiber Bundle?

A fiber bundle is a space <span class="math-inline">E</span> that locally looks like a product <span class="math-inline">B \times F</span>, where:
- <span class="math-inline">B</span> is the **base space** (spacetime)
- <span class="math-inline">F</span> is the **fiber** (internal space at each point)
- <span class="math-inline">\pi: E \to B</span> is the **projection map**

Locally: <span class="math-inline">E|_U \cong U \times F</span> for open sets <span class="math-inline">U \subset B</span>

### Principal Bundles

A **principal bundle** <span class="math-inline">P \xrightarrow{\pi} M</span> has a Lie group <span class="math-inline">G</span> as its fiber, with <span class="math-inline">G</span> acting freely on <span class="math-inline">P</span>.

<span class="math-display">P \times G \to P, \quad (p, g) \mapsto p \cdot g</span>

**Examples in physics:**

| Gauge Theory | Structure Group <span class="math-inline">G</span> | Principal Bundle |
|--------------|-------------------|------------------|
| Electromagnetism | <span class="math-inline">U(1)</span> | Circle bundle over spacetime |
| Weak force | <span class="math-inline">SU(2)</span> | <span class="math-inline">SU(2)</span>-bundle |
| Strong force (QCD) | <span class="math-inline">SU(3)</span> | <span class="math-inline">SU(3)</span>-bundle |
| Standard Model | <span class="math-inline">SU(3) \times SU(2) \times U(1)</span> | Product bundle |

### Connections on Principal Bundles

A **connection** on a principal bundle is a way to define "horizontal" directions—how to parallel transport along the base space.

Mathematically, a connection is a Lie algebra-valued 1-form:

<span class="math-display">A \in \Omega^1(M, \mathfrak{g})</span>

where <span class="math-inline">\mathfrak{g}</span> is the Lie algebra of <span class="math-inline">G</span>.

**This is exactly what physicists call a gauge field!**

- The photon field <span class="math-inline">A_\mu</span> is a <span class="math-inline">\mathfrak{u}(1)</span>-connection
- The gluon field is an <span class="math-inline">\mathfrak{su}(3)</span>-connection
- The W and Z bosons come from an <span class="math-inline">\mathfrak{su}(2) \times \mathfrak{u}(1)</span>-connection

### Curvature as Field Strength

The **curvature** of a connection measures its failure to be flat:

<span class="math-display">F = dA + A \wedge A</span>

In components:

<span class="math-display">F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu + [A_\mu, A_\nu]</span>

**This is the field strength tensor!**

For electromagnetism (<span class="math-inline">U(1)</span>, abelian):
<span class="math-display">F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu</span>

This gives the electric and magnetic fields:
<span class="math-display">F_{0i} = E_i, \quad F_{ij} = \epsilon_{ijk}B_k</span>

For non-abelian theories (like QCD), the commutator <span class="math-inline">[A_\mu, A_\nu]</span> is non-zero, leading to gluon self-interactions.

### Associated Vector Bundles

Matter fields live in **associated vector bundles**. Given a principal bundle <span class="math-inline">P</span> and a representation <span class="math-inline">\rho: G \to GL(V)</span>:

<span class="math-display">E = P \times_\rho V = (P \times V) / G</span>

**Sections** of <span class="math-inline">E</span> are the matter fields:
- Electron field: section of a bundle associated to the spinor representation
- Quark field: section of a bundle associated to the fundamental rep of <span class="math-inline">SU(3)</span>

The connection on <span class="math-inline">P</span> induces a **covariant derivative** on sections:

<span class="math-display">D_\mu \psi = \partial_\mu \psi + A_\mu \psi</span>

---

## Spinor Geometry

Fermions require additional geometric structure: **spin geometry**.

### The Spin Group

The rotation group <span class="math-inline">SO(n)</span> has a double cover:

<span class="math-display">Spin(n) \xrightarrow{2:1} SO(n)</span>

For Lorentzian signature:

<span class="math-display">Spin(1,3) \xrightarrow{2:1} SO(1,3)</span>

The group <span class="math-inline">Spin(1,3) \cong SL(2,\mathbb{C})</span> is the universal cover of the Lorentz group.

### Spin Structures

A **spin structure** on a manifold <span class="math-inline">M</span> is a lift of the frame bundle:

<span class="math-display">
\begin{array}{ccc}
& & Spin(M) \\
& \nearrow & \downarrow \\
M & \leftarrow & SO(M)
\end{array}
</span>

Not every manifold admits a spin structure! The obstruction is the second Stiefel-Whitney class <span class="math-inline">w_2(M)</span>.

### Spinor Bundles

Given a spin structure, we can form the **spinor bundle**:

<span class="math-display">S = Spin(M) \times_\rho \mathbb{C}^4</span>

where <span class="math-inline">\rho</span> is the spinor representation of <span class="math-inline">Spin(1,3)</span>.

Sections of <span class="math-inline">S</span> are **spinor fields**—this is where the Dirac field <span class="math-inline">\psi</span> lives.

### The Dirac Operator

The **Dirac operator** is a first-order differential operator on spinors:

<span class="math-display">D\!\!\!\!/ = \gamma^\mu \nabla_\mu</span>

where <span class="math-inline">\gamma^\mu</span> are the gamma matrices satisfying the Clifford algebra:

<span class="math-display">\{\gamma^\mu, \gamma^\nu\} = 2g^{\mu\nu}</span>

The Dirac equation is:

<span class="math-display">(i D\!\!\!\!/ - m)\psi = 0</span>

---

## Gauge Theory Geometry

### Yang-Mills Theory

The dynamics of gauge fields is governed by the **Yang-Mills action**:

<span class="math-display">S_{YM} = -\frac{1}{4} \int_M \text{Tr}(F \wedge *F)</span>

where <span class="math-inline">*</span> is the Hodge star operator.

In components:

<span class="math-display">S_{YM} = -\frac{1}{4} \int d^4x \, F^a_{\mu\nu} F^{a\mu\nu}</span>

The Euler-Lagrange equations give the **Yang-Mills equations**:

<span class="math-display">D_\mu F^{\mu\nu} = J^\nu</span>

### Gauge Transformations

A **gauge transformation** is a section <span class="math-inline">g: M \to G</span> acting on:

- Connections: <span class="math-inline">A \mapsto g^{-1}Ag + g^{-1}dg</span>
- Matter fields: <span class="math-inline">\psi \mapsto \rho(g^{-1})\psi</span>

The curvature transforms covariantly:

<span class="math-display">F \mapsto g^{-1}Fg</span>

This is why <span class="math-inline">\text{Tr}(F \wedge *F)</span> is gauge-invariant.

### Instantons and Topology

In Euclidean Yang-Mills theory, there exist non-trivial solutions called **instantons**—connections with self-dual curvature:

<span class="math-display">F = *F</span>

Instantons are classified by the **instanton number** (second Chern class):

<span class="math-display">k = \frac{1}{8\pi^2} \int_M \text{Tr}(F \wedge F) \in \mathbb{Z}</span>

This topological invariant has physical consequences (tunneling between vacua, the <span class="math-inline">\theta</span>-term in QCD).

---

## Electromagnetism as U(1) Gauge Theory

The simplest example: electromagnetism is a <span class="math-inline">U(1)</span> gauge theory.

### The Setup

- Principal bundle: <span class="math-inline">P = M \times U(1)</span> (trivial bundle)
- Connection: <span class="math-inline">A = A_\mu dx^\mu</span> (the electromagnetic potential)
- Curvature: <span class="math-inline">F = dA</span> (the field strength)

### Matter Coupling

An electron field <span class="math-inline">\psi</span> is a section of a line bundle with charge <span class="math-inline">e</span>:

<span class="math-display">D_\mu \psi = (\partial_\mu + ieA_\mu)\psi</span>

The Lagrangian:

<span class="math-display">\mathcal{L} = \bar{\psi}(i\gamma^\mu D_\mu - m)\psi - \frac{1}{4}F_{\mu\nu}F^{\mu\nu}</span>

### Gauge Invariance

Under <span class="math-inline">U(1)</span> transformation <span class="math-inline">g(x) = e^{i\alpha(x)}</span>:

<span class="math-display">\psi \mapsto e^{-ie\alpha}\psi, \quad A_\mu \mapsto A_\mu + \partial_\mu \alpha</span>

The Lagrangian is invariant.

---

## QCD as SU(3) Gauge Theory

Quantum Chromodynamics is an <span class="math-inline">SU(3)</span> gauge theory.

### The Setup

- Structure group: <span class="math-inline">SU(3)</span> (color symmetry)
- Connection: <span class="math-inline">A_\mu = A_\mu^a T^a</span> (8 gluon fields)
- Generators: <span class="math-inline">T^a = \frac{1}{2}\lambda^a</span> (Gell-Mann matrices)

### Field Strength

<span class="math-display">F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a + g f^{abc} A_\mu^b A_\nu^c</span>

The structure constants <span class="math-inline">f^{abc}</span> are non-zero, leading to gluon self-interactions.

### Quarks

Quarks transform in the fundamental representation **3** of <span class="math-inline">SU(3)</span>:

<span class="math-display">\psi = \begin{pmatrix} \psi_r \\ \psi_g \\ \psi_b \end{pmatrix}</span>

The covariant derivative:

<span class="math-display">D_\mu \psi = \partial_\mu \psi - ig A_\mu^a T^a \psi</span>

---

## Comparison: Gauge Theory vs General Relativity

### The Deep Unity: Curvature = Force

At the most fundamental level, **both gauge theory and general relativity share the same geometric DNA**:

- Both use **manifolds**
- Both use **connections** (a rule for parallel transport)
- Both have **curvature** (the failure of parallel transport to commute)
- In both, **curvature is the force**

This is one of the deepest insights of 20th century physics: **forces are geometry**.

| Aspect | Gauge Theory | General Relativity |
|--------|--------------|-------------------|
| **Manifold** | Spacetime <span class="math-inline">M</span> (fixed background) | Spacetime <span class="math-inline">M</span> (dynamical) |
| **Metric** | Fixed, non-dynamical | <span class="math-inline">g_{\mu\nu}</span> **is** the dynamical field |
| **Bundle** | Principal <span class="math-inline">G</span>-bundle over <span class="math-inline">M</span> | Frame bundle of <span class="math-inline">M</span> |
| **Structure group** | <span class="math-inline">U(1), SU(2), SU(3)</span>, etc. | <span class="math-inline">SO(1,3)</span> or <span class="math-inline">GL(4,\mathbb{R})</span> |
| **Connection** | Gauge field <span class="math-inline">A_\mu</span> | Christoffel symbols <span class="math-inline">\Gamma^\rho_{\mu\nu}</span> |
| **Curvature** | Field strength <span class="math-inline">F_{\mu\nu}</span> | Riemann tensor <span class="math-inline">R^\rho_{\sigma\mu\nu}</span> |
| **What curves** | Internal space (fiber) | Spacetime itself |
| **Force on particle** | Lorentz force law | Geodesic deviation |

### How Curvature Creates Force

**In electromagnetism:** A charged particle moving through an electromagnetic field experiences the Lorentz force. Geometrically, the particle's "internal phase" (its position in the <span class="math-inline">U(1)</span> fiber) rotates as it moves. The curvature <span class="math-inline">F_{\mu\nu}</span> measures how much this rotation depends on the path taken.

**In gravity:** A massive particle moves along a geodesic—the "straightest possible path" in curved spacetime. But in a curved space, initially parallel geodesics diverge or converge. This geodesic deviation **is** the gravitational force. The Riemann tensor <span class="math-inline">R^\rho_{\sigma\mu\nu}</span> measures exactly this deviation.

### The Critical Difference: What Is Curved?

Despite the mathematical similarity, there's a profound physical difference:

**Gauge theories curve an "internal" space:**
- At each point of spacetime, there's a fiber (like a little circle for <span class="math-inline">U(1)</span>)
- The connection tells you how to compare fibers at different points
- The curvature measures the twisting of this internal space
- Spacetime itself remains flat (or at least, fixed)

**Gravity curves spacetime itself:**
- There is no separate internal space—the manifold <span class="math-inline">M</span> is all there is
- The metric <span class="math-inline">g_{\mu\nu}</span> is not a background but the dynamical variable
- The curvature is the geometry of the arena where physics happens
- This is **background independence**

This difference is why gravity is so much harder to quantize. In gauge theory, we quantize fields **on** a fixed spacetime stage. In gravity, we would need to quantize the stage itself.

### Why Gravity is Different

In gauge theories, the connection lives on a bundle **over** a fixed spacetime. The metric is given and non-dynamical.

In GR, the metric **is** the dynamical variable. Spacetime itself responds to matter. This makes gravity fundamentally different—and much harder to quantize.

### The Tantalizing Similarity Suggests Unification

The mathematical parallel between gauge theory and gravity is so striking that it strongly suggests a deeper unity. This has motivated several approaches:

**Kaluza-Klein theory (1920s):** Unify gravity and electromagnetism by adding a 5th dimension. If the extra dimension is a tiny circle, the metric on this 5D spacetime splits into:
- 4D metric <span class="math-inline">g_{\mu\nu}</span> → gravity
- Components <span class="math-inline">g_{\mu 5}</span> → electromagnetic potential <span class="math-inline">A_\mu</span>
- Component <span class="math-inline">g_{55}</span> → scalar field (dilaton)

The electromagnetic field strength <span class="math-inline">F_{\mu\nu}</span> emerges as part of the 5D Riemann tensor! Electromagnetism **is** gravity in the extra dimension.

**String theory:** All forces, including gravity, arise from vibrating strings. The different particles (graviton, photon, gluons, etc.) are different vibrational modes of the same fundamental string. Extra dimensions are compactified on Calabi-Yau manifolds, and the geometry of these manifolds determines the gauge groups.

**Loop quantum gravity:** Reformulate GR to look more like a gauge theory, with the connection (rather than the metric) as the fundamental variable. This is the Ashtekar formulation.

### The Big Picture

```
                    GEOMETRY
                       │
         ┌─────────────┴─────────────┐
         │                           │
    FIBER BUNDLE                 SPACETIME
    (internal space)             (the arena)
         │                           │
    ┌────┴────┐                      │
    │         │                      │
Connection  Curvature            Metric
 (A_μ)      (F_μν)               (g_μν)
    │         │                      │
    │         │              ┌───────┴───────┐
    │         │              │               │
    │         │         Connection      Curvature
    │         │          (Γ^ρ_μν)       (R^ρ_σμν)
    │         │              │               │
    ▼         ▼              ▼               ▼
  GAUGE     GAUGE        GEODESIC       GEODESIC
  FIELD     FORCE        EQUATION       DEVIATION
                              │               │
                              └───────┬───────┘
                                      ▼
                                   GRAVITY
```

Both structures use the same mathematical language: manifolds, connections, curvature. The difference is whether this geometry describes an internal space sitting over a fixed spacetime, or spacetime itself.

---

## Wick Rotation and Euclidean QFT

### The Problem with Minkowski Space

Path integrals in Minkowski space involve oscillatory integrands:

<span class="math-display">Z = \int \mathcal{D}\phi \, e^{iS[\phi]}</span>

The factor <span class="math-inline">e^{iS}</span> oscillates wildly and doesn't converge.

### Wick Rotation

We analytically continue to imaginary time:

<span class="math-display">t \to -i\tau</span>

This transforms:
- Minkowski metric <span class="math-inline">ds^2 = -dt^2 + d\vec{x}^2</span> → Euclidean metric <span class="math-inline">ds^2 = d\tau^2 + d\vec{x}^2</span>
- Action <span class="math-inline">iS</span> → <span class="math-inline">-S_E</span>
- Path integral <span class="math-inline">e^{iS}</span> → <span class="math-inline">e^{-S_E}</span>

The Euclidean path integral converges:

<span class="math-display">Z_E = \int \mathcal{D}\phi \, e^{-S_E[\phi]}</span>

### Why It Works

The analytic continuation is justified when:
1. The action has suitable analyticity properties
2. Correlation functions can be continued back to Minkowski space

This is formalized by the **Osterwalder-Schrader axioms**, which give conditions for a Euclidean QFT to define a valid Lorentzian theory.

### Applications

- **Lattice QFT**: Discretize Euclidean spacetime, compute numerically
- **Instantons**: Classical solutions in Euclidean space
- **Thermal field theory**: Euclidean time becomes periodic with period <span class="math-inline">\beta = 1/T</span>

---

## Summary: Mathematical Structures in QFT

| Physics | Mathematics |
|---------|-------------|
| Spacetime | Lorentzian manifold <span class="math-inline">(M, g)</span> |
| Gauge symmetry | Lie group <span class="math-inline">G</span> |
| Gauge field | Connection on principal <span class="math-inline">G</span>-bundle |
| Field strength | Curvature of connection |
| Matter field | Section of associated vector bundle |
| Fermion | Section of spinor bundle |
| Gauge transformation | Bundle automorphism |
| Covariant derivative | Connection-induced derivative |
| Yang-Mills action | Integral of curvature squared |
| Path integral | Euclidean formulation via Wick rotation |
