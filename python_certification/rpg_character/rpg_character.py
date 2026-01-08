#!/usr/bin/python3

"""
Character creation module.

This module provides functionality for creating a character with validated
attributes and a formatted visual representation of character statistics.
It ensures that character names and starting statistics conform to defined
constraints before producing output.

The character statistics are displayed using filled and empty dot symbols
to visually represent attribute levels.
"""

full_dot = '●'
empty_dot = '○'


def create_character(name, strength, intelligence, charisma):
    """
    Create a character with validated attributes and formatted statistics.

    This function validates the character's name and starting statistics
    according to predefined rules. If any validation fails, a descriptive
    error message is returned. When all validations pass, the function returns
    a formatted string displaying the character's attributes using dot-based
    visual indicators.

    Validation rules:
    - The name must be a non-empty string with no spaces.
    - The name must not exceed 10 characters.
    - Strength, intelligence, and charisma must be integers.
    - Each stat must be between 1 and 4 inclusive.
    - The sum of all stats must be exactly 7.

    Args:
        name (str): The character's name.
        strength (int): The character's strength stat.
        intelligence (int): The character's intelligence stat.
        charisma (int): The character's charisma stat.

    Returns:
        str: A formatted character description if all validations pass,
             otherwise an error message describing the validation failure.
    """
    # ---- Name validation ----
    if not isinstance(name, str):
        return "The character name should be a string"

    if not name:
        return "The character should have a name"

    if len(name) > 10:
        return "The character name is too long"

    if " " in name:
        return "The character name should not contain spaces"

    # ---- Stats type validation ----
    stats = (strength, intelligence, charisma)

    if not all(isinstance(stat, int) for stat in stats):
        return "All stats should be integers"

    # ---- Stats range validation ----
    if any(stat < 1 for stat in stats):
        return "All stats should be no less than 1"

    if any(stat > 4 for stat in stats):
        return "All stats should be no more than 4"

    # ---- Stats sum validation ----
    if sum(stats) != 7:
        return "The character should start with 7 points"

    # ---- Character sheet output ----
    return (
        f"{name}\n"
        f"STR {full_dot * strength}{empty_dot * (10 - strength)}\n"
        f"INT {full_dot * intelligence}{empty_dot * (10 - intelligence)}\n"
        f"CHA {full_dot * charisma}{empty_dot * (10 - charisma)}"
    )


if __name__ == "__main__":
   character =  create_character("mac", 1, 3, 2)
   print(character)

   print(create_character('ren', 4, 2, 1))
