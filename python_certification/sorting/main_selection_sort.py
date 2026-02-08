#!/usr/bin/python3
"""
main.py

Example usage of the Selection Sort implementations.
"""

from selection_sort import selection_sort, selection_sort_copy


def main():
    numbers = [64, 25, 12, 22, 11]

    print("Original list:")
    print(numbers)

    print("\nSorting in-place using selection_sort...")
    sorted_in_place = selection_sort(numbers)
    print("Sorted list (in-place):")
    print(sorted_in_place)

    print("\nUsing selection_sort_copy (original list remains unchanged):")
    numbers_2 = [5, 3, 8, 4, 2]
    sorted_copy = selection_sort_copy(numbers_2)

    print("Original list:")
    print(numbers_2)

    print("Sorted copy:")
    print(sorted_copy)


if __name__ == "__main__":
    main()
