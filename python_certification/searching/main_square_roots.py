#!/usr/bin/python3

from square_roots import sqrt_bisection, sqrt_newton, sqrt_builtin

def main():
    number = 25

    print("Bisection Method:")
    print(sqrt_bisection(number))

    print("\nNewton-Raphson Method:")
    print(sqrt_newton(number))

    print("\nBuilt-in Method:")
    print(sqrt_builtin(number))


if __name__ == "__main__":
    main()
