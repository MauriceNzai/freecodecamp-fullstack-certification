#!/usr/bin/python3
from dijkstra_algorithm import shortest_path, INF

adj_matrix = [
    [0, 5, 3, INF, 11, INF],
    [5, 0, 1, INF, INF, 2],
    [3, 1, 0, 1, 5, INF],
    [INF, INF, 1, 0, 9, 3],
    [11, INF, 5, 9, 0, INF],
    [INF, 2, INF, 3, INF, 0],
]


def print_paths(start, distances, paths, target=None):
    targets = [target] if target is not None else range(len(distances))

    for node in targets:
        if node == start:
            continue
        if distances[node] == INF:
            print(f"{start} → {node}: No path")
        else:
            path_str = " -> ".join(map(str, paths[node]))
            print(f"{start} → {node} | Distance: {distances[node]} | Path: {path_str}")


if __name__ == "__main__":
    start_node = 0
    target_node = 5

    distances, paths = shortest_path(adj_matrix, start_node, target_node)
    print_paths(start_node, distances, paths, target_node)
