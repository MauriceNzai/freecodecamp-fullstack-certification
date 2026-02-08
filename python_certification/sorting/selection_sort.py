#!/usr/bin/python3
"""
selection_sort.py

This module provides implementations of the Selection Sort algorithm.

Algorithms Included:
- selection_sort (in-place)
- selection_sort_copy (returns a new sorted list)

Pros:
- Simple and easy to understand
- In-place sorting (low memory usage)

Cons:
- O(n^2) time complexity (slow for large lists)
- Not stable (relative order of equal elements may change)
"""

def _validate_input(arr):
    """
    Validates that the input is a list of comparable elements.

    Args:
        arr (list): Input list.

    Raises:
        TypeError: If input is not a list.
        ValueError: If list contains non-comparable elements.
    """
    if not isinstance(arr, list):
        raise TypeError("Input must be a list")

    # Check if elements are comparable by attempting a comparison
    for i in range(len(arr) - 1):
        try:
            _ = arr[i] < arr[i + 1]
        except Exception:
            raise ValueError("All elements in the list must be comparable")


def selection_sort(arr):
    """
    Sorts a list of comparable elements in ascending order using Selection Sort.
    This function sorts the list in-place.

    Algorithm (Step-by-step):
    1. Start from index 0.
    2. Assume the element at index i is the smallest.
    3. Scan the rest of the list to find a smaller element.
    4. Swap the smallest found element with index i.
    5. Move to the next index and repeat until sorted.

    Args:
        arr (list): List of comparable elements.

    Returns:
        list: The same list object, sorted in ascending order.
    """
    _validate_input(arr)

    n = len(arr)
    if n < 2:
        return arr

    for i in range(n):
        min_index = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j

        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr


def selection_sort_copy(arr):
    """
    Returns a new sorted list using Selection Sort without mutating the original list.

    Args:
        arr (list): List of comparable elements.

    Returns:
        list: A new sorted list.
    """
    _validate_input(arr)
    copied = arr[:]
    return selection_sort(copied)
