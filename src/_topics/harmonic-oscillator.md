---
layout: topic
title: "The Harmonic Oscillator"
tags:
  - Quantum Mechanics
  - Classical Mechanics
  - Foundations
  - Examples
---

## Why the Harmonic Oscillator Matters

The harmonic oscillator is the **most important system in physics**. This is not an exaggeration — it appears everywhere:

- Vibrations of atoms in molecules and crystals
- Electromagnetic field modes (photons)
- Phonons in solids
- The foundation of quantum field theory
- Any system near a stable equilibrium

The reason is mathematical: any smooth potential near a minimum looks quadratic. If <span class="math-inline">V(x)</span> has a minimum at <span class="math-inline">x_0</span>, Taylor expansion gives:

<span class="math-display">V(x) \approx V(x_0) + \frac{1}{2}V''(x_0)(x - x_0)^2 + \ldots</span>

The first derivative vanishes (it's a minimum), so the leading term is quadratic — a harmonic oscillator!

---

## The Classical Harmonic Oscillator

### Definition

A **harmonic oscillator** is a system with a restoring force proportional to displacement:

<span class="math-display">F = -kx</span>

where <span class="math-inline">k > 0</span> is the spring constant.

### Equation of Motion

Newton's second law gives:

<span class="math-display">m\ddot{x} = -kx</span>

Or:

<span class="math-display">\ddot{x} + \omega^2 x = 0</span>

where <span class="math-inline">\omega = \sqrt{k/m}</span> is the **angular frequency**.

### Solution

The general solution is:

<span class="math-display">x(t) = A\cos(\omega t) + B\sin(\omega t) = C\cos(\omega t + \phi)</span>

where <span class="math-inline">C = \sqrt{A^2 + B^2}</span> is the amplitude and <span class="math-inline">\phi</span> is the phase.

### Energy

The potential energy is:

<span class="math-display">V(x) = \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 x^2</span>

The kinetic energy is:

<span class="math-display">T = \frac{1}{2}m\dot{x}^2</span>

The total energy:

<span class="math-display">E = T + V = \frac{1}{2}m\dot{x}^2 + \frac{1}{2}m\omega^2 x^2</span>

This is conserved and can take **any positive value**.

---

## Example 1: Mass on a Spring

### Setup

A mass <span class="math-inline">m = 0.5</span> kg is attached to a spring with <span class="math-inline">k = 200</span> N/m. It is displaced 0.1 m from equilibrium and released.

### Calculation

**Angular frequency:**
<span class="math-display">\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{200}{0.5}} = \sqrt{400} = 20 \text{ rad/s}</span>

**Period:**
<span class="math-display">T = \frac{2\pi}{\omega} = \frac{2\pi}{20} = 0.314 \text{ s}</span>

**Frequency:**
<span class="math-display">f = \frac{1}{T} = \frac{\omega}{2\pi} = 3.18 \text{ Hz}</span>

**Position (with initial conditions <span class="math-inline">x(0) = 0.1</span> m, <span class="math-inline">\dot{x}(0) = 0</span>):**
<span class="math-display">x(t) = 0.1 \cos(20t) \text{ m}</span>

**Velocity:**
<span class="math-display">\dot{x}(t) = -2 \sin(20t) \text{ m/s}</span>

**Maximum velocity:** <span class="math-inline">v_{\max} = \omega A = 20 \times 0.1 = 2</span> m/s

**Total energy:**
<span class="math-display">E = \frac{1}{2}kA^2 = \frac{1}{2}(200)(0.1)^2 = 1 \text{ J}</span>

---

## Example 2: Simple Pendulum (Small Angles)

### Setup

A pendulum of length <span class="math-inline">L</span> swings through small angles <span class="math-inline">\theta</span>.

### Derivation

The tangential restoring force is:

<span class="math-display">F = -mg\sin\theta \approx -mg\theta</span>

for small <span class="math-inline">\theta</span>. With arc length <span class="math-inline">s = L\theta</span>:

<span class="math-display">m\ddot{s} = -mg\frac{s}{L}</span>

<span class="math-display">\ddot{s} + \frac{g}{L}s = 0</span>

This is a harmonic oscillator with:

<span class="math-display">\omega = \sqrt{\frac{g}{L}}, \quad T = 2\pi\sqrt{\frac{L}{g}}</span>

### Calculation

For <span class="math-inline">L = 1</span> m and <span class="math-inline">g = 9.8</span> m/s²:

<span class="math-display">T = 2\pi\sqrt{\frac{1}{9.8}} = 2\pi \times 0.319 = 2.01 \text{ s}</span>

This is the famous "seconds pendulum" — about 2 seconds per complete swing.

---

## The Quantum Harmonic Oscillator

### The Hamiltonian

In quantum mechanics, the Hamiltonian is:

<span class="math-display">\hat{H} = \frac{\hat{p}^2}{2m} + \frac{1}{2}m\omega^2\hat{x}^2</span>

We need to solve the eigenvalue problem:

<span class="math-display">\hat{H}|\psi\rangle = E|\psi\rangle</span>

### Method 1: Differential Equation

In position representation, <span class="math-inline">\hat{p} = -i\hbar \frac{d}{dx}</span>, so:

<span class="math-display">-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + \frac{1}{2}m\omega^2 x^2 \psi = E\psi</span>

This is solved by the **Hermite functions**:

<span class="math-display">\psi_n(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4} \frac{1}{\sqrt{2^n n!}} H_n\left(\sqrt{\frac{m\omega}{\hbar}}x\right) e^{-\frac{m\omega x^2}{2\hbar}}</span>

where <span class="math-inline">H_n</span> are the Hermite polynomials.

### Method 2: Ladder Operators (Algebraic)

Define the **annihilation** and **creation** operators:

<span class="math-display">\hat{a} = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} + \frac{i\hat{p}}{m\omega}\right)</span>

<span class="math-display">\hat{a}^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} - \frac{i\hat{p}}{m\omega}\right)</span>

These satisfy:

<span class="math-display">[\hat{a}, \hat{a}^\dagger] = 1</span>

The Hamiltonian becomes:

<span class="math-display">\hat{H} = \hbar\omega\left(\hat{a}^\dagger\hat{a} + \frac{1}{2}\right) = \hbar\omega\left(\hat{n} + \frac{1}{2}\right)</span>

where <span class="math-inline">\hat{n} = \hat{a}^\dagger\hat{a}</span> is the **number operator**.

### Energy Levels

The eigenvalues of <span class="math-inline">\hat{n}</span> are <span class="math-inline">n = 0, 1, 2, \ldots</span>

Therefore, the energy levels are:

<span class="math-display">E_n = \hbar\omega\left(n + \frac{1}{2}\right), \quad n = 0, 1, 2, \ldots</span>

**Key features:**
- Energy is **quantized** (discrete values only)
- Levels are **equally spaced** by <span class="math-inline">\hbar\omega</span>
- There is **zero-point energy**: <span class="math-inline">E_0 = \frac{1}{2}\hbar\omega \neq 0</span>

### Ladder Operator Action

<span class="math-display">\hat{a}|n\rangle = \sqrt{n}|n-1\rangle</span>

<span class="math-display">\hat{a}^\dagger|n\rangle = \sqrt{n+1}|n+1\rangle</span>

The ground state satisfies <span class="math-inline">\hat{a}|0\rangle = 0</span>.

All states can be built from the ground state:

<span class="math-display">|n\rangle = \frac{(\hat{a}^\dagger)^n}{\sqrt{n!}}|0\rangle</span>

---

## Example 3: Quantum Energy Levels

### Setup

A particle of mass <span class="math-inline">m = 10^{-26}</span> kg oscillates with frequency <span class="math-inline">\nu = 10^{13}</span> Hz (typical for molecular vibrations).

### Calculation

**Angular frequency:**
<span class="math-display">\omega = 2\pi\nu = 2\pi \times 10^{13} = 6.28 \times 10^{13} \text{ rad/s}</span>

**Energy quantum:**
<span class="math-display">\hbar\omega = (1.055 \times 10^{-34})(6.28 \times 10^{13}) = 6.63 \times 10^{-21} \text{ J}</span>

In electron volts:
<span class="math-display">\hbar\omega = \frac{6.63 \times 10^{-21}}{1.6 \times 10^{-19}} = 0.041 \text{ eV}</span>

**Energy levels:**

| <span class="math-inline">n</span> | <span class="math-inline">E_n</span> (eV) |
|-----|------------|
| 0 | 0.021 |
| 1 | 0.062 |
| 2 | 0.103 |
| 3 | 0.144 |

**Zero-point energy:**
<span class="math-display">E_0 = \frac{1}{2}\hbar\omega = 0.021 \text{ eV}</span>

Even at absolute zero, the oscillator has this minimum energy — a purely quantum effect!

---

## Example 4: Ground State Wave Function

### The Ground State

From <span class="math-inline">\hat{a}|0\rangle = 0</span> in position representation:

<span class="math-display">\left(\hat{x} + \frac{i\hat{p}}{m\omega}\right)\psi_0 = 0</span>

<span class="math-display">\left(x + \frac{\hbar}{m\omega}\frac{d}{dx}\right)\psi_0 = 0</span>

<span class="math-display">\frac{d\psi_0}{dx} = -\frac{m\omega}{\hbar}x\psi_0</span>

### Solution

<span class="math-display">\psi_0(x) = A \exp\left(-\frac{m\omega x^2}{2\hbar}\right)</span>

Normalizing:

<span class="math-display">A = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4}</span>

### Properties

The ground state is a **Gaussian** centered at the origin.

**Width (standard deviation):**
<span class="math-display">\Delta x = \sqrt{\langle x^2 \rangle} = \sqrt{\frac{\hbar}{2m\omega}}</span>

**Momentum uncertainty:**
<span class="math-display">\Delta p = \sqrt{\frac{\hbar m\omega}{2}}</span>

**Uncertainty product:**
<span class="math-display">\Delta x \cdot \Delta p = \frac{\hbar}{2}</span>

The ground state **saturates the uncertainty principle** — it's a minimum uncertainty state!

---

## Example 5: Transition Frequencies

### Photon Emission

When the oscillator transitions from level <span class="math-inline">n</span> to level <span class="math-inline">n-1</span>, it emits a photon with energy:

<span class="math-display">E_\gamma = E_n - E_{n-1} = \hbar\omega</span>

**All transitions emit the same frequency!** This is unique to the harmonic oscillator (equally spaced levels).

### Selection Rule

The matrix element for electric dipole transitions:

<span class="math-display">\langle m | \hat{x} | n \rangle = \sqrt{\frac{\hbar}{2m\omega}}\left(\sqrt{n}\delta_{m,n-1} + \sqrt{n+1}\delta_{m,n+1}\right)</span>

This gives the **selection rule**: <span class="math-inline">\Delta n = \pm 1</span>

Only transitions between adjacent levels are allowed (for electric dipole radiation).

---

## The Classical Limit

### Correspondence Principle

For large <span class="math-inline">n</span>, quantum mechanics should approach classical behavior.

**Classical energy:** Any <span class="math-inline">E > 0</span> is allowed

**Quantum energy:** <span class="math-inline">E_n = \hbar\omega(n + 1/2)</span>

For large <span class="math-inline">n</span>:
<span class="math-display">\frac{E_{n+1} - E_n}{E_n} = \frac{\hbar\omega}{\hbar\omega(n + 1/2)} \approx \frac{1}{n} \to 0</span>

The energy levels become so closely spaced that they appear continuous — the classical limit is recovered.

### Probability Density

Classically, the particle spends more time near the turning points (where it moves slowly).

The classical probability density is:

<span class="math-display">P_{\text{classical}}(x) = \frac{1}{\pi\sqrt{A^2 - x^2}}</span>

For large <span class="math-inline">n</span>, the quantum probability density <span class="math-inline">|\psi_n(x)|^2</span> oscillates rapidly and its average approaches the classical distribution.

---

## Connection to Quantum Field Theory

In QFT, the electromagnetic field is treated as a collection of harmonic oscillators — one for each mode (frequency and direction).

The **photon** is a quantum of excitation:
- <span class="math-inline">|0\rangle</span> = vacuum (zero photons)
- <span class="math-inline">|1\rangle = \hat{a}^\dagger|0\rangle</span> = one photon
- <span class="math-inline">|n\rangle</span> = n photons

The creation operator <span class="math-inline">\hat{a}^\dagger</span> **creates a photon**.
The annihilation operator <span class="math-inline">\hat{a}</span> **destroys a photon**.

This is why the harmonic oscillator is the foundation of quantum field theory!

---

## Summary

| Aspect | Classical | Quantum |
|--------|-----------|---------|
| Energy | Any <span class="math-inline">E \geq 0</span> | <span class="math-inline">E_n = \hbar\omega(n + 1/2)</span> |
| Ground state | <span class="math-inline">E = 0</span> (at rest) | <span class="math-inline">E_0 = \frac{1}{2}\hbar\omega</span> (zero-point) |
| Position | Definite trajectory | Probability distribution |
| Minimum uncertainty | N/A | <span class="math-inline">\Delta x \Delta p = \hbar/2</span> |
| Transitions | Continuous | Discrete, <span class="math-inline">\Delta n = \pm 1</span> |

### Key Formulas

| Quantity | Formula |
|----------|---------|
| Angular frequency | <span class="math-inline">\omega = \sqrt{k/m}</span> |
| Energy levels | <span class="math-inline">E_n = \hbar\omega(n + 1/2)</span> |
| Ladder operators | <span class="math-inline">[\hat{a}, \hat{a}^\dagger] = 1</span> |
| Ground state | <span class="math-inline">\psi_0 \propto e^{-m\omega x^2/2\hbar}</span> |
| Number operator | <span class="math-inline">\hat{n} = \hat{a}^\dagger\hat{a}</span> |

---

## References

- D. J. Griffiths, *Introduction to Quantum Mechanics*, 3rd ed. (Cambridge University Press, 2018), Chapter 2
- J. J. Sakurai and J. Napolitano, *Modern Quantum Mechanics*, 2nd ed. (Addison-Wesley, 2011), Chapter 2
- L. D. Landau and E. M. Lifshitz, *Quantum Mechanics: Non-Relativistic Theory*, 3rd ed. (Pergamon, 1977), §23
- R. Shankar, *Principles of Quantum Mechanics*, 2nd ed. (Springer, 1994), Chapter 7
- C. Cohen-Tannoudji, B. Diu, and F. Laloë, *Quantum Mechanics*, Vol. 1 (Wiley, 1977), Chapter V
