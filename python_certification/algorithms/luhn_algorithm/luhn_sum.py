#!/usr/bin/python3
"""
luhn_sum.py

Contains multiple strategies for the "sum + subtract 9" step
of the Luhn Algorithm.

This step processes a list of integers (after alternate doubling)
and normalizes values greater than 9 by subtracting 9, then sums all
values to compute the Luhn checksum.
"""


def luhn_sum_basic(digits: list[int]) -> int:
    """
    Strategy 1: Loop + if-statement (most readable)

    Algorithm:
    1. Iterate through each value.
    2. Subtract 9 if value > 9.
    3. Accumulate the total sum.

    Args:
        digits (list[int]): List of integers.

    Returns:
        int: Luhn sum after normalization.

    Pros:
        - Very readable
        - Easy to debug

    Cons:
        - Slightly more verbose
    """
    total = 0
    for value in digits:
        if value > 9:
            value -= 9
        total += value
    return total


def luhn_sum_ternary(digits: list[int]) -> int:
    """
    Strategy 2: Ternary expression / generator sum

    Algorithm:
    1. Sum values, subtracting 9 if value > 9 using conditional expression.

    Args:
        digits (list[int]): List of integers.

    Returns:
        int: Luhn sum after normalization.

    Pros:
        - Clean one-liner
        - Pythonic

    Cons:
        - Slightly harder to debug
    """
    return sum(value - 9 if value > 9 else value for value in digits)


def luhn_sum_digit_sum(digits: list[int]) -> int:
    """
    Strategy 3: Split digits of each value > 9

    Algorithm:
    1. If value > 9, split into tens and units digits and sum.
    2. Accumulate total sum.

    Args:
        digits (list[int]): List of integers.

    Returns:
        int: Luhn sum after normalization.

    Pros:
        - Explicit numeric decomposition
        - Educational value

    Cons:
        - Slightly more verbose
        - Minor performance penalty
    """
    total = 0
    for value in digits:
        if value > 9:
            value = (value // 10) + (value % 10)
        total += value
    return total


def luhn_sum_safe(digits: list[int]) -> int:
    """
    Production-ready version with input validation.

    Algorithm:
    1. Validate input type (list of integers).
    2. Normalize values > 9 by subtracting 9.
    3. Return total sum.

    Args:
        digits (list[int]): List of integers.

    Returns:
        int: Luhn sum after normalization.

    Raises:
        TypeError: If digits is not a list.
        ValueError: If any element is not a non-negative integer.

    Pros:
        - Defensive, safe for production
        - Input validation included

    Cons:
        - Slightly more verbose
    """
    if not isinstance(digits, list):
        raise TypeError("digits must be a list of integers")

    total = 0
    for value in digits:
        if not isinstance(value, int):
            raise ValueError("All elements in digits must be integers")
        if value < 0:
            raise ValueError("Digit values must be non-negative")
        if value > 9:
            value -= 9
        total += value
    return total
