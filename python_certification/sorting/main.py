#!/usr/bin/python3

from sorting_algorithms import merge_sort, quick_sort, builtin_sort

data = [38, 27, 43, 3, 9, 82, 10]

print("Original:", data)
print("Merge Sort:", merge_sort(data))
print("Quick Sort:", quick_sort(data))
print("Built-in Sort:", builtin_sort(data))
