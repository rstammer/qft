---
layout: topic
title: "Quantum Mechanics and Functional Analysis"
tags:
  - Quantum Mechanics
  - Mathematics
  - Foundations
  - Hilbert Spaces
---

## The Mathematical Framework

Quantum mechanics is, at its core, **linear algebra in infinite dimensions**. The natural mathematical setting is **functional analysis** — the study of vector spaces of functions and linear operators on them.

This is not just a convenient language; it's the **only consistent way** to formulate quantum mechanics. The strange features of quantum theory (superposition, uncertainty, measurement) all emerge naturally from this mathematical structure.

---

## Hilbert Spaces: The Arena of Quantum Mechanics

### Definition

A **Hilbert space** <span class="math-inline">\mathcal{H}</span> is a complete inner product space. This means:

1. **Vector space**: You can add states and multiply by complex numbers
2. **Inner product**: A map <span class="math-inline">\langle \cdot | \cdot \rangle: \mathcal{H} \times \mathcal{H} \to \mathbb{C}</span> satisfying:
   - <span class="math-inline">\langle \phi | \psi \rangle = \overline{\langle \psi | \phi \rangle}</span> (conjugate symmetry)
   - <span class="math-inline">\langle \phi | a\psi_1 + b\psi_2 \rangle = a\langle \phi | \psi_1 \rangle + b\langle \phi | \psi_2 \rangle</span> (linearity)
   - <span class="math-inline">\langle \psi | \psi \rangle \geq 0</span>, with equality iff <span class="math-inline">\psi = 0</span> (positive definite)
3. **Complete**: Every Cauchy sequence converges

### The Norm and Distance

The inner product induces a norm:

<span class="math-display">\|\psi\| = \sqrt{\langle \psi | \psi \rangle}</span>

And a distance:

<span class="math-display">d(\psi, \phi) = \|\psi - \phi\|</span>

Completeness means: if <span class="math-inline">\|\psi_n - \psi_m\| \to 0</span>, then there exists <span class="math-inline">\psi \in \mathcal{H}</span> with <span class="math-inline">\|\psi_n - \psi\| \to 0</span>.

### Key Examples

| Hilbert Space | Elements | Inner Product | Physical Use |
|---------------|----------|---------------|--------------|
| <span class="math-inline">\mathbb{C}^n</span> | Column vectors | <span class="math-inline">\langle \phi | \psi \rangle = \sum_i \bar{\phi}_i \psi_i</span> | Spin, finite systems |
| <span class="math-inline">L^2(\mathbb{R})</span> | Square-integrable functions | <span class="math-inline">\langle \phi | \psi \rangle = \int_{-\infty}^{\infty} \bar{\phi}(x) \psi(x) \, dx</span> | Position space |
| <span class="math-inline">L^2(\mathbb{R}^3)</span> | Functions on 3D space | <span class="math-inline">\langle \phi | \psi \rangle = \int_{\mathbb{R}^3} \bar{\phi}(\mathbf{x}) \psi(\mathbf{x}) \, d^3x</span> | 3D quantum mechanics |
| <span class="math-inline">\ell^2</span> | Square-summable sequences | <span class="math-inline">\langle \phi | \psi \rangle = \sum_{n=0}^{\infty} \bar{\phi}_n \psi_n</span> | Harmonic oscillator |

---

## States as Vectors

### The First Postulate

> **A quantum state is a ray in a Hilbert space.**

A **ray** is an equivalence class of vectors differing only by a nonzero complex scalar:

<span class="math-display">[\psi] = \{ c\psi : c \in \mathbb{C}, c \neq 0 \}</span>

We typically work with **normalized** representatives:

<span class="math-display">\|\psi\| = 1 \quad \Leftrightarrow \quad \langle \psi | \psi \rangle = 1</span>

Even then, an overall phase <span class="math-inline">e^{i\theta}\psi</span> represents the same physical state.

### Superposition

Since <span class="math-inline">\mathcal{H}</span> is a vector space, if <span class="math-inline">\psi_1</span> and <span class="math-inline">\psi_2</span> are states, so is:

<span class="math-display">\psi = c_1 \psi_1 + c_2 \psi_2</span>

This is the **superposition principle** — it's simply linearity of the vector space.

### Dirac Notation

Physicists use Dirac's bra-ket notation:

| Notation | Meaning |
|----------|---------|
| <span class="math-inline">|\psi\rangle</span> | A vector (ket) in <span class="math-inline">\mathcal{H}</span> |
| <span class="math-inline">\langle\phi|</span> | A dual vector (bra) in <span class="math-inline">\mathcal{H}^*</span> |
| <span class="math-inline">\langle\phi|\psi\rangle</span> | Inner product |
| <span class="math-inline">|\psi\rangle\langle\phi|</span> | Outer product (an operator) |

The Riesz representation theorem guarantees that every continuous linear functional on <span class="math-inline">\mathcal{H}</span> has the form <span class="math-inline">\psi \mapsto \langle \phi | \psi \rangle</span> for some unique <span class="math-inline">\phi \in \mathcal{H}</span>.

---

## Observables as Self-Adjoint Operators

### The Second Postulate

> **Observables are self-adjoint operators on the Hilbert space.**

An operator <span class="math-inline">A: \mathcal{D}(A) \to \mathcal{H}</span> is:
- **Linear**: <span class="math-inline">A(c_1\psi_1 + c_2\psi_2) = c_1 A\psi_1 + c_2 A\psi_2</span>
- **Self-adjoint**: <span class="math-inline">A = A^\dagger</span> and <span class="math-inline">\mathcal{D}(A) = \mathcal{D}(A^\dagger)</span>

The **adjoint** <span class="math-inline">A^\dagger</span> is defined by:

<span class="math-display">\langle \phi | A\psi \rangle = \langle A^\dagger \phi | \psi \rangle</span>

for all <span class="math-inline">\psi \in \mathcal{D}(A)</span>, <span class="math-inline">\phi \in \mathcal{D}(A^\dagger)</span>.

### Why Self-Adjoint?

Self-adjoint operators have:
1. **Real eigenvalues** — measurement outcomes must be real numbers
2. **Orthogonal eigenvectors** — distinct outcomes are distinguishable
3. **Spectral theorem** — complete description of the operator

### Key Examples

| Observable | Operator | Domain |
|------------|----------|--------|
| Position | <span class="math-inline">\hat{x}\psi(x) = x\psi(x)</span> | <span class="math-inline">\{\psi : \int |x\psi(x)|^2 dx < \infty\}</span> |
| Momentum | <span class="math-inline">\hat{p}\psi(x) = -i\hbar \frac{d\psi}{dx}</span> | <span class="math-inline">\{\psi : \psi' \in L^2\}</span> |
| Energy | <span class="math-inline">\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V(x)</span> | Depends on <span class="math-inline">V</span> |
| Angular momentum | <span class="math-inline">\hat{L}_z = -i\hbar \frac{\partial}{\partial \phi}</span> | Periodic functions |

### Bounded vs Unbounded Operators

In finite dimensions, all linear operators are bounded (continuous). In infinite dimensions:

| Type | Definition | Examples |
|------|------------|----------|
| Bounded | <span class="math-inline">\|A\psi\| \leq C\|\psi\|</span> for some <span class="math-inline">C</span> | Projections, unitary operators |
| Unbounded | No such <span class="math-inline">C</span> exists | Position, momentum, Hamiltonian |

Most physical observables are **unbounded**. This is why we need the domain <span class="math-inline">\mathcal{D}(A)</span> — the operator is only defined on a dense subspace.

---

## The Spectral Theorem

### For Bounded Self-Adjoint Operators

If <span class="math-inline">A</span> is bounded and self-adjoint:

<span class="math-display">A = \int_{\sigma(A)} \lambda \, dE(\lambda)</span>

where:
- <span class="math-inline">\sigma(A) \subseteq \mathbb{R}</span> is the **spectrum** (generalized eigenvalues)
- <span class="math-inline">E(\lambda)</span> is the **spectral measure** (projection-valued measure)

### For Unbounded Self-Adjoint Operators

The same formula holds, but with more care about domains. The spectrum can be:

| Type | Definition | Example |
|------|------------|---------|
| Point spectrum | True eigenvalues: <span class="math-inline">A\psi = \lambda\psi</span> | Bound states of hydrogen |
| Continuous spectrum | No eigenvectors, but <span class="math-inline">(A - \lambda)^{-1}</span> unbounded | Free particle momentum |
| Residual spectrum | (Doesn't occur for self-adjoint operators) | — |

### Physical Interpretation

The spectral theorem says:

<span class="math-display">\langle \psi | A | \psi \rangle = \int_{\sigma(A)} \lambda \, d\langle \psi | E(\lambda) | \psi \rangle</span>

The measure <span class="math-inline">\mu_\psi(\lambda) = \langle \psi | E(\lambda) | \psi \rangle</span> gives the **probability distribution** of measurement outcomes.

---

## The Canonical Commutation Relation

### Position and Momentum

The operators <span class="math-inline">\hat{x}</span> and <span class="math-inline">\hat{p}</span> satisfy:

<span class="math-display">[\hat{x}, \hat{p}] = \hat{x}\hat{p} - \hat{p}\hat{x} = i\hbar</span>

This is the **canonical commutation relation** (CCR).

### Proof in Position Representation

<span class="math-display">[\hat{x}, \hat{p}]\psi = x(-i\hbar\psi') - (-i\hbar)(x\psi)' = -i\hbar x\psi' + i\hbar\psi + i\hbar x\psi' = i\hbar\psi</span>

### The Stone-von Neumann Theorem

This fundamental theorem states: up to unitary equivalence, there is only **one** irreducible representation of the CCR.

In other words, any quantum system with one degree of freedom where <span class="math-inline">[\hat{x}, \hat{p}] = i\hbar</span> is unitarily equivalent to the standard position representation on <span class="math-inline">L^2(\mathbb{R})</span>.

### The Uncertainty Principle

For any two observables <span class="math-inline">A, B</span>:

<span class="math-display">\Delta A \cdot \Delta B \geq \frac{1}{2}|\langle [A, B] \rangle|</span>

where <span class="math-inline">\Delta A = \sqrt{\langle A^2 \rangle - \langle A \rangle^2}</span> is the standard deviation.

For position and momentum:

<span class="math-display">\Delta x \cdot \Delta p \geq \frac{\hbar}{2}</span>

This is **not** a measurement limitation — it's a fundamental property of the Hilbert space structure.

---

## Time Evolution: Unitary Operators

### The Third Postulate

> **Time evolution is unitary.**

A **unitary operator** <span class="math-inline">U</span> satisfies:

<span class="math-display">U^\dagger U = U U^\dagger = I</span>

Equivalently: <span class="math-inline">U</span> preserves inner products:

<span class="math-display">\langle U\phi | U\psi \rangle = \langle \phi | \psi \rangle</span>

This ensures:
- Probabilities are conserved
- Normalization is preserved
- Evolution is reversible

### Stone's Theorem

Every strongly continuous one-parameter unitary group <span class="math-inline">U(t)</span> has the form:

<span class="math-display">U(t) = e^{-iHt/\hbar}</span>

for some self-adjoint operator <span class="math-inline">H</span> (the **Hamiltonian**).

Conversely, every self-adjoint <span class="math-inline">H</span> generates a unitary group.

### The Schrödinger Equation

Differentiating <span class="math-inline">|\psi(t)\rangle = U(t)|\psi(0)\rangle</span>:

<span class="math-display">i\hbar \frac{d}{dt}|\psi(t)\rangle = H|\psi(t)\rangle</span>

This is the **Schrödinger equation** — it emerges automatically from Stone's theorem!

---

## Measurement: Projection Operators

### The Fourth Postulate

> **Measurement of observable <span class="math-inline">A</span> with outcome <span class="math-inline">\lambda</span> projects the state onto the eigenspace.**

If <span class="math-inline">A</span> has discrete spectrum with eigenvectors <span class="math-inline">|a_n\rangle</span>:

<span class="math-display">A|a_n\rangle = a_n|a_n\rangle</span>

The probability of outcome <span class="math-inline">a_n</span> is:

<span class="math-display">P(a_n) = |\langle a_n | \psi \rangle|^2</span>

After measurement, the state becomes:

<span class="math-display">|\psi\rangle \to \frac{P_n|\psi\rangle}{\|P_n|\psi\rangle\|}</span>

where <span class="math-inline">P_n = |a_n\rangle\langle a_n|</span> is the projection onto the eigenspace.

### Projection Operators

A **projection** <span class="math-inline">P</span> satisfies:
- <span class="math-inline">P^2 = P</span> (idempotent)
- <span class="math-inline">P^\dagger = P</span> (self-adjoint)

Projections correspond to **yes/no questions** about the system.

### Resolution of the Identity

For an observable <span class="math-inline">A</span> with complete eigenbasis:

<span class="math-display">\sum_n |a_n\rangle\langle a_n| = I</span>

or in the continuous case:

<span class="math-display">\int |a\rangle\langle a| \, da = I</span>

This expresses completeness: every state can be expanded in the eigenbasis.

---

## Tensor Products: Composite Systems

### Definition

For two Hilbert spaces <span class="math-inline">\mathcal{H}_1, \mathcal{H}_2</span>, the **tensor product** <span class="math-inline">\mathcal{H}_1 \otimes \mathcal{H}_2</span> is the Hilbert space of the composite system.

If <span class="math-inline">\{|e_i\rangle\}</span> is a basis for <span class="math-inline">\mathcal{H}_1</span> and <span class="math-inline">\{|f_j\rangle\}</span> for <span class="math-inline">\mathcal{H}_2</span>, then <span class="math-inline">\{|e_i\rangle \otimes |f_j\rangle\}</span> is a basis for <span class="math-inline">\mathcal{H}_1 \otimes \mathcal{H}_2</span>.

### Product States vs Entangled States

A **product state** has the form:

<span class="math-display">|\psi\rangle = |\psi_1\rangle \otimes |\psi_2\rangle</span>

An **entangled state** cannot be written this way:

<span class="math-display">|\Psi\rangle = \frac{1}{\sqrt{2}}(|0\rangle \otimes |1\rangle - |1\rangle \otimes |0\rangle)</span>

Entanglement is a purely quantum phenomenon with no classical analog.

### Partial Trace

For a state <span class="math-inline">\rho</span> on <span class="math-inline">\mathcal{H}_1 \otimes \mathcal{H}_2</span>, the **partial trace** gives the reduced state on subsystem 1:

<span class="math-display">\rho_1 = \text{Tr}_2(\rho)</span>

This describes what observer 1 sees without access to system 2.

---

## Summary: The Mathematical Structure

| Physics Concept | Mathematical Object |
|-----------------|---------------------|
| State | Ray in Hilbert space <span class="math-inline">\mathcal{H}</span> |
| Observable | Self-adjoint operator on <span class="math-inline">\mathcal{H}</span> |
| Possible outcomes | Spectrum of the operator |
| Probability | <span class="math-inline">|\langle a | \psi \rangle|^2</span> |
| Expectation value | <span class="math-inline">\langle \psi | A | \psi \rangle</span> |
| Time evolution | Unitary operator <span class="math-inline">e^{-iHt/\hbar}</span> |
| Measurement | Projection onto eigenspace |
| Composite system | Tensor product <span class="math-inline">\mathcal{H}_1 \otimes \mathcal{H}_2</span> |
| Uncertainty | Non-commutativity: <span class="math-inline">[A, B] \neq 0</span> |

---

## Key Theorems

| Theorem | Statement | Physical Meaning |
|---------|-----------|------------------|
| Spectral theorem | Self-adjoint operators have real spectrum and spectral decomposition | Observables have real outcomes |
| Stone's theorem | Unitary groups ↔ self-adjoint generators | Time evolution ↔ energy |
| Stone-von Neumann | CCR has unique irreducible representation | Position/momentum are canonical |
| Riesz representation | <span class="math-inline">\mathcal{H}^* \cong \mathcal{H}</span> | Bras and kets are dual |
| Gleason's theorem | Probability measures come from density operators | Born rule is (almost) forced |

---

## Why Functional Analysis?

The infinite-dimensional nature of quantum mechanics is **essential**, not a technicality:

1. **Continuous spectra**: Position and momentum have continuous outcomes
2. **Unbounded operators**: Most physical observables are unbounded
3. **Domain issues**: <span class="math-inline">\hat{x}</span> and <span class="math-inline">\hat{p}</span> cannot both be bounded
4. **No finite-dimensional CCR**: <span class="math-inline">[A, B] = iI</span> has no finite-dimensional representation (take trace!)

Functional analysis provides the rigorous foundation for all of this. Without it, quantum mechanics would be a collection of formal manipulations rather than a coherent mathematical theory.
