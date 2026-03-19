# HTML Accessibility Review (freeCodeCamp)

## 1. Introduction to Accessibility

Accessibility (a11y) means designing websites so that **everyone can use them**, including:
- People with visual impairments
- Hearing impairments
- Motor disabilities
- Cognitive challenges

### Why Accessibility Matters
- Ensures equal access to information
- Improves user experience for all users
- Supports assistive technologies like screen readers
- Often required by standards and laws

---

## 2. Semantic HTML

Semantic HTML uses elements that **describe meaning**, not just appearance.

### Common Semantic Elements
- `<header>` → introductory content
- `<nav>` → navigation links
- `<main>` → main content
- `<section>` → grouped content
- `<article>` → independent content
- `<footer>` → closing content

### Benefits
- Helps screen readers interpret content
- Improves SEO
- Makes code easier to maintain

👉 Semantic structure is essential for accessibility :contentReference[oaicite:0]{index=0}

---

## 3. Proper Heading Structure

Headings (`<h1>` to `<h6>`) create a **content hierarchy**.

### Best Practices
- Use only one `<h1>` per page
- Follow logical order (no skipping levels)
- Use headings to organize content

### Why It Matters
- Screen reader users navigate using headings
- Improves readability and structure

---

## 4. Text Alternatives (Alt Text)

Images must include `alt` attributes.

### Example

    <img src="cat.jpg" alt="A cat sitting on a couch">

### Guidelines
- Describe the image meaningfully
- Use empty alt (`alt=""`) for decorative images

### Purpose
- Allows screen readers to describe images
- Ensures content is accessible without visuals

---

## 5. Links and Navigation

### Best Practices
- Use descriptive link text
  - ❌ "Click here"
  - ✅ "View accessibility guide"
- Ensure links make sense out of context

### Why It Matters
- Screen readers list links independently
- Improves navigation clarity

---

## 6. Forms Accessibility

Forms must be properly labeled and structured.

### Labeling Inputs

    <label for="email">Email:</label>
    <input type="email" id="email">

### Grouping Inputs
- Use `<fieldset>` and `<legend>` for related fields

### Benefits
- Screen readers can identify input purpose
- Improves usability

---

## 7. Keyboard Accessibility

All functionality should be accessible using a keyboard.

### Requirements
- Users should navigate using:
  - `Tab`
  - `Enter`
  - `Space`

### Best Practices
- Use native HTML elements (`<button>`, `<a>`)
- Avoid relying only on mouse interactions

---

## 8. ARIA (Accessible Rich Internet Applications)

ARIA provides additional accessibility information.

### Examples
- `aria-label`
- `role`
- `aria-hidden`

### Rule of Thumb
- Use **semantic HTML first**
- Use ARIA only when necessary


---

# 🧾 Markdown (## 9 → ## 12)

```markdown
## 9. Color and Contrast

### Guidelines
- Ensure sufficient contrast between text and background
- Do not rely on color alone to convey meaning

### Why It Matters
- Helps users with visual impairments or color blindness

---

## 10. Language and Readability

### Best Practices
- Use clear, simple language
- Avoid unnecessary jargon
- Expand abbreviations when needed

### Why It Matters
- Improves comprehension for all users
- Supports users with cognitive disabilities

---

## 11. Accessibility Principles (WCAG)

Accessibility is guided by four main principles:

### 1. Perceivable
- Content must be visible or audible

### 2. Operable
- Users must be able to interact with the interface

### 3. Understandable
- Content and navigation must be clear

### 4. Robust
- Works across devices and assistive technologies

---

## 12. Key Best Practices Summary

- Use semantic HTML elements
- Maintain proper heading hierarchy
- Provide alt text for images
- Label all form inputs
- Ensure keyboard navigation works
- Use ARIA only when necessary
- Maintain good color contrast
- Write clear and simple content

---

## ✅ Final Takeaway

Accessibility is not optional — it is a **core part of web development**.

Building accessible websites:
- Improves usability for everyone
- Makes your code more professional
- Expands your audience reach
