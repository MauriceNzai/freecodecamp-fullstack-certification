# CSS Fundamentals — Hybrid Learning Notes

## 1. What is CSS?

### 🔹 Quick Summary

* Styles HTML elements
* Separates structure from design
* Uses cascade for rule priority

### 🔸 Explanation

CSS (Cascading Style Sheets) controls the visual appearance of web pages, including layout, colors, and responsiveness.

### 💻 Example

```css
body {
  background-color: lightgray;
}
```

### 🧠 Key Takeaways

* CSS = presentation layer
* Works with HTML
* Enables responsive design

---

## 2. Anatomy of a CSS Rule

### 🔹 Quick Summary

* Selector + Declaration Block
* Property + Value pairs

### 🔸 Explanation

Selectors target elements, while declarations define styles.

### 💻 Example

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

### 🧠 Key Takeaways

* Every rule follows the same structure
* Multiple declarations allowed

---

## 3. Meta Viewport

### 🔹 Quick Summary

* Controls mobile layout
* Enables responsiveness

### 💻 Example

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 🧠 Key Takeaways

* Required for mobile-friendly design
* Prevents layout shrinking

---

## 4. Default Browser Styles

### 🔹 Quick Summary

* Browsers apply default styles
* Can be reset

### 🔸 Explanation

User Agent Stylesheets ensure readability but may cause inconsistencies.

### 🧠 Key Takeaways

* Always account for defaults
* Use CSS reset if needed

---

## 5. CSS Application Methods

### 🔹 Quick Summary

* Inline, Internal, External

### 🔸 Explanation

External CSS is preferred for scalability and performance.

### 💻 Example

```html
<link rel="stylesheet" href="styles.css">
```

### 🧠 Key Takeaways

* Avoid inline styles
* Use external CSS in real projects

---

## 6. Width and Height

### 🔹 Quick Summary

* Defines element size
* Use responsive units

### 🔸 Explanation

Box model affects final size unless using `border-box`.

### 💻 Example

```css
div {
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
}
```

### 🧠 Key Takeaways

* Combine width with constraints
* Use responsive units

---

## 7. CSS Combinators

### 🔹 Quick Summary

* Define relationships between elements

### 💻 Example

```css
div > p {
  color: red;
}
```

### 🧠 Key Takeaways

* Improves selector precision
* Reduces need for extra classes

---

## 8. Inline vs Block

### 🔹 Quick Summary

* Block → full width
* Inline → content width

### 🧠 Key Takeaways

* Display type affects layout behavior

---

## 9. Inline-Block

### 🔹 Quick Summary

* Hybrid layout behavior

### 💻 Example

```css
display: inline-block;
```

### 🧠 Key Takeaways

* Useful for horizontal layouts
* Watch for spacing gaps

---

## 10. Margin vs Padding

### 🔹 Quick Summary

* Padding = inside
* Margin = outside

### 💻 Example

```css
margin: 10px;
padding: 10px;
```

### 🧠 Key Takeaways

* Padding affects size
* Margin controls spacing
* Use shorthand wisely

---

## ✅ Final Review Questions

1. What is the purpose of CSS?
2. What is the difference between margin and padding?
3. Why is `box-sizing: border-box` important?

---

## 🧪 Practice Task

Create a simple webpage and:

* Add a heading and paragraph
* Style them using external CSS
* Apply margin and padding
* Use `inline-block` for layout

