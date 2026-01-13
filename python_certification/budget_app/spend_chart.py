#!/usr/bin/python3

"""
spend_chart.py

Provides functionality to generate a percentage spend chart
for multiple budget categories.
"""


def create_spend_chart(categories):
    """
    Create a bar chart showing the percentage of spending
    for each category.

    Percentages are rounded down to the nearest 10.

    Args:
        categories (list): List of Category objects

    Returns:
        str: Formatted percentage spend chart
    """

    # Calculate total spent per category
    spent_per_category = []
    total_spent = 0

    for category in categories:
        spent = 0
        for entry in category.ledger:
            if entry["amount"] < 0:
                spent += -entry["amount"]
        spent_per_category.append(spent)
        total_spent += spent

    # Calculate percentages (rounded down to nearest 10)
    percentages = [
        int((spent / total_spent) * 100) // 10 * 10
        for spent in spent_per_category
    ]

    # Chart title
    chart = "Percentage spent by category\n"

    # Build chart bars (100 down to 0)
    for level in range(100, -1, -10):
        chart += f"{str(level).rjust(3)}|"
        for percentage in percentages:
            if percentage >= level:
                chart += " o "
            else:
                chart += "   "
        chart += " \n"

    # Horizontal divider
    chart += "    " + "-" * (len(categories) * 3 + 1) + "\n"

    # Category names (vertical)
    names = [category.name for category in categories]
    max_length = max(len(name) for name in names)

    for i in range(max_length):
        chart += "     "
        for name in names:
            if i < len(name):
                chart += name[i] + "  "
            else:
                chart += "   "
        chart += "\n"

    # Remove trailing newline to match exact test output
    return chart.rstrip("\n")
