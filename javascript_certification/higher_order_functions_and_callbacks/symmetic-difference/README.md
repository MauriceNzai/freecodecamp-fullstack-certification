# 📘 Symmetric Difference Algorithms (JavaScript)

A small, well-structured JavaScript project demonstrating **multiple algorithmic approaches** to computing the **symmetric difference** between two arrays.  
Each approach is implemented as a separate, fully documented module with shared validation, edge-case handling, and example usage.

This project is designed for:
- Learning algorithm design & complexity analysis
- Clean modular architecture
- Readable, maintainable Node.js code
- Portfolio and interview prep

---

## 🧠 What Is Symmetric Difference?

The **symmetric difference** of two sets/arrays is the set of elements that appear in **exactly one** of the arrays.

### Example

```txt
A = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"]
B = ["diorite", "andesite", "grass", "dirt", "dead shrub"]

Result = ["pink wool"]


---

## ✅ Part 3 — Project Structure

```md
---

## 📁 Project Structure

```txt
symmetric-difference/
├── algorithms/
│   ├── filter_diff.js        # Filter + includes approach (O(n²))
│   ├── set_diff.js           # Set-based approach (O(n))
│   ├── hashmap_diff.js       # Frequency counting approach (O(n))
├── validators/
│   └── validate_arrays.js   # Shared input validation
├── main.js                  # Example usage
└── README.md


---

## ✅ Part 4 — Installation & Usage

```md
---

## ⚙️ Installation & Usage

### 1️⃣ Requirements

- Node.js v14+

### 2️⃣ Run Example

```bash
node main.js


---

## ✅ Part 5 — Algorithms Overview

```md
---

## 🧩 Algorithms Implemented

### 1️⃣ Filter + Includes

**File:** `algorithms/filter_diff.js`

**Idea**
- Filter items from A not in B
- Filter items from B not in A
- Combine results

**Complexity**
- Time: O(n²)
- Space: O(n)

**Pros**
- Simple and readable
- Great for learning and small inputs

**Cons**
- Slow for large datasets
- Nested lookups (`includes`) cause quadratic performance

---

### 2️⃣ Set-Based

**File:** `algorithms/set_diff.js`

**Idea**
- Convert arrays to sets
- Collect elements unique to each set

**Complexity**
- Time: O(n)
- Space: O(n)

**Pros**
- Fast and efficient
- Automatically removes duplicates

**Cons**
- Loses original ordering
- Works best with primitive values

---

### 3️⃣ Hash Map (Frequency Counting)

**File:** `algorithms/hashmap_diff.js`

**Idea**
- Count how many times each element appears across both arrays
- Return values that appear exactly once

**Complexity**
- Time: O(n)
- Space: O(n)

**Pros**
- Preserves order of appearance
- Explicitly handles duplicates

**Cons**
- Slightly more complex
- Uses extra memory

---

## 🛡️ Validation & Edge Cases

All algorithms share a common validator:

```txt
validators/validate_arrays.js


---

## ✅ Part 9 — Example Usage

```md
---

## ▶ Example Usage

```js
const filterDiff = require("./algorithms/filter_diff");
const setDiff = require("./algorithms/set_diff");
const hashDiff = require("./algorithms/hashmap_diff");

const arr1 = ["a", "b", "c"];
const arr2 = ["b", "c", "d"];

console.log(filterDiff(arr1, arr2)); // ["a", "d"]
console.log(setDiff(arr1, arr2));    // ["a", "d"]
console.log(hashDiff(arr1, arr2));   // ["a", "d"]


---

## ✅ Part 10 — Testing, Future Work, License

```md
---

## 🧪 Testing (Optional Extension)

```bash
npm install --save-dev jest
