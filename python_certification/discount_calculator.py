#!/usr/bin/python3
"""
Discount Calculator Module

Supports:
- Percentage discounts
- Fixed amount discounts
- Capped percentage discounts

All functions validate inputs and raise exceptions on invalid data.
"""

def _validate_price(price):
    if not isinstance(price, (int, float)):
        raise TypeError("Price must be a number")
    if price <= 0:
        raise ValueError("Price must be greater than 0")


def _validate_percentage(discount):
    if not isinstance(discount, (int, float)):
        raise TypeError("Discount must be a number")
    if not 0 <= discount <= 100:
        raise ValueError("Discount must be between 0 and 100")


def apply_percentage_discount(price, discount):
    """
    Apply a percentage discount to a price.

    Pros:
    - Simple and common
    Cons:
    - Percentage-only
    """
    _validate_price(price)
    _validate_percentage(discount)
    return round(price * (1 - discount / 100), 2)


def apply_fixed_discount(price, amount):
    """
    Apply a fixed discount amount.

    Pros:
    - Ideal for coupons
    Cons:
    - Needs protection against negative results
    """
    _validate_price(price)
    if not isinstance(amount, (int, float)):
        raise TypeError("Discount amount must be a number")
    if amount < 0:
        raise ValueError("Discount amount cannot be negative")

    final_price = price - amount
    return round(max(final_price, 0), 2)


def apply_capped_discount(price, discount, max_discount=50):
    """
    Apply a percentage discount with a maximum cap.

    Pros:
    - Prevents extreme discounts
    Cons:
    - Slightly more complex
    """
    _validate_price(price)
    _validate_percentage(discount)
    _validate_percentage(max_discount)

    effective_discount = min(discount, max_discount)
    return round(price * (1 - effective_discount / 100), 2)
