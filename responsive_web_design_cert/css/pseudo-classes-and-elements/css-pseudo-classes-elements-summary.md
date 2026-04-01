Here’s a **single, clean, combined `.md` snippet** that merges all your summaries into one structured reference:

````markdown id="css-pseudo-classes-complete"
# Summary: Pseudo-classes & Pseudo-elements in CSS (Complete Guide)

**Source:** freeCodeCamp Responsive Web Design (Pseudo-classes & Pseudo-elements lectures)

---

## 1. Overview

**Pseudo-classes** are keywords added to selectors that define a special **state** of an element (e.g., hover, focus, position in DOM).

**Pseudo-elements** (briefly) target specific parts of elements (e.g., `::before`, `::after`).

---

## 2. Syntax

```css
selector:pseudo-class {
  property: value;
}

selector::pseudo-element {
  property: value;
}
````

---

## 3. User Action Pseudo-classes

These respond to **user interactions**.

| Pseudo-class    | Description                                |
| --------------- | ------------------------------------------ |
| `:hover`        | When the user hovers over an element       |
| `:active`       | While an element is being clicked          |
| `:focus`        | When an element is focused                 |
| `:focus-within` | When an element or its children have focus |

### Example

```css
.btn:hover {
  background-color: darkgreen;
}

.btn:active {
  transform: scale(0.98);
}

input:focus {
  outline: 3px solid blue;
}
```

---

## 4. Input Pseudo-classes

Used for **form validation and states**.

| Pseudo-class | Description            |
| ------------ | ---------------------- |
| `:required`  | Required inputs        |
| `:optional`  | Non-required inputs    |
| `:valid`     | Valid input            |
| `:invalid`   | Invalid input          |
| `:checked`   | Checked radio/checkbox |
| `:disabled`  | Disabled elements      |
| `:enabled`   | Active inputs          |

### Example

```css
input:valid {
  border: 2px solid green;
}

input:invalid {
  border: 2px solid red;
}

input:required {
  background-color: #fff9f9;
}
```

---

## 5. Location Pseudo-classes

Based on **URL state or navigation**.

| Pseudo-class  | Description           |
| ------------- | --------------------- |
| `:link`       | Unvisited links       |
| `:visited`    | Visited links         |
| `:any-link`   | Any link              |
| `:target`     | Matches URL fragment  |
| `:local-link` | Links to current page |

### Example

```css
section:target {
  background-color: lightyellow;
}
```

---

## 6. Tree-Structural Pseudo-classes

Target elements based on their **position in the DOM**.

| Pseudo-class    | Description             |
| --------------- | ----------------------- |
| `:root`         | Root element (`<html>`) |
| `:first-child`  | First child             |
| `:last-child`   | Last child              |
| `:nth-child(n)` | Nth child               |
| `:only-child`   | Only child              |
| `:empty`        | No children             |

### Example

```css
tr:nth-child(even) {
  background-color: #f2f2f2;
}

:root {
  --main-color: #333;
}
```

### Child vs Type

* `:nth-child(n)` → based on position
* `:nth-of-type(n)` → based on element type

---

## 7. Functional Pseudo-classes

Accept **arguments** for advanced selection.

| Pseudo-class | Purpose                           |
| ------------ | --------------------------------- |
| `:is()`      | Groups selectors                  |
| `:where()`   | Like `:is()` but zero specificity |
| `:not()`     | Excludes elements                 |
| `:has()`     | Selects parent based on children  |

### Example

```css
:is(header, footer) h1 {
  color: blue;
}

button:not(.primary) {
  background-color: grey;
}

article:has(img) {
  border: 2px solid blue;
}
```

---

## 8. Key Differences: `:is()` vs `:where()`

* `:is()` → inherits highest specificity
* `:where()` → always **0 specificity**

---

## 9. Why Use Pseudo-classes?

### 1. Interactivity

Adds dynamic behavior without JavaScript.

### 2. Efficiency

Reduces need for extra classes.

### 3. Clean Code

Keeps HTML minimal and semantic.

### 4. Accessibility

Improves keyboard navigation and usability.

---

## 10. Security Note

* `:visited` is restricted (only color-related styles allowed)
* Prevents tracking user browsing history

---

## 11. Key Takeaways

* Pseudo-classes enable **state-based styling**
* Functional pseudo-classes provide **logic and flexibility**
* Tree-structural selectors enable **precise targeting**
* Input pseudo-classes improve **form UX**
* Location pseudo-classes enhance **navigation clarity**

---

## 12. Pseudo-elements (Quick Note)

| Pseudo-element   | Purpose                       |
| ---------------- | ----------------------------- |
| `::before`       | Insert content before element |
| `::after`        | Insert content after element  |
| `::first-letter` | Style first letter            |
| `::first-line`   | Style first line              |

### Example

```css
p::first-letter {
  font-size: 2em;
}

button::after {
  content: " →";
}
```

---

## Final Insight

Pseudo-classes and pseudo-elements together allow you to build **interactive, responsive, and clean UI designs** using only CSS—reducing reliance on JavaScript while improving maintainability.

```

---
```

