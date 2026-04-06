# Summary: CSS Flexbox & Common Flex Properties

**Source:**  
- freeCodeCamp - What is CSS Flexbox  
- freeCodeCamp - Common Flexbox Properties  

---

## 1. Core Concept
CSS Flexbox (Flexible Box Layout) is a one-dimensional layout model used to arrange and align elements efficiently within a container. It works in a single direction at a time—either as a row or a column—making it ideal for responsive design.

---

## 2. Key Terminology

- **Flex Container:** The parent element with `display: flex;` or `display: inline-flex;`.
- **Flex Items:** The direct children of a flex container.

---

## 3. The Two Axes

Flexbox layouts are controlled using two perpendicular axes:

1. **Main Axis:** The primary direction in which flex items are laid out.  
   - Default: horizontal (left to right)

2. **Cross Axis:** Perpendicular to the main axis.  
   - Default: vertical (top to bottom)

---

## 4. Properties for the Parent (Flex Container)

These properties control layout, alignment, and spacing of flex items.

### Layout Direction
- **`flex-direction`**: Defines the main axis direction.
  - `row` (default): Left to right
  - `column`: Top to bottom
  - `row-reverse`, `column-reverse`: Reverse direction

### Wrapping
- **`flex-wrap`**: Controls whether items stay on one line or wrap.
  - `nowrap` (default): Single line
  - `wrap`: Items wrap onto multiple lines (top-to-bottom for rows, left-to-right for columns)

### Alignment (Main Axis)
- **`justify-content`**: Aligns items along the main axis.
  - `flex-start`, `flex-end`, `center`
  - `space-between`, `space-around`, `space-evenly`

### Alignment (Cross Axis)
- **`align-items`**: Aligns items along the cross axis.
  - `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`

- **`align-content`**: Aligns rows (or columns) when there is extra space on the cross axis.  
  *(Only works when `flex-wrap: wrap` is used)*
  - `flex-start`, `flex-end`, `center`
  - `space-between`, `space-around`, `stretch`

---

## 5. Properties for the Children (Flex Items)

These properties control how individual items behave inside the flex container.

- **`flex-grow`**: Defines how much an item can grow relative to others (default: `0`).
- **`flex-shrink`**: Defines how much an item can shrink (default: `1`).
- **`flex-basis`**: Sets the initial size of an item along the main axis before space is distributed.  
  It overrides `width` (in row) or `height` (in column).

- **`flex`**: Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.  
  - Example: `flex: 1` is equivalent to `flex: 1 1 0%`

- **`align-self`**: Overrides `align-items` for a specific item.

---

## 6. Why Use Flexbox?

Flexbox simplifies layout problems that were previously difficult with floats or positioning:

- Easy horizontal and vertical centering
- Flexible and responsive layouts
- Equal-height columns
- Dynamic spacing and alignment

---

## 7. Common Use Cases

### Centering Content
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
````

### Equal-Width Columns

```css
.item {
  flex: 1;
}
```

### Responsive Wrapping Layout

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

---

## 8. Quick Reference Table

| Property          | Target | Purpose                         |
| ----------------- | ------ | ------------------------------- |
| `display: flex`   | Parent | Activates Flexbox               |
| `flex-direction`  | Parent | Sets main axis direction        |
| `flex-wrap`       | Parent | Controls wrapping               |
| `justify-content` | Parent | Main axis alignment             |
| `align-items`     | Parent | Cross axis alignment            |
| `align-content`   | Parent | Aligns multiple rows/columns    |
| `flex`            | Child  | Shorthand for grow/shrink/basis |
| `align-self`      | Child  | Overrides item alignment        |

---

