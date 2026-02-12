#!/usr/bin/python3
"""
main.py

Demonstrates graph and tree based approaches to parentheses generation.
"""

from bfs_parentheses import generate_parentheses_bfs
from dfs_parentheses import generate_parentheses_dfs
from dp_parentheses import generate_parentheses_dp


def main():
    pairs = 3

    print("Graph Traversal (BFS):")
    print(generate_parentheses_bfs(pairs))

    print("\nTree Traversal (DFS):")
    print(generate_parentheses_dfs(pairs))

    print("\nTree Composition (DP):")
    print(generate_parentheses_dp(pairs))


if __name__ == "__main__":
    main()
