#!/usr/bin/python3
"""
luhn_validator.py

Full Luhn Algorithm validator that wires together the modular steps:
1. Card number cleaning (digit extraction)
2. Alternate digit doubling
3. Luhn sum with subtract-9 normalization

Allows the user to choose any strategy from the respective modules
for maximum flexibility, testing, or benchmarking.

Returns True if the card number passes the Luhn checksum, False otherwise.
"""

from luhn_cleaner import (
    digits_only_isdigit,
    digits_only_regex,
    digits_only_filter,
    digits_only_ascii,
    clean_card_number
)

from luhn_transformer import (
    double_alternate_reverse,
    double_alternate_toggle,
    double_alternate_math,
    double_alternate_map,
    double_alternate_safe
)

from luhn_sum import (
    luhn_sum_basic,
    luhn_sum_ternary,
    luhn_sum_digit_sum,
    luhn_sum_safe
)


def is_valid_card_number(
    card_number: str,
    clean_strategy=clean_card_number,
    double_strategy=double_alternate_safe,
    sum_strategy=luhn_sum_safe
) -> bool:
    """
    Validate a card number using the Luhn Algorithm with fully
    modular strategies.

    Algorithm:
        1. Clean the input string using the provided clean_strategy.
        2. Double every second digit using the provided double_strategy.
        3. Compute the Luhn sum using the provided sum_strategy.
        4. Return True if total sum modulo 10 == 0, else False.

    Args:
        card_number (str): Raw card number string.
        clean_strategy (callable, optional): Function to extract digits. Defaults to clean_card_number.
        double_strategy (callable, optional): Function to double alternate digits. Defaults to double_alternate_safe.
        sum_strategy (callable, optional): Function to compute Luhn sum. Defaults to luhn_sum_safe.

    Returns:
        bool: True if card number is valid according to Luhn algorithm, False otherwise.

    Raises:
        TypeError: If card_number is not a string.
        ValueError: If clean_strategy raises an error for invalid input.
    """
    # Step 1: Clean card number
    cleaned = clean_strategy(card_number)

    # Step 2: Double alternate digits
    doubled = double_strategy(cleaned)

    # Step 3: Compute Luhn sum
    total = sum_strategy(doubled)

    # Step 4: Check modulo 10
    return total % 10 == 0

if __name__ == "__main__":
    tests = [
        "7992 7398 713",        # valid
        "7992-7398-714",        # invalid
        "4111-1111-1111-1111",  # valid Visa
        "1234-5678-9012-3456",  # invalid
    ]

    for card in tests:
        valid = is_valid_card_number(
            card_number=card,
            clean_strategy=digits_only_regex,
            double_strategy=double_alternate_toggle,
            sum_strategy=luhn_sum_ternary
        )
        print(f"{card} => {'Valid' if valid else 'Invalid'}")
