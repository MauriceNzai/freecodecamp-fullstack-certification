# HTML Accessibility (freeCodeCamp Review)

## 1. What is Accessibility?
- Designing websites usable by everyone, including people with disabilities
- Covers visual, auditory, cognitive, and motor impairments
- Goal: Remove barriers and ensure equal access

---

## 2. Semantic HTML
- Use elements based on meaning, not appearance
- Examples:
  - `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Benefits:
  - Better screen reader interpretation
  - Improved SEO
  - Cleaner, maintainable code

---

## 3. Document Structure & Hierarchy
- Use proper heading order (`<h1>` → `<h6>`)
- Helps screen readers navigate content
- Maintain logical page flow

---

## 4. Text Alternatives
- Provide `alt` text for images
- Helps visually impaired users understand content
- Avoid empty or meaningless descriptions

---

## 5. Links & Navigation
- Use descriptive link text (avoid "click here")
- Ensure navigation is consistent and predictable
- Helps users understand destination/context

---

## 6. Forms Accessibility
- Use `<label>` elements for inputs
- Associate labels using `for` attribute
- Improves usability for screen readers

---

## 7. Keyboard Accessibility
- All interactive elements should be keyboard usable
- Use:
  - `tab` for navigation
  - `enter` / `space` for interaction
- Avoid requiring a mouse

---

## 8. ARIA (Accessible Rich Internet Applications)
- Adds extra accessibility information when HTML is insufficient
- Examples:
  - `aria-label`
  - `role`
- Rule: Use ARIA only when necessary (semantic HTML first)

---

## 9. Color & Contrast
- Ensure sufficient contrast between text and background
- Improves readability for visually impaired users

---

## 10. Accessibility Principles (WCAG)
- Perceivable → Users can see/hear content
- Operable → Users can interact with interface
- Understandable → Content is clear and predictable
- Robust → Works with assistive technologies

---

## ✅ Key Takeaways
- Prefer semantic HTML over generic elements
- Structure content clearly
- Always consider assistive technologies
- Accessibility improves UX for everyone, not just disabled users
