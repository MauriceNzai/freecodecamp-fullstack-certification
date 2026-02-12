#!/usr/bin/python3
"""
validators.py

Shared input validation utilities for parentheses generation algorithms.
"""

def validate_pairs(pairs: int) -> None:
    """
    Validate the number of parentheses pairs.

    :param pairs: Number of parentheses pairs
    :raises TypeError: If pairs is not an integer
    :raises ValueError: If pairs < 1
    """
    if not isinstance(pairs, int):
        raise TypeError("pairs must be an integer")
    if pairs < 1:
        raise ValueError("pairs must be >= 1")
