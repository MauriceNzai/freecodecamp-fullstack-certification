#!/usr/bin/python3
"""
main.py

Demonstrates usage of the Rectangle and Square classes
from the polygon module.
"""

from polygon import Rectangle, Square


def main():
    # Rectangle usage
    rect = Rectangle(10, 5)
    print(rect)
    print("Area:", rect.get_area())
    print("Perimeter:", rect.get_perimeter())
    print("Diagonal:", rect.get_diagonal())
    print(rect.get_picture())

    rect.set_height(8)
    rect.set_width(16)
    print("Updated:", rect)

    # Square usage
    sq = Square(9)
    print(sq)
    print("Area:", sq.get_area())
    print("Perimeter:", sq.get_perimeter())
    print("Diagonal:", sq.get_diagonal())

    sq.set_side(4)
    print("Updated:", sq)
    print(sq.get_picture())

    # Containment check
    print("Rect contains square:", rect.get_amount_inside(sq))


if __name__ == "__main__":
    main()
