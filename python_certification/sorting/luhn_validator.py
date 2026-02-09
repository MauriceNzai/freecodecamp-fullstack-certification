#!/usr/bin/python3
"""
luhn_validator.py

This module validates card numbers using the Luhn Algorithm.

Functions:
- verify_card_number(card_number: str) -> bool

Pros:
- Full Luhn pipeline in one call
- Clean error handling
- Input validation

Cons:
- Does not verify real card issuer rules
"""

from luhn_cleaner import clean_card_number
from luhn_transformer import double_alternate
from luhn_sum import luhn_sum

def verify_card_number(card_number: str) -> bool:
    """
    Validate a card number using the Luhn Algorithm.

    Args:
        card_number (str): Raw card number input

    Returns:
        bool: True if valid, False otherwise
    """
    cleaned = clean_card_number(card_number)

    if len(cleaned) < 2:
        return False

    transformed = double_alternate(cleaned)
    total = luhn_sum(transformed)

    return total % 10 == 0
