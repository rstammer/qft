---
layout: default
---

<div class="home-intro">
  <p>A wiki for understanding modern physics with emphasis on precise mathematical foundations. Making Quantum Field Theory, the Standard Model, and General Relativity accessible to mathematicians and students.</p>
</div>

## Topics

<div class="question-list">
<% collections.topics.resources.each do |topic| %>
<a href="<%= topic.relative_url %>" class="question-card">
  <span class="question-card-title"><%= topic.data.title %></span>
  <% if topic.data.tags %>
  <span class="question-card-tags"><% topic.data.tags.each do |tag| %><span class="tag-small"><%= tag %></span><% end %></span>
  <% end %>
</a>
<% end %>
</div>

## Areas

<div class="topic-grid">
  <div class="topic-item">
    <h3>Quantum Field Theory</h3>
    <p>From classical fields to second quantization, path integrals, and Feynman diagrams.</p>
  </div>
  <div class="topic-item">
    <h3>Standard Model</h3>
    <p>Gauge groups, particle representations, electroweak unification, and symmetry breaking.</p>
  </div>
  <div class="topic-item">
    <h3>General Relativity</h3>
    <p>Differential geometry, spacetime curvature, and the Einstein field equations.</p>
  </div>
  <div class="topic-item">
    <h3>Mathematics</h3>
    <p>Lie groups, fiber bundles, representation theory, and differential geometry.</p>
  </div>
</div>
