#!/usr/bin/python3
"""
bfs_parentheses.py

Generate valid parentheses using Breadth-First Search (BFS).
This models the problem as a GRAPH traversal where:
- Each node is a partial parentheses string
- Each edge is adding '(' or ')'
- BFS explores the graph level by level
"""

from collections import deque
from typing import List
from validators import validate_pairs


def generate_parentheses_bfs(pairs: int) -> List[str]:
    """
    Generate valid parentheses using Breadth-First Search (Graph traversal).

    Algorithm:
    - Start from an empty node ""
    - Expand by adding '(' or ')'
    - Enqueue valid transitions
    - Stop when node length == 2 * pairs

    Pros:
    - Easy to visualize as a graph
    - Level-order exploration

    Cons:
    - Higher memory usage than DFS

    :param pairs: Number of parentheses pairs
    :return: List of valid parentheses strings
    """
    validate_pairs(pairs)

    queue = deque([("", 0, 0)])
    result = []

    while queue:
        current, opens_used, closes_used = queue.popleft()

        if len(current) == 2 * pairs:
            result.append(current)
            continue

        if opens_used < pairs:
            queue.append((current + "(", opens_used + 1, closes_used))

        if closes_used < opens_used:
            queue.append((current + ")", opens_used, closes_used + 1))

    return result
