#!/usr/bin/python3
"""
luhn_utils.py

Utility functions for preprocessing card numbers prior to applying
the Luhn Algorithm. These helpers focus on extracting digit characters
from user input that may contain spaces, hyphens, or other separators.

This module provides multiple approaches to cleaning card numbers to
support learning, benchmarking, and stylistic preferences.
"""

import re


def digits_only_isdigit(card_number: str) -> str:
    """
    Extract only digit characters from a card number using str.isdigit().

    Algorithm:
    1. Iterate over each character in the input string.
    2. Keep only characters for which ch.isdigit() is True.
    3. Join the remaining characters into a new string.

    Args:
        card_number (str): Raw card number string (may include spaces, hyphens, etc.)

    Returns:
        str: A string containing only digit characters.

    Pros:
        - Very readable and beginner-friendly
        - Does not require external libraries
        - Handles any non-digit characters safely

    Cons:
        - Slightly slower than regex for very large strings (negligible for card numbers)
    """
    return ''.join(ch for ch in card_number if ch.isdigit())


def digits_only_regex(card_number: str) -> str:
    """
    Extract only digit characters from a card number using regular expressions.

    Algorithm:
    1. Replace any non-digit character (\\D) with an empty string.
    2. Return the cleaned string.

    Args:
        card_number (str): Raw card number string (may include spaces, hyphens, etc.)

    Returns:
        str: A string containing only digit characters.

    Pros:
        - Very concise
        - Fast for large inputs
        - Easy to extend for more complex patterns

    Cons:
        - Less readable for beginners unfamiliar with regex
        - Requires importing the re module
    """
    return re.sub(r'\D', '', card_number)


def digits_only_filter(card_number: str) -> str:
    """
    Extract only digit characters from a card number using filter().

    Algorithm:
    1. Apply str.isdigit as a predicate function to filter characters.
    2. Join the remaining characters into a new string.

    Args:
        card_number (str): Raw card number string (may include spaces, hyphens, etc.)

    Returns:
        str: A string containing only digit characters.

    Pros:
        - Compact and expressive
        - Functional programming style
        - No regex required

    Cons:
        - Slightly less readable for beginners
        - Harder to debug than an explicit loop
    """
    return ''.join(filter(str.isdigit, card_number))


def digits_only_ascii(card_number: str) -> str:
    """
    Extract only digit characters from a card number using ASCII range checks.

    Algorithm:
    1. Iterate through each character.
    2. Keep characters that fall between '0' and '9'.
    3. Join the remaining characters into a new string.

    Args:
        card_number (str): Raw card number string (may include spaces, hyphens, etc.)

    Returns:
        str: A string containing only digit characters.

    Pros:
        - Does not rely on any built-in methods
        - Very explicit logic
        - Useful for educational purposes

    Cons:
        - More manual and verbose
        - Less expressive than str.isdigit()
    """
    return ''.join(ch for ch in card_number if '0' <= ch <= '9')


def clean_card_number(card_number: str) -> str:
    """
    Safely clean and validate a card number string before applying the Luhn Algorithm.

    Algorithm:
    1. Validate input type (must be a string).
    2. Extract digit characters using str.isdigit().
    3. Raise an error if no digits are found.
    4. Return the cleaned digit string.

    Args:
        card_number (str): Raw card number input.

    Returns:
        str: A cleaned string containing only digits.

    Raises:
        TypeError: If card_number is not a string.
        ValueError: If no digits are found in the input.

    Pros:
        - Defensive and production-ready
        - Prevents invalid data from reaching the Luhn algorithm
        - Clear error messages for debugging and APIs

    Cons:
        - Slightly more verbose than simple helper functions
        - Raises exceptions instead of silently failing
    """
    if not isinstance(card_number, str):
        raise TypeError("card_number must be a string")

    digits = ''.join(ch for ch in card_number if ch.isdigit())

    if not digits:
        raise ValueError("No digits found in card number")

    return digits
