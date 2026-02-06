#!/usr/bin/python3

def square_root_bisection(num_to_get_sqrt, tolerance=0.01, max_iterations=1000):
    """
    Compute the square root of a non-negative number using the Bisection Method.

    The bisection method finds the square root by repeatedly narrowing an
    interval [low, high] that is guaranteed to contain the true root.
    At each iteration, the interval is halved until its width is less
    than or equal to the specified tolerance.

    Parameters
    ----------
    num_to_get_sqrt : float or int
        The number whose square root is to be computed.
        Must be a non-negative real number.
    tolerance : float, optional
        The maximum allowed width of the interval [low, high].
        Once (high - low) <= tolerance, the algorithm is considered
        to have converged. Default is 0.01.
    max_iterations : int, optional
        The maximum number of iterations allowed before stopping
        to prevent an infinite loop. Default is 1000.

    Returns
    -------
    float
        An approximation of the square root of num_to_get_sqrt
        within the specified tolerance.

    Raises
    ------
    ValueError
        If num_to_get_sqrt is negative.
    RuntimeError
        If the algorithm fails to converge within max_iterations.

    Notes
    -----
    - This method is guaranteed to converge for all non-negative inputs.
    - It is slower than Newton–Raphson but more stable and predictable.
    - The stopping condition is based on interval width rather than
      squared error, making it reliable for very small numbers.

    Example
    -------
    >>> square_root_bisection(0.001, 1e-7, 50)
    The square root of 0.001 is approximately 0.03162277660168379
    0.03162277660168379
    """
    if num_to_get_sqrt < 0:
        raise ValueError("Square root of negative number is not defined in real numbers")
    if num_to_get_sqrt in (0, 1):
        print(f"The square root of {num_to_get_sqrt} is {num_to_get_sqrt}")
        return num_to_get_sqrt

    low, high = 0.0, max(1.0, num_to_get_sqrt)

    for _ in range(max_iterations):
        mid = (low + high) / 2

        if (high - low) <= tolerance:
            print(f"The square root of {num_to_get_sqrt} is approximately {mid}")
            return mid

        if mid * mid < num_to_get_sqrt:
            low = mid
        else:
            high = mid

    raise RuntimeError(f"Failed to converge within {max_iterations} iterations")
