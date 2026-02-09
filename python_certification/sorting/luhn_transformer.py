#!/usr/bin/python3
"""
luhn_transformer.py

This module handles the Luhn digit transformation step.

Functions:
- double_alternate(card_digits: str) -> list[int]

Pros:
- Implements the exact Luhn doubling rules
- Works for any digit length

Cons:
- Assumes input is already cleaned and validated
"""

def double_alternate(card_digits: str) -> list[int]:
    """
    Double every second digit from the right.

    Algorithm:
    - Start from the rightmost digit
    - Move left
    - Double every second digit

    Args:
        card_digits (str): Cleaned card number (digits only)

    Returns:
        list[int]: Transformed digits list

    Raises:
        ValueError: If input contains non-digits
    """
    if not card_digits.isdigit():
        raise ValueError("card_digits must contain only digits")

    result = []
    double = False

    for char in reversed(card_digits):
        digit = int(char)

        if double:
            digit *= 2

        result.append(digit)
        double = not double

    return result[::-1]
