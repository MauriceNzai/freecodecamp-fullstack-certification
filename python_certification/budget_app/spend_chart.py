#!/usr/bin/python3
"""
spend_chart.py

Provides functionality to generate a percentage spend chart
for multiple budget categories.

The chart displays how much each category contributes to the
total spending, rounded down to the nearest 10%.
"""


def create_spend_chart(categories):
    """
    Create a bar chart showing the percentage of spending
    for each category.

    Percentages are calculated using withdrawals only and
    rounded down to the nearest 10.

    Args:
        categories (list): List of Category objects

    Returns:
        str: Formatted percentage spend chart
    """
    names = get_category_names(categories)
    spending = get_spending_per_category(categories)
    percentages = calculate_percentages(spending)

    title = build_chart_title()
    bars = build_percentage_bars(percentages)
    divider = build_horizontal_divider(len(categories))
    labels = build_vertical_labels(names)

    return (
        title
        + "\n"
        + "\n".join(bars)
        + "\n"
        + divider
        + "\n"
        + "\n".join(labels)
    )


def get_category_names(categories):
    """
    Extract category names from Category objects.

    Args:
        categories (list): List of Category objects

    Returns:
        list: List of category names
    """
    return [category.name for category in categories]


def get_spending_per_category(categories):
    """
    Calculate total spending per category using withdrawals only.

    Args:
        categories (list): List of Category objects

    Returns:
        list: Total amount spent per category
    """
    total_spent_per_category = []

    for category in categories:
        amount_spent = 0
        for entry in category.ledger:
            if entry["amount"] < 0:
                amount_spent += -entry["amount"]
        total_spent_per_category.append(amount_spent)

    return total_spent_per_category


def calculate_percentages(spent_amounts):
    """
    Calculate percentage contribution per category.

    Percentages are rounded down to the nearest 10.

    Args:
        spent_amounts (list): Amounts spent per category

    Returns:
        list: Rounded percentage values
    """
    total = sum(spent_amounts)
    percentages = []

    for amount in spent_amounts:
        percentage = (amount / total) * 100
        rounded_percentage = int(percentage // 10) * 10
        percentages.append(rounded_percentage)

    return percentages


def build_chart_title():
    """
    Build the chart title.

    Returns:
        str: Chart title
    """
    return "Percentage spent by category"


def build_percentage_bars(percentages):
    """
    Build horizontal percentage bars for the chart.

    Args:
        percentages (list): Rounded percentage values

    Returns:
        list: Chart bar lines
    """
    chart_lines = []

    for level in range(100, -1, -10):
        line = f"{str(level).rjust(3)}|"
        for percentage in percentages:
            line += " o " if percentage >= level else "   "
        chart_lines.append(line)

    return chart_lines


def build_horizontal_divider(category_count):
    """
    Build the horizontal divider below the bars.

    Args:
        category_count (int): Number of categories

    Returns:
        str: Divider line
    """
    return "    " + "-" * (category_count * 3 + 1)


def build_vertical_labels(category_names):
    """
    Build vertical category labels below the chart.

    Args:
        category_names (list): List of category names

    Returns:
        list: Vertical label lines
    """
    max_length = max(len(name) for name in category_names)
    chart_lines = []

    for i in range(max_length):
        line = "     "
        for name in category_names:
            line += name[i] + "  " if i < len(name) else "   "
        chart_lines.append(line.rstrip())

    return chart_lines

