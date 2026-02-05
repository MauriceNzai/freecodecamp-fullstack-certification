#!/usr/bin/python3

from search_algorithms import (
    linear_search,
    binary_search_iterative,
    binary_search_recursive
)

if __name__ == "__main__":
    data = [1, 3, 5, 7, 9, 11, 13]
    target = 7

    print("Linear Search:", linear_search(data, target))
    print("Binary Search (Iterative):", binary_search_iterative(data, target))
    print("Binary Search (Recursive):", binary_search_recursive(data, target))
