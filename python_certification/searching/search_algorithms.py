#!/usr/bin/python3
"""
search_algorithms.py

A collection of search algorithms for locating an element in a list.

Algorithms included:
- Linear Search
- Iterative Binary Search
- Recursive Binary Search

Note:
Binary Search requires the input list to be sorted.
"""

from typing import List, Any


def _validate_input(arr: List[Any]):
    if not isinstance(arr, list):
        raise TypeError("Input must be a list")


def linear_search(arr: List[Any], target: Any) -> int:
    """
    Linear Search implementation.

    Time Complexity: O(n)
    Space Complexity: O(1)

    Pros:
    - Works on unsorted data
    - Very simple

    Cons:
    - Inefficient for large datasets
    """
    _validate_input(arr)

    for index, value in enumerate(arr):
        if value == target:
            return index
    return -1


def binary_search_iterative(arr: List[Any], target: Any) -> int:
    """
    Iterative Binary Search implementation.

    Time Complexity: O(log n)
    Space Complexity: O(1)

    Pros:
    - Fast for large sorted lists
    - No recursion overhead

    Cons:
    - Requires sorted input
    """
    _validate_input(arr)

    if not arr:
        return -1

    low, high = 0, len(arr) - 1

    while low <= high:
        mid = (low + high) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1


def binary_search_recursive(arr: List[Any], target: Any, low: int = 0, high: int = None) -> int:
    """
    Recursive Binary Search implementation.

    Time Complexity: O(log n)
    Space Complexity: O(log n)

    Pros:
    - Elegant and expressive

    Cons:
    - Extra memory due to recursion
    """
    _validate_input(arr)

    if high is None:
        high = len(arr) - 1

    if low > high:
        return -1

    mid = (low + high) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, high)
    else:
        return binary_search_recursive(arr, target, low, mid - 1)
