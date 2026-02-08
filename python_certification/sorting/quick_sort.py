#!/usr/bin/python3
"""
sorting_algorithms.py

This module provides multiple sorting algorithms:
1. Functional Quicksort (easy to read)
2. In-place Quicksort (memory efficient)
3. Python built-in sort (Timsort)

Each approach includes pros and cons.
"""

def validate_array(array):
    if not isinstance(array, list):
        raise TypeError("Input must be a list")
    if not all(isinstance(x, (int, float)) for x in array):
        raise ValueError("All elements must be numbers")


# ----------------------------
# 1. Functional Quicksort
# ----------------------------
def quick_sort(array):
    """
    Sorts a list using functional quicksort (returns a new list).

    Pros:
    - Easy to read and understand
    - Handles duplicates
    - Does not mutate original list

    Cons:
    - Uses extra memory
    - Slower for large lists
    """

    validate_array(array)

    if len(array) <= 1:
        return array

    pivot = array[-1]

    left_side = [x for x in array if x < pivot]
    equal     = [x for x in array if x == pivot]
    right_side= [x for x in array if x > pivot]

    return quick_sort(left_side) + equal + quick_sort(right_side)


# ----------------------------
# 2. In-place Quicksort
# ----------------------------
def quick_sort_inplace(array):
    """
    Sorts a list in place using quicksort.

    Pros:
    - Fast
    - Memory efficient

    Cons:
    - Harder to understand
    - Mutates original list
    """

    validate_array(array)

    def partition(arr, low, high):
        pivot = arr[high]
        i = low - 1

        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1

    def _quick_sort(arr, low, high):
        if low < high:
            pi = partition(arr, low, high)
            _quick_sort(arr, low, pi - 1)
            _quick_sort(arr, pi + 1, high)

    _quick_sort(array, 0, len(array) - 1)
    return array


# ----------------------------
# 3. Built-in Sort (Alternative)
# ----------------------------
def python_sort(array):
    """
    Sorts a list using Python's built-in Timsort.

    Pros:
    - Very fast
    - Stable
    - Highly optimized

    Cons:
    - Abstracts away algorithm details
    """

    validate_array(array)
    return sorted(array)
