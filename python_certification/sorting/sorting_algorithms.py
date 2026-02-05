#!/usr/bin/python3
"""
sorting_algorithms.py

A collection of sorting algorithms with validation and documentation.
"""

from typing import List, Any


def validate_input(arr):
    if not isinstance(arr, list):
        raise TypeError("Input must be a list")
    if not all(isinstance(x, (int, float)) for x in arr):
        raise ValueError("All elements must be numbers")


def merge_sort(arr: List[Any]) -> List[Any]:
    """
    Merge Sort (Divide and Conquer)

    Pros:
    - Stable
    - Guaranteed O(n log n)

    Cons:
    - Uses extra memory
    """
    validate_input(arr)

    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result


def quick_sort(arr: List[Any]) -> List[Any]:
    """
    Quick Sort

    Pros:
    - Fast average performance
    - Low memory usage

    Cons:
    - Worst case O(n²)
    - Not stable
    """
    validate_input(arr)

    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + middle + quick_sort(right)


def builtin_sort(arr: List[Any]) -> List[Any]:
    """
    Python Built-in Sort (Timsort)

    Pros:
    - Extremely optimized
    - Stable
    - Best real-world performance

    Cons:
    - Algorithm internals are abstracted
    """
    validate_input(arr)
    return sorted(arr)
