#!/usr/bin/python3
"""
luhn_cleaner.py

This module handles cleaning and validating raw card number input.

Functions:
- clean_card_number(card_number: str) -> str

Pros:
- Handles formatted inputs like "4111-1111 1111 1111"
- Ensures algorithm only works on digits

Cons:
- Does not validate card length or card issuer rules
"""

def clean_card_number(card_number: str) -> str:
    """
    Remove all non-digit characters from a card number string.

    Args:
        card_number (str): Raw card number input (may include spaces or hyphens)

    Returns:
        str: Digits-only card number

    Raises:
        ValueError: If no digits are found
    """
    digits_only = "".join(char for char in card_number if char.isdigit())

    if not digits_only:
        raise ValueError("Card number must contain at least one digit")

    return digits_only
