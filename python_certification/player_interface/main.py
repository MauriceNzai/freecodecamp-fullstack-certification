#!/usr/bin/python3
"""
main.py

Demonstrates usage of the Player abstraction and Pawn implementation.
"""

from player import Pawn


def main() -> None:
    """
    Run a simple simulation demonstrating player movement and leveling.
    """
    pawn = Pawn()

    print("=== Pawn Created ===")
    print(f"Starting position: {pawn.position}")
    print(f"Available moves: {pawn.moves}\n")

    print("=== Moving Pawn (Before Level Up) ===")
    for step in range(5):
        new_position = pawn.make_move()
        print(f"Move {step + 1}: {new_position}")

    print("\nPath so far:")
    print(pawn.path)

    print("\n=== Leveling Up Pawn ===")
    pawn.level_up()
    print(f"Available moves after level up: {pawn.moves}\n")

    print("=== Moving Pawn (After Level Up) ===")
    for step in range(5):
        new_position = pawn.make_move()
        print(f"Move {step + 1}: {new_position}")

    print("\nFinal path:")
    print(pawn.path)


if __name__ == "__main__":
    main()
