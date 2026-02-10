#!/usr/bin/env python3
"""
hanoi_iterative.py
-----------------

An iterative implementation of the Tower of Hanoi problem.

This module demonstrates how to solve the Tower of Hanoi puzzle without
recursion by following a fixed move pattern that depends on whether the
number of discs is odd or even.

The algorithm performs exactly (2^n - 1) moves and guarantees that:
- Only one disc is moved at a time.
- A larger disc is never placed on top of a smaller disc.

Pegs are labeled:
    - "A" → Source peg
    - "B" → Auxiliary peg
    - "C" → Target peg

Each move updates the internal peg state, and all states are recorded
for visualization and debugging.
"""


def initialize_pegs(num_discs):
    """
    Create and return the initial peg configuration.

    Args:
        num_discs (int): Number of discs to place on the source peg.

    Returns:
        tuple[str, str, str, dict]:
            source peg label,
            auxiliary peg label,
            target peg label,
            dictionary representing peg states.
    """
    source, auxiliary, target = "A", "B", "C"

    pegs = {
        source: list(range(num_discs, 0, -1)),  # Largest disc at the bottom
        auxiliary: [],
        target: []
    }

    return source, auxiliary, target, pegs


def move_between_pegs(pegs, source, auxiliary, target, a, b, moves):
    """
    Perform one legal move between two pegs and record the state.

    The function automatically determines the correct direction
    of the move based on which peg is empty or which top disc is smaller.

    Args:
        pegs (dict): Current peg states.
        source (str): Source peg label.
        auxiliary (str): Auxiliary peg label.
        target (str): Target peg label.
        a (str): First peg in the move.
        b (str): Second peg in the move.
        moves (list): List to store peg state snapshots.
    """
    # If peg 'a' is empty, move top disc from 'b' to 'a'
    if not pegs[a]:
        pegs[a].append(pegs[b].pop())

    # If peg 'b' is empty, move top disc from 'a' to 'b'
    elif not pegs[b]:
        pegs[b].append(pegs[a].pop())

    # Move smaller top disc onto the larger one
    elif pegs[a][-1] < pegs[b][-1]:
        pegs[b].append(pegs[a].pop())
    else:
        pegs[a].append(pegs[b].pop())

    # Record current state after the move
    moves.append(f"{pegs[source]} {pegs[auxiliary]} {pegs[target]}")


def hanoi_solver_iterative(num_discs):
    """
    Solve the Tower of Hanoi puzzle iteratively.

    Args:
        num_discs (int): Number of discs in the puzzle.

    Returns:
        str: A newline-separated string representing the state of all pegs
             after each move.

    Raises:
        ValueError: If num_discs is not a positive integer.

    Time Complexity:
        O(2^n)

    Space Complexity:
        O(n) for peg storage, O(2^n) for recorded moves.
    """
    if not isinstance(num_discs, int) or num_discs <= 0:
        raise ValueError("Number of discs must be a positive integer")

    source, auxiliary, target, pegs = initialize_pegs(num_discs)

    total_moves = (2 ** num_discs) - 1

    # Store the initial state before any moves
    moves = [f"{pegs[source]} {pegs[auxiliary]} {pegs[target]}"]

    for i in range(1, total_moves + 1):
        # For odd number of discs, the smallest disc moves:
        # source → target → auxiliary → source
        if num_discs % 2 == 1:
            if i % 3 == 1:
                move_between_pegs(pegs, source, auxiliary, target, source, target, moves)
            elif i % 3 == 2:
                move_between_pegs(pegs, source, auxiliary, target, source, auxiliary, moves)
            else:
                move_between_pegs(pegs, source, auxiliary, target, auxiliary, target, moves)

        # For even number of discs, the smallest disc moves:
        # source → auxiliary → target → source
        else:
            if i % 3 == 1:
                move_between_pegs(pegs, source, auxiliary, target, source, auxiliary, moves)
            elif i % 3 == 2:
                move_between_pegs(pegs, source, auxiliary, target, source, target, moves)
            else:
                move_between_pegs(pegs, source, auxiliary, target, auxiliary, target, moves)

    return "\n".join(moves)
