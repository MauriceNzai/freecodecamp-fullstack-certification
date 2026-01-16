#!/usr/bin/python3
"""
player.py

Defines an abstract Player interface and a concrete Pawn implementation
for a grid-based movement system.

Features:
- Abstract Player class enforcing a leveling contract
- Position tracking on a 2D grid
- Movement history tracking (path)
- Randomized movement selection from allowed moves
- Extendable movement capabilities through leveling

This module is designed to be easily extended with additional Player types
(e.g., Knight, Rook, Wizard) and integrated into a larger game engine.
"""

from abc import ABC, abstractmethod
import random
from typing import List, Tuple


class Player(ABC):
    """
    Abstract base class representing a player entity on a 2D grid.

    Attributes:
        moves (List[Tuple[int, int]]): A list of allowed movement vectors.
        position (Tuple[int, int]): Current (x, y) position of the player.
        path (List[Tuple[int, int]]): History of all positions visited.
    """

    def __init__(self) -> None:
        """
        Initialize the player at the origin (0, 0) with no available moves.
        """
        self.moves: List[Tuple[int, int]] = []
        self.position: Tuple[int, int] = (0, 0)
        self.path: List[Tuple[int, int]] = [self.position]

    def make_move(self) -> Tuple[int, int]:
        """
        Perform a random move from the list of allowed moves.

        The player's position is updated based on the chosen movement vector,
        and the new position is appended to the movement history.

        Returns:
            Tuple[int, int]: The new (x, y) position of the player.

        Raises:
            ValueError: If no moves are available for the player.
        """
        if not self.moves:
            raise ValueError("No moves available for this player")

        move = random.choice(self.moves)

        self.position = (
            self.position[0] + move[0],
            self.position[1] + move[1]
        )

        self.path.append(self.position)
        return self.position

    @abstractmethod
    def level_up(self) -> None:
        """
        Upgrade the player's abilities.

        Subclasses must implement this method to define how the player
        evolves when leveling up (e.g., gaining new movement options).
        """
        pass


class Pawn(Player):
    """
    Concrete implementation of a Player with basic movement capabilities.

    The Pawn starts with orthogonal movement (up, down, left, right) and
    gains diagonal movement upon leveling up.
    """

    def __init__(self) -> None:
        """
        Initialize a Pawn with basic orthogonal movement.
        """
        super().__init__()
        self.moves = [(0, 1), (0, -1), (-1, 0), (1, 0)]

    def level_up(self) -> None:
        """
        Enhance the Pawn by adding diagonal movement.

        Diagonal moves are added only once, even if level_up() is
        called multiple times.
        """
        diagonals = [(1, 1), (-1, 1), (1, -1), (-1, -1)]
        for move in diagonals:
            if move not in self.moves:
                self.moves.append(move)
