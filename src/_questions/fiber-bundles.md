---
layout: question
title: What are Fiber Bundles and why do they matter in physics?
tags:
  - Mathematics
  - Fiber Bundles
  - Gauge Theory
---

## Short Answer

A **fiber bundle** is a space that locally looks like a product of two spaces, but globally may be "twisted." In physics, fiber bundles provide the geometric framework for gauge theories: gauge fields are connections, matter fields are sections, and gauge transformations are bundle automorphisms.

---

## The Basic Idea

### Motivation: The Möbius Strip

Consider a Möbius strip. Locally, it looks like a rectangle <span class="math-inline">I \times I</span>. But globally, it's twisted—you can't untwist it into a cylinder without cutting.

This is a fiber bundle:
- Base space <span class="math-inline">B = S^1</span> (the circle)
- Fiber <span class="math-inline">F = I</span> (an interval)
- Total space <span class="math-inline">E</span> = Möbius strip

### Definition

A **fiber bundle** consists of:
- Total space <span class="math-inline">E</span>
- Base space <span class="math-inline">B</span>
- Fiber <span class="math-inline">F</span>
- Projection map <span class="math-inline">\pi: E \to B</span>

Such that locally <span class="math-inline">E</span> looks like <span class="math-inline">B \times F</span>:

For each point <span class="math-inline">b \in B</span>, there exists a neighborhood <span class="math-inline">U</span> and a homeomorphism:
<span class="math-display">\phi: \pi^{-1}(U) \xrightarrow{\sim} U \times F</span>

---

## Types of Fiber Bundles

### Vector Bundles

The fiber is a vector space <span class="math-inline">V</span>. Examples:

| Bundle | Base | Fiber | Physical Meaning |
|--------|------|-------|-----------------|
| Tangent bundle <span class="math-inline">TM</span> | Manifold <span class="math-inline">M</span> | <span class="math-inline">\mathbb{R}^n</span> | Velocity vectors |
| Cotangent bundle <span class="math-inline">T^*M</span> | Manifold <span class="math-inline">M</span> | <span class="math-inline">\mathbb{R}^n</span> | Momentum, 1-forms |
| Line bundle | <span class="math-inline">M</span> | <span class="math-inline">\mathbb{C}</span> | Charged scalar field |
| Spinor bundle | <span class="math-inline">M</span> | <span class="math-inline">\mathbb{C}^4</span> | Dirac fermions |

### Principal Bundles

The fiber is a Lie group <span class="math-inline">G</span>, acting on itself by right multiplication.

A **principal <span class="math-inline">G</span>-bundle** <span class="math-inline">P \xrightarrow{\pi} M</span> has:
- Free right <span class="math-inline">G</span>-action on <span class="math-inline">P</span>
- <span class="math-inline">M = P/G</span> (base is the orbit space)

**Examples in physics:**

| Physical Theory | Structure Group | Bundle |
|-----------------|-----------------|--------|
| Electromagnetism | <span class="math-inline">U(1)</span> | Circle bundle |
| Yang-Mills | <span class="math-inline">SU(N)</span> | <span class="math-inline">SU(N)</span>-bundle |
| General Relativity | <span class="math-inline">SO(1,3)</span> | Frame bundle |
| Spin geometry | <span class="math-inline">Spin(1,3)</span> | Spin bundle |

---

## Connections

### The Problem of Parallel Transport

Given a vector at one point, how do we "move" it to another point? On a curved space, there's no canonical way to do this.

A **connection** provides a rule for parallel transport.

### Connection on a Principal Bundle

A connection on <span class="math-inline">P</span> is a Lie algebra-valued 1-form:

<span class="math-display">A \in \Omega^1(P, \mathfrak{g})</span>

satisfying compatibility conditions with the <span class="math-inline">G</span>-action.

Locally (in a trivialization), this becomes:

<span class="math-display">A = A_\mu dx^\mu, \quad A_\mu \in \mathfrak{g}</span>

**This is the gauge field!**

### Curvature

The curvature of a connection measures non-commutativity of parallel transport:

<span class="math-display">F = dA + A \wedge A</span>

In components:
<span class="math-display">F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu + [A_\mu, A_\nu]</span>

**This is the field strength!**

---

## Sections

### Definition

A **section** of a bundle <span class="math-inline">E \xrightarrow{\pi} B</span> is a map <span class="math-inline">s: B \to E</span> such that <span class="math-inline">\pi \circ s = \text{id}_B</span>.

In other words: a section picks out one point in each fiber.

### Physical Interpretation

| Bundle Type | Section | Physical Field |
|-------------|---------|----------------|
| Line bundle | <span class="math-inline">\psi: M \to E</span> | Scalar field |
| Vector bundle | <span class="math-inline">\psi: M \to E</span> | Matter field |
| Spinor bundle | <span class="math-inline">\psi: M \to S</span> | Dirac fermion |

### Covariant Derivative

A connection induces a derivative on sections:

<span class="math-display">D_\mu \psi = \partial_\mu \psi + A_\mu \psi</span>

This is the **covariant derivative**—it transforms correctly under gauge transformations.

---

## Associated Bundles

Given a principal bundle <span class="math-inline">P</span> and a representation <span class="math-inline">\rho: G \to GL(V)</span>, we can form the **associated vector bundle**:

<span class="math-display">E = P \times_\rho V = (P \times V)/G</span>

where <span class="math-inline">G</span> acts by <span class="math-inline">(p, v) \sim (pg, \rho(g^{-1})v)</span>.

### Example: Electromagnetism

- Principal bundle: <span class="math-inline">U(1)</span>-bundle over spacetime
- Representation: <span class="math-inline">\rho_n: U(1) \to GL(\mathbb{C})</span>, <span class="math-inline">e^{i\theta} \mapsto e^{in\theta}</span>
- Associated bundle: Line bundle (charge <span class="math-inline">n</span> matter field)

An electron (<span class="math-inline">n = -1</span>) is a section of the associated line bundle.

---

## Gauge Transformations

A **gauge transformation** is an automorphism of the principal bundle:

<span class="math-display">g: P \to P, \quad g(p \cdot h) = g(p) \cdot h</span>

Equivalently, a section <span class="math-inline">g: M \to G</span>.

Under gauge transformation:
- Connection: <span class="math-inline">A \mapsto g^{-1}Ag + g^{-1}dg</span>
- Curvature: <span class="math-inline">F \mapsto g^{-1}Fg</span> (covariant)
- Section: <span class="math-inline">\psi \mapsto \rho(g^{-1})\psi</span>

The physics is invariant under gauge transformations—this is **gauge symmetry**.

---

## Topology and Bundles

### Trivial vs Non-trivial Bundles

A bundle is **trivial** if <span class="math-inline">E \cong B \times F</span> globally.

**Non-trivial bundles** are topologically distinct from the product. Examples:
- Möbius strip (non-trivial line bundle over <span class="math-inline">S^1</span>)
- Hopf fibration <span class="math-inline">S^3 \to S^2</span> (non-trivial circle bundle)

### Characteristic Classes

Topological invariants that measure "how twisted" a bundle is:

| Class | Bundle Type | Physical Meaning |
|-------|-------------|------------------|
| Chern classes <span class="math-inline">c_n</span> | Complex vector bundle | Magnetic charge, instanton number |
| Stiefel-Whitney <span class="math-inline">w_n</span> | Real vector bundle | Spin structure obstruction |
| Pontryagin <span class="math-inline">p_n</span> | Real vector bundle | Gravitational instantons |

### Chern Number and Magnetic Monopoles

For a <span class="math-inline">U(1)</span> bundle over <span class="math-inline">S^2</span>:

<span class="math-display">c_1 = \frac{1}{2\pi} \int_{S^2} F \in \mathbb{Z}</span>

This integer is the **magnetic charge**. Dirac's quantization condition:

<span class="math-display">eg = \frac{n}{2}, \quad n \in \mathbb{Z}</span>

follows from the requirement that the bundle be well-defined.

---

## Summary: The Fiber Bundle Dictionary

| Physics | Mathematics |
|---------|-------------|
| Gauge group | Structure group <span class="math-inline">G</span> |
| Gauge field | Connection on principal bundle |
| Field strength | Curvature of connection |
| Matter field | Section of associated bundle |
| Covariant derivative | Connection-induced derivative |
| Gauge transformation | Bundle automorphism |
| Magnetic charge | First Chern class |
| Instanton number | Second Chern class |
