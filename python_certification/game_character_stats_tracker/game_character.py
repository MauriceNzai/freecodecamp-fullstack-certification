#!/usr/bin/python3
"""
game_character.py

A simple Game Character Stats Tracker module.

This module defines a GameCharacter class that tracks a character's
name, health, mana, and level. It enforces stat limits using
property setters and provides a level-up mechanism.
"""


class GameCharacter:
    """
    Represents a game character with basic RPG-style statistics.

    Attributes:
        name (str): Character name (read-only).
        health (int): Character health (0–100).
        mana (int): Character mana (0–50).
        level (int): Character level (starts at 1).
    """

    def __init__(self, name):
        """
        Initialize a new game character with default stats.

        Args:
            name (str): The name of the character.
        """
        self._name = name
        self._health = 100
        self._mana = 50
        self._level = 1

    @property
    def name(self):
        """Return the character's name."""
        return self._name

    @property
    def health(self):
        """Return the character's current health."""
        return self._health

    @health.setter
    def health(self, new_health):
        """
        Update the character's health.

        Health is clamped between 0 and 100.
        """
        if new_health < 0:
            self._health = 0
        elif new_health > 100:
            self._health = 100
        else:
            self._health = new_health

    @property
    def mana(self):
        """Return the character's current mana."""
        return self._mana

    @mana.setter
    def mana(self, new_mana):
        """
        Update the character's mana.

        Mana is clamped between 0 and 50.
        """
        if new_mana < 0:
            self._mana = 0
        elif new_mana > 50:
            self._mana = 50
        else:
            self._mana = new_mana

    @property
    def level(self):
        """Return the character's current level."""
        return self._level

    def level_up(self):
        """
        Increase the character's level by one.

        Leveling up fully restores health and mana.
        """
        self._level += 1
        self.health = 100
        self.mana = 50
        print(f"{self.name} leveled up to {self.level}!")

    def __str__(self):
        """
        Return a readable string representation of the character.
        """
        return (
            f"Name: {self.name}\n"
            f"Level: {self.level}\n"
            f"Health: {self.health}\n"
            f"Mana: {self.mana}"
        )


if __name__ == '__main__':
    hero = GameCharacter('Kratos')  # Create a new character
    print(hero)

    hero.health -= 30  # Decrease health
    hero.mana -= 10    # Decrease mana
    print(hero)

    hero.level_up()    # Level up
    print(hero)
