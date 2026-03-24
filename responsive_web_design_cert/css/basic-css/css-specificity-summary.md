# CSS Master Summary: Specificity, Cascade, and Inheritance

---

## 1. CSS Specificity

Specificity determines which CSS rule is applied when multiple rules target the same element.

---

### Specificity Hierarchy (Highest → Lowest)

1. Inline Styles → (1,0,0,0)
2. ID Selectors → (0,1,0,0)
3. Class / Attribute / Pseudo-class → (0,0,1,0)
4. Type / Pseudo-element → (0,0,0,1)
5. Universal Selector → (0,0,0,0)

---

## 2. Selector Breakdown

### Universal Selector (`*`)

* Matches all elements
* Lowest specificity
* Used for resets

---

### Type Selectors

* Example: `div`, `p`
* Specificity: (0,0,0,1)
* Best for base styles

---

### Class Selectors

* Example: `.btn`
* Specificity: (0,0,1,0)
* Includes:

  * Attributes
  * Pseudo-classes

---

### ID Selectors

* Example: `#header`
* Specificity: (0,1,0,0)
* Strong but not reusable

---

## 3. Combining Selectors

Specificity adds up:

* `div p` → (0,0,0,2)
* `.btn.primary` → (0,0,2,0)
* `div.container` → (0,0,1,1)

---

## 4. CSS Implementation Methods

| Method   | Description |
| :------- | :---------- |
| Inline   | Inside HTML |
| Internal | `<style>`   |
| External | `.css` file |

---

## 5. The `!important` Rule

```css
p {
  color: red !important;
}
```

* Overrides all normal rules
* Can only be beaten by another `!important`
* Use sparingly

---

## 6. The Cascade Algorithm

Order of evaluation:

1. **Importance (`!important`)**
2. **Origin**

   * Author > User > Browser
3. **Specificity**
4. **Source Order**

---

## 7. Source Order Rule

If specificity is equal → last rule wins.

---

## 8. CSS Inheritance

### Inherited

* `color`
* `font-family`
* `text-align`

---

### Not Inherited

* `margin`
* `padding`
* `border`

---

### Control Keywords

* `inherit`
* `initial`
* `unset`

---

### Key Rule

Direct styles override inherited styles.

---

## 9. Best Practices

* Prefer **classes over IDs**
* Avoid overusing `!important`
* Use **external CSS**
* Keep specificity low for scalability

