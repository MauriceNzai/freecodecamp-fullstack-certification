# Summary: CSS Units & Functions (Complete Learning Guide)

This guide covers all major CSS units and the `calc()` function, combining detailed explanations with memory aids for better understanding and retention.

---

## 1. Absolute Units (Fixed Units)

Absolute units are fixed-length values that do not scale with the viewport or parent elements.

### Key Idea
👉 *Fixed = Predictable but NOT responsive*

### Characteristics
- Do not change based on screen size
- Provide precise control
- Not suitable for flexible layouts

### Common Units
| Unit | Meaning | Conversion |
| :--- | :--- | :--- |
| `px` | Pixel | 1px = 1/96 inch (reference pixel) |
| `pt` | Point | 1pt = 1/72 inch |
| `pc` | Pica | 1pc = 12pt |
| `in` | Inch | 1in = 96px |
| `cm` | Centimeter | Physical unit |
| `mm` | Millimeter | Physical unit |

### Important Note
- CSS uses **reference pixels**, not actual hardware pixels → ensures consistent visual size across devices.

### Use Cases
- Borders
- Icons
- Small UI elements

### Avoid
- Layouts
- Typography (limits responsiveness)

---

## 2. Percentages (%) (Parent-Based Units)

Percentages define values relative to another value, typically the parent element.

### Key Idea
👉 *% = Depends on parent*

### Characteristics
- Dynamic and responsive
- Behavior depends on the CSS property used

### How They Work
- `width/height` → relative to parent size
- `padding/margin` → usually based on **parent width**
- `font-size` → relative to parent font size

### Use Cases
- Grid systems (`33.33%`)
- Fluid layouts
- Responsive images (`max-width: 100%`)
- Positioning (`top: 50%`)

### Best Practices
- Ensure parent has a defined size
- Combine with `max-width` for better control

---

## 3. em and rem (Font-Based Units)

Relative units based on font size, used for scalable and accessible design.

---

### `em` Unit

### Key Idea
👉 *em = local scaling (can compound)*

- Relative to element’s font size (or parent)
- Can compound when nested

**Example:**
- Parent = `2em`, Child = `2em` → results in 4× base size

### Best Use
- Component-level scaling
- Padding/margin tied to text size

---

### `rem` Unit

### Key Idea
👉 *rem = global consistency*

- Relative to root (`html`) font size
- Default: `1rem ≈ 16px`

### Benefits
- Consistent sizing across the page
- Respects user browser settings (accessibility)

### Best Use
- Typography
- Layout spacing

---

### em vs rem

| Unit | Based On | Behavior |
| :--- | :--- | :--- |
| `em` | Parent/element font | Compounds |
| `rem` | Root font size | Consistent |

---

## 4. Viewport Units (vh & vw)

Viewport units are based on the browser window size.

### Key Idea
👉 *Viewport = screen-based sizing*

### Units
- `1vw` = 1% of viewport width
- `1vh` = 1% of viewport height

### Comparison

| Unit | Relative To |
| :--- | :--- |
| `%` | Parent |
| `vw/vh` | Viewport |

### Use Cases
- Full-screen sections (`height: 100vh`)
- Responsive typography
- Full-width layouts

### Important Considerations
- `100vw` may include scrollbar → can cause overflow
- Mobile browsers may adjust viewport height dynamically

---

## 5. calc() Function (Dynamic Calculations)

The `calc()` function allows mathematical expressions in CSS.

### Key Idea
👉 *Mix units dynamically*

