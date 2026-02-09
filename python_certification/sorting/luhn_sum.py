#!/usr/bin/python3
"""
luhn_sum.py

This module calculates the Luhn checksum.

Functions:
- luhn_sum(digits: list[int]) -> int

Pros:
- Handles double-digit correction automatically
- Simple and readable

Cons:
- Assumes values are non-negative integers
"""

def luhn_sum(digits: list[int]) -> int:
    """
    Compute the Luhn checksum.

    Args:
        digits (list[int]): Digits after transformation

    Returns:
        int: Sum of digits after applying Luhn rules

    Raises:
        ValueError: If list is empty or contains invalid values
    """
    if not digits:
        raise ValueError("digits list cannot be empty")

    total = 0
    for value in digits:
        if value < 0:
            raise ValueError("digits must be non-negative integers")

        if value > 9:
            value -= 9

        total += value

    return total
