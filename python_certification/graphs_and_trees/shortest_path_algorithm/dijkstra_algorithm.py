#!/usr/bin/python3
"""
dijkstra_algorithm.py

Implements Dijkstra's Shortest Path Algorithm using an adjacency matrix.

This module provides a function to compute the shortest path distances
from a start node to all other nodes (or a specific target node) in a
weighted graph with non-negative weights.

Limitations:
- Does NOT support negative edge weights.
- Graph must be represented as a square adjacency matrix.
"""

INF = float('inf')


def validate_adjacency_matrix(matrix):
    """
    Validate that the adjacency matrix is square and contains valid weights.

    Args:
        matrix (list[list[float]]): Graph represented as adjacency matrix.

    Raises:
        ValueError: If matrix is empty, non-square, or contains negative weights.
    """
    if not matrix or not isinstance(matrix, list):
        raise ValueError("Adjacency matrix must be a non-empty list of lists")

    size = len(matrix)
    for row in matrix:
        if len(row) != size:
            raise ValueError("Adjacency matrix must be square")
        for weight in row:
            if weight < 0:
                raise ValueError("Dijkstra's algorithm does not support negative weights")


def shortest_path(matrix, start_node, target_node=None):
    """
    Compute shortest paths using Dijkstra's algorithm (adjacency matrix version).

    Args:
        matrix (list[list[float]]): Weighted graph as adjacency matrix.
        start_node (int): Index of the starting node.
        target_node (int | None): Optional target node.

    Returns:
        tuple:
            - distances (list[float]): Shortest distances from start_node.
            - paths (list[list[int]]): Paths to each node.

    Raises:
        ValueError: If inputs are invalid.
    """
    validate_adjacency_matrix(matrix)

    n = len(matrix)

    if not (0 <= start_node < n):
        raise ValueError("start_node is out of range")

    if target_node is not None and not (0 <= target_node < n):
        raise ValueError("target_node is out of range")

    distances = [INF] * n
    distances[start_node] = 0

    paths = [[] for _ in range(n)]
    paths[start_node] = [start_node]

    visited = [False] * n

    for _ in range(n):
        min_distance = INF
        current = -1

        # Pick the nearest unvisited node
        for node in range(n):
            if not visited[node] and distances[node] < min_distance:
                min_distance = distances[node]
                current = node

        if current == -1:
            break

        visited[current] = True

        # Relax edges
        for neighbor in range(n):
            weight = matrix[current][neighbor]
            if weight != INF and not visited[neighbor]:
                new_distance = distances[current] + weight
                if new_distance < distances[neighbor]:
                    distances[neighbor] = new_distance
                    paths[neighbor] = paths[current] + [neighbor]

    return distances, paths
