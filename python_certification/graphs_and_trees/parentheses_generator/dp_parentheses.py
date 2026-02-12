#!/usr/bin/python3
"""
dp_parentheses.py

Generate valid parentheses using Dynamic Programming.
This models the problem as recursive TREE composition:
Each valid structure is built from smaller valid subtrees.
"""

from typing import List
from validators import validate_pairs


def generate_parentheses_dp(pairs: int) -> List[str]:
    """
    Generate valid parentheses using Dynamic Programming.

    Recurrence:
        dp[n] = "(" + dp[i] + ")" + dp[n - i - 1]

    Pros:
    - Elegant mathematical formulation
    - Avoids recomputation

    Cons:
    - Harder to understand initially
    - Uses extra memory for DP table

    :param pairs: Number of parentheses pairs
    :return: List of valid parentheses strings
    """
    validate_pairs(pairs)

    dp = [[] for _ in range(pairs + 1)]
    dp[0] = [""]

    for n in range(1, pairs + 1):
        result = []
        for i in range(n):
            for left in dp[i]:
                for right in dp[n - i - 1]:
                    result.append(f"({left}){right}")
        dp[n] = result

    return dp[pairs]
