import "$styles/index.css"
import "$styles/syntax-highlighting.css"
import "katex/dist/katex.min.css"
import katex from "katex"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

// Render LaTeX formulas
function renderMath() {
  // Render display math ($$...$$)
  document.querySelectorAll('.math-display').forEach(el => {
    katex.render(el.textContent, el, { displayMode: true, throwOnError: false })
  })

  // Render inline math ($...$)
  document.querySelectorAll('.math-inline').forEach(el => {
    katex.render(el.textContent, el, { displayMode: false, throwOnError: false })
  })
}

document.addEventListener('DOMContentLoaded', renderMath)

console.info("Bridgetown is loaded!")
