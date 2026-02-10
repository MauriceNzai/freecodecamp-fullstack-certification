#!/usr/bin/env python3
from hanoi_iterative import hanoi_solver_iterative
from hanoi_recursive import hanoi_solver_recursive


def main():
    num_discs = 3

    print("=== Iterative Tower of Hanoi ===")
    print(hanoi_solver_iterative(num_discs))

    print("\n=== Recursive Tower of Hanoi ===")
    print(hanoi_solver_recursive(num_discs))


if __name__ == "__main__":
    main()
