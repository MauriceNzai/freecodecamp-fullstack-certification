#!/usr/bin/python3

"""
planet_module.py

This module defines the Planet class, which models a planet with a name, type,
and its parent star. It includes input validation, string representation,
and a method to describe its orbit.

Example usage:
    planet = Planet("Earth", "Terrestrial", "Sun")
    print(planet)
    print(planet.orbit())
"""

class Planet:
    """
    A class to represent a planet orbiting a star.

    Attributes:
        name (str): The name of the planet.
        planet_type (str): The type of the planet (e.g., Terrestrial, Gas Giant).
        star (str): The star around which the planet orbits.
    """

    def __init__(self, name: str, planet_type: str, star: str):
        """
        Initialize a Planet instance.

        Args:
            name (str): Name of the planet.
            planet_type (str): Type of the planet.
            star (str): Name of the star the planet orbits.

        Raises:
            TypeError: If any argument is not a string.
            ValueError: If any argument is an empty string or contains only whitespace.
        """
        self._validate_inputs(name, planet_type, star)
        self.name = name
        self.planet_type = planet_type
        self.star = star

    @staticmethod
    def _validate_inputs(name: str, planet_type: str, star: str):
        """
        Validate the constructor arguments for type and non-empty values.

        Args:
            name (str): Name of the planet.
            planet_type (str): Type of the planet.
            star (str): Name of the star.

        Raises:
            TypeError: If any argument is not a string.
            ValueError: If any argument is empty or contains only whitespace.
        """
        arguments = (name, planet_type, star)

        if not all(isinstance(arg, str) for arg in arguments):
            raise TypeError("name, planet type, and star must be strings")

        if any(not arg.strip() for arg in arguments):
            raise ValueError("name, planet_type, and star must be non-empty strings")

    def orbit(self) -> str:
        """
        Describe the planet's orbit.

        Returns:
            str: A string describing the planet orbiting its star.
        """
        return f"{self.name} is orbiting around {self.star}..."

    def __str__(self) -> str:
        """
        Return a formatted string representation of the planet.

        Returns:
            str: Formatted string with the planet's name, type, and star.
        """
        return f"Planet: {self.name} | Type: {self.planet_type} | Star: {self.star}"


if __name__ == "__main__":
    # Create example planet instances
    planet_1 = Planet("Earth", "Terrestrial", "Sun")
    planet_2 = Planet("Jupiter", "Gas Giant", "Sun")
    planet_3 = Planet("Kepler-452b", "Super-Earth", "Kepler-452")

    planets = [planet_1, planet_2, planet_3]

    # Print planet details and orbits
    for planet in planets:
        print(planet)
        print(planet.orbit())
