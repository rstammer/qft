---
layout: topic
title: "Bohr's Atomic Model and Spectral Lines"
tags:
  - Quantum Mechanics
  - History
  - Atomic Physics
  - Foundations
---

## The Mystery: Why Do Atoms Emit Specific Colors?

Heat a gas (like hydrogen) and it glows. But unlike a hot iron that emits a continuous spectrum of colors, gases emit only **specific wavelengths** — discrete colored lines against a dark background.

This was deeply puzzling in the early 1900s. Classical physics predicted that electrons orbiting a nucleus should:
1. Emit radiation continuously (accelerating charges radiate)
2. Spiral into the nucleus in about 10⁻¹¹ seconds
3. Produce a continuous spectrum, not discrete lines

Atoms should not exist, and yet they do. And they emit these mysterious spectral lines.

---

## What Are Spectral Lines?

### Emission vs Absorption

When you pass white light through a cool gas, specific wavelengths are **absorbed**, leaving dark lines (absorption spectrum). When you heat a gas, it **emits** light at those same wavelengths (emission spectrum).

```
EMISSION SPECTRUM (hot gas):
────────────────────────────────────────────
     |    |        |   |
     λ₁   λ₂       λ₃  λ₄

     Bright lines on dark background


ABSORPTION SPECTRUM (cool gas + white light):
████████████████████████████████████████████
     ▼    ▼        ▼   ▼
     λ₁   λ₂       λ₃  λ₄

     Dark lines on bright background
```

### The Hydrogen Spectrum

Hydrogen, the simplest atom, shows a remarkably regular pattern. In 1885, Johann Balmer discovered an empirical formula for the visible lines:

<span class="math-display">\lambda = B \cdot \frac{n^2}{n^2 - 4}, \quad n = 3, 4, 5, \ldots</span>

where <span class="math-inline">B = 364.56</span> nm.

This gives the **Balmer series** (visible light):
- <span class="math-inline">n = 3</span>: λ = 656.3 nm (red, "H-alpha")
- <span class="math-inline">n = 4</span>: λ = 486.1 nm (cyan, "H-beta")
- <span class="math-inline">n = 5</span>: λ = 434.0 nm (blue, "H-gamma")
- <span class="math-inline">n = 6</span>: λ = 410.2 nm (violet, "H-delta")

### The Rydberg Formula

In 1888, Johannes Rydberg found a more general formula:

<span class="math-display">\frac{1}{\lambda} = R_H \left( \frac{1}{n_1^2} - \frac{1}{n_2^2} \right)</span>

where:
- <span class="math-inline">R_H \approx 1.097 \times 10^7 \text{ m}^{-1}</span> is the **Rydberg constant**
- <span class="math-inline">n_1, n_2</span> are positive integers with <span class="math-inline">n_2 > n_1</span>

Different values of <span class="math-inline">n_1</span> give different series:

| Series | <span class="math-inline">n_1</span> | <span class="math-inline">n_2</span> | Spectral Region |
|--------|------|------|-----------------|
| Lyman | 1 | 2, 3, 4, ... | Ultraviolet |
| Balmer | 2 | 3, 4, 5, ... | Visible |
| Paschen | 3 | 4, 5, 6, ... | Infrared |
| Brackett | 4 | 5, 6, 7, ... | Infrared |
| Pfund | 5 | 6, 7, 8, ... | Far infrared |

But **why** did these formulas work? What physical mechanism produces exactly these wavelengths? This remained a mystery until Bohr.

---

## Bohr's Revolutionary Idea (1913)

Niels Bohr made three radical postulates:

### Postulate 1: Quantized Orbits

Electrons can only orbit the nucleus at **specific radii** where the angular momentum is quantized:

<span class="math-display">L = n\hbar, \quad n = 1, 2, 3, \ldots</span>

where <span class="math-inline">\hbar = h/2\pi</span> is the reduced Planck constant.

This was revolutionary — there was no classical justification for it. Bohr simply postulated it because it worked.

### Postulate 2: Stationary States

In these allowed orbits, electrons **do not radiate** energy, despite being accelerated. They remain in stable "stationary states."

This directly contradicted classical electrodynamics, which says accelerating charges must radiate.

### Postulate 3: Quantum Jumps

Electrons can **jump** between orbits by absorbing or emitting a photon. The photon energy equals the energy difference:

<span class="math-display">E_\gamma = h\nu = E_{n_2} - E_{n_1}</span>

where <span class="math-inline">\nu</span> is the photon frequency.

---

## Bohr's Calculation

### Step 1: Force Balance

An electron in a circular orbit experiences:
- Centripetal acceleration: <span class="math-inline">a = v^2/r</span>
- Coulomb attraction: <span class="math-inline">F = \frac{e^2}{4\pi\varepsilon_0 r^2}</span>

Setting <span class="math-inline">F = ma</span>:

<span class="math-display">\frac{e^2}{4\pi\varepsilon_0 r^2} = \frac{m_e v^2}{r}</span>

This gives:

<span class="math-display">v^2 = \frac{e^2}{4\pi\varepsilon_0 m_e r}</span>

### Step 2: Quantization Condition

Angular momentum is quantized:

<span class="math-display">L = m_e v r = n\hbar</span>

So:

<span class="math-display">v = \frac{n\hbar}{m_e r}</span>

### Step 3: Solving for the Radius

Substituting the velocity into the force equation:

<span class="math-display">\left(\frac{n\hbar}{m_e r}\right)^2 = \frac{e^2}{4\pi\varepsilon_0 m_e r}</span>

Solving for <span class="math-inline">r</span>:

<span class="math-display">r_n = \frac{4\pi\varepsilon_0 \hbar^2}{m_e e^2} \cdot n^2 = a_0 \cdot n^2</span>

where <span class="math-inline">a_0</span> is the **Bohr radius**:

<span class="math-display">a_0 = \frac{4\pi\varepsilon_0 \hbar^2}{m_e e^2} \approx 0.529 \text{ Å} = 5.29 \times 10^{-11} \text{ m}</span>

This is the size of a hydrogen atom in its ground state!

### Step 4: Energy Levels

The total energy is kinetic plus potential:

<span class="math-display">E = \frac{1}{2}m_e v^2 - \frac{e^2}{4\pi\varepsilon_0 r}</span>

Using the force balance relation <span class="math-inline">m_e v^2 = e^2/(4\pi\varepsilon_0 r)</span>:

<span class="math-display">E = \frac{1}{2} \cdot \frac{e^2}{4\pi\varepsilon_0 r} - \frac{e^2}{4\pi\varepsilon_0 r} = -\frac{e^2}{8\pi\varepsilon_0 r}</span>

Substituting <span class="math-inline">r_n = a_0 n^2</span>:

<span class="math-display">E_n = -\frac{e^2}{8\pi\varepsilon_0 a_0} \cdot \frac{1}{n^2} = -\frac{13.6 \text{ eV}}{n^2}</span>

The energy levels are:

| <span class="math-inline">n</span> | <span class="math-inline">E_n</span> (eV) | Name |
|-----|------------|------|
| 1 | -13.6 | Ground state |
| 2 | -3.4 | First excited |
| 3 | -1.51 | Second excited |
| 4 | -0.85 | Third excited |
| ∞ | 0 | Ionized (free electron) |

### Step 5: Deriving the Rydberg Formula

When an electron jumps from level <span class="math-inline">n_2</span> to <span class="math-inline">n_1</span>, it emits a photon:

<span class="math-display">E_\gamma = E_{n_2} - E_{n_1} = 13.6 \text{ eV} \left( \frac{1}{n_1^2} - \frac{1}{n_2^2} \right)</span>

Using <span class="math-inline">E_\gamma = h\nu = hc/\lambda</span>:

<span class="math-display">\frac{1}{\lambda} = \frac{13.6 \text{ eV}}{hc} \left( \frac{1}{n_1^2} - \frac{1}{n_2^2} \right)</span>

This is exactly the **Rydberg formula**! And Bohr could calculate the Rydberg constant from fundamental constants:

<span class="math-display">R_H = \frac{m_e e^4}{8\varepsilon_0^2 h^3 c} \approx 1.097 \times 10^7 \text{ m}^{-1}</span>

This matched the experimental value to high precision — a triumph!

---

## What Bohr Explained

```
                    n = ∞  ─────────────────  E = 0 (ionized)

                    n = 5  ─────────────────  E = -0.54 eV
                    n = 4  ─────────────────  E = -0.85 eV
                    n = 3  ─────────────────  E = -1.51 eV
                              │  │  │
                              │  │  └── Paschen series (IR)
                              │  │
                    n = 2  ───┴──┴──────────  E = -3.4 eV
                              │  │  │  │
                              │  │  │  └── Balmer series (visible)
                              │  │  │
                              │  │  │
                    n = 1  ───┴──┴──┴───────  E = -13.6 eV
                              │  │  │  │  │
                              └──┴──┴──┴──┴── Lyman series (UV)

                    GROUND STATE
```

Each arrow represents a photon emission. The energy (and thus wavelength) is determined by the difference between levels.

---

## The Deeper Meaning

Bohr's calculation revealed something profound: **the Rydberg constant is not arbitrary**. It can be derived from:

- <span class="math-inline">m_e</span> — electron mass
- <span class="math-inline">e</span> — electron charge
- <span class="math-inline">\hbar</span> — Planck's constant
- <span class="math-inline">\varepsilon_0</span> — permittivity of free space
- <span class="math-inline">c</span> — speed of light

The formula:

<span class="math-display">R_H = \frac{m_e e^4}{8\varepsilon_0^2 h^3 c}</span>

This showed that atomic spectra are determined by **fundamental constants of nature**. The discrete spectral lines are a direct window into the quantum structure of matter.

---

## Limitations of Bohr's Model

Despite its success, the Bohr model has serious limitations:

| Works for | Fails for |
|-----------|-----------|
| Hydrogen energy levels | Multi-electron atoms |
| Spectral line positions | Spectral line intensities |
| Existence of discrete orbits | Why orbits are quantized |
| Atomic size | Chemical bonding |

### The Real Issue

Bohr's quantization rule <span class="math-inline">L = n\hbar</span> was ad hoc — it had no deeper justification. The question remained: **why** is angular momentum quantized?

The answer came from:
1. **de Broglie (1924)**: Electrons are waves with wavelength <span class="math-inline">\lambda = h/p</span>
2. **Schrödinger (1926)**: The wave equation for electrons
3. **Born (1926)**: The wave function gives probabilities

In the full quantum theory, electrons don't orbit at all — they exist as **standing wave patterns** (orbitals) around the nucleus. The quantization emerges naturally from the wave equation.

See also: [The Schrödinger Equation](/topics/schrodinger-equation/)

---

## Summary

| Question | Answer |
|----------|--------|
| What are spectral lines? | Discrete wavelengths emitted/absorbed by atoms |
| Why discrete? | Electrons occupy quantized energy levels |
| What did Bohr calculate? | Energy levels <span class="math-inline">E_n = -13.6/n^2</span> eV |
| What did he derive? | The Rydberg constant from fundamental constants |
| Key formula | <span class="math-inline">1/\lambda = R_H(1/n_1^2 - 1/n_2^2)</span> |
| Key insight | Atomic structure is determined by quantum mechanics |

Bohr's model was **wrong in detail but right in spirit**. Electrons don't orbit like planets, but energy quantization is real. The model bridged classical and quantum physics and pointed the way to the full quantum theory.
