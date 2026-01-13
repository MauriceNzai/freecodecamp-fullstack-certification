#!/usr/bin/python3
"""
Budget Module

This module provides a Category class for budget categories, 
allowing deposits, withdrawals, transfers, and balance tracking.
"""

class Category:
    """
    Represents a budget category.

    Attributes:
        name (str): The name of the category.
        ledger (list): A list of transaction dictionaries with 'amount' and 'description'.
    """

    def __init__(self, name):
        """
        Initializes a Category with a name and an empty ledger.

        Args:
            name (str): The category name.
        """
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        """
        Adds a deposit to the ledger.

        Args:
            amount (float): The amount to deposit.
            description (str, optional): Description of the deposit. Defaults to empty string.
        """
        self.ledger.append({
            "amount": amount,
            "description": description
        })

    def withdraw(self, amount, description=""):
        """
        Withdraws money from the category if sufficient funds exist.

        Args:
            amount (float): Amount to withdraw.
            description (str, optional): Description of the withdrawal. Defaults to empty string.

        Returns:
            bool: True if withdrawal succeeded, False otherwise.
        """
        if self.check_funds(amount):
            self.ledger.append({
                "amount": -amount,
                "description": description
            })
            return True
        return False

    def get_balance(self):
        """
        Calculates the current balance of the category.

        Returns:
            float: Current balance (sum of all ledger amounts).
        """
        total = 0
        for entry in self.ledger:
            total += entry["amount"]
        return total

    def transfer(self, amount, category):
        """
        Transfers amount from this category to another category.

        Args:
            amount (float): Amount to transfer.
            category (Category): The destination Category instance.

        Returns:
            bool: True if transfer succeeded, False otherwise.
        """
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {category.name}")
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def check_funds(self, amount):
        """
        Checks if there are sufficient funds for a withdrawal or transfer.

        Args:
            amount (float): Amount to check.

        Returns:
            bool: True if amount is less than or equal to balance, False otherwise.
        """
        return amount <= self.get_balance()

    def __str__(self):
        """
        Returns a formatted string of the category ledger.

        The format includes:
        - A title line with the category name centered in 30 characters.
        - Each ledger entry with description (max 23 chars) and amount (right-aligned, 2 decimals).
        - A total line with the category balance.

        Returns:
            str: Formatted ledger string.
        """
        # Title line
        stars = "*" * ((30 - len(self.name)) // 2)
        title = f"{stars}{self.name}{stars}"
        if len(title) < 30:
            title += "*"

        # Ledger entries
        lines = []
        for entry in self.ledger:
            description = entry["description"][:23]
            amount = entry["amount"]
            lines.append(f"{description:<23}{amount:>7.2f}")

        # Total line
        total = f"Total: {self.get_balance():.2f}"

        return "\n".join([title] + lines + [total])
