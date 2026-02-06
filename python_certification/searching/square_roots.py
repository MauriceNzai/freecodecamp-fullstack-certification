#!/usr/bin/python3
"""
square_roots.py

A module providing multiple algorithms for computing square roots:
- Bisection Method
- Newton-Raphson Method
- Built-in Power Method
"""

def validate_input(n):
    if not isinstance(n, (int, float)):
        raise TypeError("Input must be a number")
    if n < 0:
        raise ValueError("Square root of negative number is not defined")


def sqrt_bisection(n, tolerance=1e-6, max_iterations=1000):
    """
    Compute square root using the Bisection Method.

    Pros:
    - Guaranteed convergence
    - Simple and stable

    Cons:
    - Slower than Newton-Raphson
    """
    validate_input(n)

    if n in (0, 1):
        return float(n)

    low, high = 0.0, max(1.0, n)

    for _ in range(max_iterations):
        mid = (low + high) / 2
        error = abs(mid * mid - n)

        if error <= tolerance:
            return mid

        if mid * mid < n:
            low = mid
        else:
            high = mid

    raise RuntimeError("Bisection method failed to converge")


def sqrt_newton(n, tolerance=1e-6, max_iterations=1000):
    """
    Compute square root using Newton-Raphson Method.

    Pros:
    - Very fast convergence

    Cons:
    - Needs a reasonable initial guess
    """
    validate_input(n)

    if n in (0, 1):
        return float(n)

    x = n / 2.0

    for _ in range(max_iterations):
        next_x = (x + n / x) / 2
        if abs(next_x - x) <= tolerance:
            return next_x
        x = next_x

    raise RuntimeError("Newton-Raphson method failed to converge")


def sqrt_builtin(n):
    """
    Compute square root using Python's built-in power operator.

    Pros:
    - Fastest
    - Clean

    Cons:
    - No algorithmic insight
    """
    validate_input(n)
    return n ** 0.5
