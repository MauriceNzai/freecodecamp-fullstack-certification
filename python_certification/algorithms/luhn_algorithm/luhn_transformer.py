#!/usr/bin/python3
"""
luhn_double.py

Contains multiple strategies for performing the "alternate digit doubling"
step of the Luhn Algorithm. This step processes a string of digits from right
to left, doubling every second digit. Each strategy demonstrates a different
approach for doubling alternate digits while preserving order.

All functions assume that the input string contains only digit characters.
"""

def double_alternate_reverse(card_digits: str) -> list[int]:
    """
    Strategy 1: Reverse + index check

    Algorithm:
    1. Reverse the digit string.
    2. Loop with index and double digits at odd indexes.
    3. Reverse the result to restore original order.

    Args:
        card_digits (str): Digits-only card number string.

    Returns:
        list[int]: List of integers after alternate doubling.

    Pros:
        - Very readable
        - Easy to debug and understand

    Cons:
        - Uses reversing twice
    """
    result = []
    reversed_digits = card_digits[::-1]

    for i, ch in enumerate(reversed_digits):
        digit = int(ch)
        if i % 2 == 1:
            digit *= 2
        result.append(digit)

    return result[::-1]


def double_alternate_toggle(card_digits: str) -> list[int]:
    """
    Strategy 2: Right-to-left walk with toggle flag

    Algorithm:
    1. Traverse the string from right to left.
    2. Use a toggle flag to decide which digit to double.
    3. Reverse the result at the end to restore original order.

    Args:
        card_digits (str): Digits-only card number string.

    Returns:
        list[int]: List of integers after alternate doubling.

    Pros:
        - Clean logic
        - No index math
        - Efficient

    Cons:
        - Slightly less explicit for beginners
    """
    result = []
    double = False

    for ch in reversed(card_digits):
        digit = int(ch)
        if double:
            digit *= 2
        result.append(digit)
        double = not double

    return result[::-1]


def double_alternate_math(card_digits: str) -> list[int]:
    """
    Strategy 3: Index from right using math

    Algorithm:
    1. Compute length of the string.
    2. Traverse left-to-right.
    3. For each digit, calculate its position from the right.
    4. Double if position_from_right is even.

    Args:
        card_digits (str): Digits-only card number string.

    Returns:
        list[int]: List of integers after alternate doubling.

    Pros:
        - No reversing required
        - Clear mathematical logic

    Cons:
        - Slightly more thinking required
    """
    n = len(card_digits)
    result = []

    for i, ch in enumerate(card_digits):
        digit = int(ch)
        pos_from_right = n - i
        if pos_from_right % 2 == 0:
            digit *= 2
        result.append(digit)

    return result


def double_alternate_map(card_digits: str) -> list[int]:
    """
    Strategy 4: Functional style with map/list comprehension

    Algorithm:
    1. Enumerate digits from right to left.
    2. Double digits at odd indexes using a conditional expression.
    3. Reverse the result to restore original order.

    Args:
        card_digits (str): Digits-only card number string.

    Returns:
        list[int]: List of integers after alternate doubling.

    Pros:
        - Compact
        - Pythonic

    Cons:
        - Harder to read for beginners
        - Less friendly for debugging
    """
    return list(
        reversed([
            int(ch) * 2 if i % 2 else int(ch)
            for i, ch in enumerate(reversed(card_digits))
        ])
    )


def double_alternate_safe(card_digits: str) -> list[int]:
    """
    Production-ready version with input validation.

    Algorithm:
    1. Validate input is a string containing digits only.
    2. Traverse right-to-left with toggle flag.
    3. Double alternate digits.
    4. Return result in original order.

    Args:
        card_digits (str): Digits-only card number string.

    Returns:
        list[int]: List of integers after alternate doubling.

    Raises:
        TypeError: If input is not a string.
        ValueError: If string contains non-digit characters.

    Pros:
        - Defensive, production-ready
        - Safe for use in APIs

    Cons:
        - Slightly more verbose
    """
    if not isinstance(card_digits, str):
        raise TypeError("card_digits must be a string")
    if not card_digits.isdigit():
        raise ValueError("card_digits must contain digits only")

    result = []
    double = False

    for ch in reversed(card_digits):
        digit = int(ch)
        if double:
            digit *= 2
        result.append(digit)
        double = not double

    return result[::-1]
