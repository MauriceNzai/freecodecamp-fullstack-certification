#!/usr/bin/python3
"""
dfs_parentheses.py

Generate valid parentheses using Depth-First Search (DFS).
This models the problem as a TREE traversal where:
- Each node is a partial parentheses string
- Left child = add '('
- Right child = add ')'
"""

from typing import List
from validators import validate_pairs


def generate_parentheses_dfs(pairs: int) -> List[str]:
    """
    Generate valid parentheses using DFS (Tree traversal / Backtracking).

    Algorithm:
    - Recursively explore left branch "("
    - Recursively explore right branch ")"
    - Prune invalid branches early

    Pros:
    - Memory efficient
    - Natural tree traversal model
    - Fast in practice

    Cons:
    - Recursive depth grows with input size

    :param pairs: Number of parentheses pairs
    :return: List of valid parentheses strings
    """
    validate_pairs(pairs)
    result = []

    def backtrack(current: str, opens_used: int, closes_used: int) -> None:
        """
        Recursively build valid parentheses.

        :param current: Current parentheses string
        :param opens_used: Number of '(' used
        :param closes_used: Number of ')' used
        """
        if len(current) == 2 * pairs:
            result.append(current)
            return

        if opens_used < pairs:
            backtrack(current + "(", opens_used + 1, closes_used)

        if closes_used < opens_used:
            backtrack(current + ")", opens_used, closes_used + 1)

    backtrack("", 0, 0)
    return result
