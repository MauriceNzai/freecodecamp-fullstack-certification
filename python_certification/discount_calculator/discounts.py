#!/usr/bin/python3
"""
discounts.py

A flexible discount engine that evaluates multiple discount strategies
and determines the best possible price for a customer.
"""

from abc import ABC, abstractmethod
from typing import List


class Product:
    """Represents a purchasable product."""

    def __init__(self, name: str, price: float) -> None:
        if price < 0:
            raise ValueError("Price cannot be negative.")
        self.name = name
        self.price = price

    def __str__(self) -> str:
        return f"{self.name} - ${self.price:.2f}"


class DiscountStrategy(ABC):
    """
    Abstract base class for all discount strategies.
    """

    @abstractmethod
    def is_applicable(self, product: Product, user_tier: str) -> bool:
        """Determine whether the discount can be applied."""
        pass

    @abstractmethod
    def apply_discount(self, product: Product) -> float:
        """Return the discounted price."""
        pass


class PercentageDiscount(DiscountStrategy):
    """Applies a percentage-based discount."""

    MAX_PERCENT = 70.0

    def __init__(self, percent: float) -> None:
        if not 0 < percent <= self.MAX_PERCENT:
            raise ValueError("Invalid discount percentage.")
        self.percent = percent

    def is_applicable(self, product: Product, user_tier: str) -> bool:
        return True

    def apply_discount(self, product: Product) -> float:
        discounted = product.price * (1 - self.percent / 100)
        return max(discounted, 0.0)


class FixedAmountDiscount(DiscountStrategy):
    """Applies a fixed monetary discount."""

    def __init__(self, amount: float) -> None:
        if amount <= 0:
            raise ValueError("Discount amount must be positive.")
        self.amount = amount

    def is_applicable(self, product: Product, user_tier: str) -> bool:
        return product.price > self.amount

    def apply_discount(self, product: Product) -> float:
        return max(product.price - self.amount, 0.0)


class PremiumUserDiscount(DiscountStrategy):
    """Special discount for premium users."""

    DISCOUNT_RATE = 0.20

    def is_applicable(self, product: Product, user_tier: str) -> bool:
        return user_tier.lower() == "premium"

    def apply_discount(self, product: Product) -> float:
        return product.price * (1 - self.DISCOUNT_RATE)


class DiscountEngine:
    """
    Evaluates all applicable discounts and returns the best price.
    """

    def __init__(self, strategies: List[DiscountStrategy]) -> None:
        self.strategies = strategies

    def calculate_best_price(self, product: Product, user_tier: str) -> float:
        prices = [product.price]

        for strategy in self.strategies:
            if strategy.is_applicable(product, user_tier):
                prices.append(strategy.apply_discount(product))

        return min(prices)
