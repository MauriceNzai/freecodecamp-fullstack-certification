#!/usr/bin/env python3
"""
hanoi_recursive.py
------------------

A recursive implementation of the Tower of Hanoi problem.

This module solves the Tower of Hanoi puzzle using recursion:
- Move (n - 1) discs from source to auxiliary
- Move the largest disc from source to target
- Move (n - 1) discs from auxiliary to target

This approach is more intuitive and mirrors the mathematical
definition of the problem, but it uses the call stack and may
cause recursion depth issues for large n.
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
        source: list(range(num_discs, 0, -1)),
        auxiliary: [],
        target: []
    }

    return source, auxiliary, target, pegs


def record_state(pegs, source, auxiliary, target, moves):
    """
    Record the current state of all pegs.

    Args:
        pegs (dict): Current peg states.
        source (str): Source peg label.
        auxiliary (str): Auxiliary peg label.
        target (str): Target peg label.
        moves (list): List storing all peg states.
    """
    moves.append(f"{pegs[source]} {pegs[auxiliary]} {pegs[target]}")


def move_single_disc(pegs, from_peg, to_peg):
    """
    Move one disc from one peg to another.

    Args:
        pegs (dict): Current peg states.
        from_peg (str): Peg to move the disc from.
        to_peg (str): Peg to move the disc to.
    """
    pegs[to_peg].append(pegs[from_peg].pop())


def solve_hanoi_recursive(n, pegs, source, auxiliary, target, moves):
    """
    Recursive helper function that performs the Hanoi moves.

    Args:
        n (int): Number of discs to move.
        pegs (dict): Current peg states.
        source (str): Source peg label.
        auxiliary (str): Auxiliary peg label.
        target (str): Target peg label.
        moves (list): List storing peg states after each move.
    """
    # Base case: nothing to move
    if n == 0:
        return

    # Move n-1 discs out of the way (source -> auxiliary)
    solve_hanoi_recursive(n - 1, pegs, source, target, auxiliary, moves)

    # Move the largest disc to the target peg
    move_single_disc(pegs, source, target)
    record_state(pegs, source, auxiliary, target, moves)

    # Move the n-1 discs onto the largest disc (auxiliary -> target)
    solve_hanoi_recursive(n - 1, pegs, auxiliary, source, target, moves)


def hanoi_solver_recursive(num_discs):
    """
    Solve the Tower of Hanoi puzzle using recursion.

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
        O(n) recursion stack, O(2^n) recorded moves.
    """
    if not isinstance(num_discs, int) or num_discs <= 0:
        raise ValueError("Number of discs must be a positive integer")

    source, auxiliary, target, pegs = initialize_pegs(num_discs)

    moves = []
    record_state(pegs, source, auxiliary, target, moves)

    solve_hanoi_recursive(num_discs, pegs, source, auxiliary, target, moves)

    return "\n".join(moves)
