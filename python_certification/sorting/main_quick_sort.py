#!/usr/bin/python3

from quick_sort import quick_sort, quick_sort_inplace, python_sort

numbers = [8, 3, 1, 7, 0, 10, 2, 7, 3]

print("Original:", numbers)

print("Functional Quick Sort:", quick_sort(numbers))

numbers_copy = numbers.copy()
quick_sort_inplace(numbers_copy)
print("In-place Quick Sort:", numbers_copy)

print("Python Built-in Sort:", python_sort(numbers))
