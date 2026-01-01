---
layout: default
title: Questions
permalink: /questions/
---

# Questions & Answers

Answered questions about Quantum Field Theory, the Standard Model, General Relativity, and the underlying mathematics.

<% collections.questions.resources.each do |question| %>
### [<%= question.data.title %>](<%= question.relative_url %>)

<% if question.data.tags %>
<div class="tags">
<% question.data.tags.each do |tag| %><span class="tag"><%= tag %></span><% end %>
</div>
<% end %>

<% end %>
