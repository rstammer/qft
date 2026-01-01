---
layout: default
---

# Modern Theoretical Physics

A wiki for understanding modern physics with emphasis on precise mathematical foundations.

## Questions & Answers

Answered questions about QFT, the Standard Model, General Relativity, and the underlying mathematics.

<% collections.questions.resources.each do |question| %>
- [<%= question.data.title %>](<%= question.relative_url %>) <% if question.data.tags %><span class="tags-inline"><% question.data.tags.each do |tag| %><span class="tag-small"><%= tag %></span><% end %></span><% end %>
<% end %>

## Articles

In-depth explorations of specific topics.

<% collections.posts.resources.sort_by { |p| p.date }.reverse.each do |post| %>
- [<%= post.data.title %>](<%= post.relative_url %>) <span class="post-date"><%= post.date.strftime("%Y-%m-%d") %></span>
<% end %>

---

## Topics to Explore

- Quantum Field Theory fundamentals
- The Standard Model of particle physics
- General Relativity and spacetime geometry
- Mathematical foundations (Lie groups, fiber bundles, differential geometry)
- Particle types and their mathematical representations
