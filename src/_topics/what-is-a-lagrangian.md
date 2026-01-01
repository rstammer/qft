---
layout: topic
title: What is a Lagrangian?
tags:
  - Foundations
  - Classical Mechanics
  - QFT
---

## Short Answer

A **Lagrangian** is a function that encodes the dynamics of a physical system. It is the difference between kinetic and potential energy in classical mechanics, and generalizes to describe field theories in QFT.

## Classical Mechanics

For a particle with position <span class="math-inline">q(t)</span>, the Lagrangian is:

<span class="math-display">L(q, \dot{q}, t) = T - V = \frac{1}{2}m\dot{q}^2 - V(q)</span>

where:
- <span class="math-inline">T</span> = kinetic energy
- <span class="math-inline">V</span> = potential energy

### The Action Principle

The **action** is the integral of the Lagrangian over time:

<span class="math-display">S[q] = \int_{t_1}^{t_2} L(q, \dot{q}, t) \, dt</span>

Physical trajectories are those that make the action **stationary** (typically a minimum):

<span class="math-display">\delta S = 0</span>

This leads to the **Euler-Lagrange equations**:

<span class="math-display">\frac{d}{dt}\frac{\partial L}{\partial \dot{q}} - \frac{\partial L}{\partial q} = 0</span>

## Field Theory

For fields <span class="math-inline">\phi(x)</span>, the Lagrangian becomes a **Lagrangian density** <span class="math-inline">\mathcal{L}</span>:

<span class="math-display">S[\phi] = \int \mathcal{L}(\phi, \partial_\mu \phi) \, d^4x</span>

### Example: Free Scalar Field

The Klein-Gordon Lagrangian for a free scalar field:

<span class="math-display">\mathcal{L} = \frac{1}{2}\partial_\mu \phi \, \partial^\mu \phi - \frac{1}{2}m^2 \phi^2</span>

### Example: Electromagnetism

The Maxwell Lagrangian:

<span class="math-display">\mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu}</span>

where <span class="math-inline">F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu</span> is the field strength tensor.

## Why Lagrangians Matter

1. **Symmetries**: Noether's theorem connects symmetries of <span class="math-inline">L</span> to conserved quantities
2. **Quantization**: Path integrals use <span class="math-inline">e^{iS/\hbar}</span> as the quantum amplitude
3. **Gauge theories**: Lagrangians naturally encode gauge symmetry
4. **Renormalization**: The Lagrangian determines which terms are allowed
