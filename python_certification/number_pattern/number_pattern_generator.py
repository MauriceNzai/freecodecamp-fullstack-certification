#!/usr/bin/python3
"""
Number Pattern Module.

This module provides a utility function to generate a simple numeric
pattern as a space-separated string. The pattern starts from 1 and
increments up to a given positive integer value.

The module also includes a basic execution block for direct testing.
"""


def number_pattern(n):
    """
    Generate a space-separated numeric pattern from 1 to n.

    The function validates that the input is a positive integer.
    If validation fails, a descriptive error message is returned.

    Parameters
    ----------
    n : int
        A positive integer indicating the upper limit of the pattern.

    Returns
    -------
    str
        A string containing numbers from 1 to n separated by spaces,
        or an error message if the input is invalid.

    Example
    -------
    >>> number_pattern(5)
    '1 2 3 4 5'
    """
    if not isinstance(n, int):
        return "Argument must be an integer value."
    if n < 1:
        return "Argument must be an integer greater than 0."

    numbers = ""
    for num in range(1, n + 1):
        numbers += str(num) + " "

    return numbers.rstrip()


if __name__ == "__main__":
    res = number_pattern(5)
    print(res)
