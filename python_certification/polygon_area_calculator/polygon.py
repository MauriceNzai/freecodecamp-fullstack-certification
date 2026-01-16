#!/usr/bin/python3
"""
polygon.py

A simple polygon area calculator module that provides Rectangle and Square
classes with common geometric operations.

This module demonstrates:
- Inheritance (Square is a specialized Rectangle)
- Encapsulation via setters
- Method overriding to enforce constraints
- Clean string representations for debugging and display

Classes:
    Rectangle
    Square
"""

import math


class Rectangle:
    """
    Represents a rectangle defined by its width and height.

    Provides methods to compute area, perimeter, diagonal length,
    visual representation, and how many times another shape fits inside.
    """

    def __init__(self, width, height):
        """
        Initialize a Rectangle instance.

        Args:
            width (int | float): The width of the rectangle.
            height (int | float): The height of the rectangle.
        """
        self.width = width
        self.height = height

    def set_width(self, new_width):
        """
        Set a new width for the rectangle.

        Args:
            new_width (int | float): The new width value.
        """
        self.width = new_width

    def set_height(self, new_height):
        """
        Set a new height for the rectangle.

        Args:
            new_height (int | float): The new height value.
        """
        self.height = new_height

    def get_area(self):
        """
        Calculate the area of the rectangle.

        Returns:
            int | float: The area (width × height).
        """
        return self.width * self.height

    def get_perimeter(self):
        """
        Calculate the perimeter of the rectangle.

        Returns:
            int | float: The perimeter.
        """
        return 2 * (self.width + self.height)

    def get_diagonal(self):
        """
        Calculate the diagonal length using the Pythagorean theorem.

        Returns:
            float: The diagonal length.
        """
        return math.sqrt(self.width ** 2 + self.height ** 2)

    def get_picture(self):
        """
        Generate a visual representation of the rectangle using '*' characters.

        Returns:
            str: A string representation of the rectangle, or a message
                 if the dimensions exceed 50.
        """
        if self.width > 50 or self.height > 50:
            return "Too big for picture."

        picture = []
        for _ in range(self.height):
            picture.append("*" * self.width)

        return "\n".join(picture) + "\n"

    def get_amount_inside(self, other):
        """
        Determine how many times another rectangle or square fits inside this one.

        Args:
            other (Rectangle): Another rectangle or square.

        Returns:
            int: Number of times the other shape fits inside.
        """
        return (self.width // other.width) * (self.height // other.height)

    def __repr__(self):
        """
        Return the official string representation of the Rectangle.

        Returns:
            str: Rectangle(width=<width>, height=<height>)
        """
        return f"Rectangle(width={self.width}, height={self.height})"


class Square(Rectangle):
    """
    Represents a square, a special case of a rectangle where
    width and height are always equal.
    """

    def __init__(self, side):
        """
        Initialize a Square instance.

        Args:
            side (int | float): The length of each side.
        """
        super().__init__(side, side)

    def set_side(self, new_side):
        """
        Set a new side length for the square.

        Args:
            new_side (int | float): The new side length.
        """
        self.width = self.height = new_side

    def set_width(self, new_width):
        """
        Override Rectangle.set_width to maintain square constraints.

        Args:
            new_width (int | float): The new side length.
        """
        self.set_side(new_width)

    def set_height(self, new_height):
        """
        Override Rectangle.set_height to maintain square constraints.

        Args:
            new_height (int | float): The new side length.
        """
        self.set_side(new_height)

    def __repr__(self):
        """
        Return the official string representation of the Square.

        Returns:
            str: Square(side=<side>)
        """
        return f"Square(side={self.width})"
