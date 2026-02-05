#!/usr/bin/python3

from discount_calculator import (
    apply_percentage_discount,
    apply_fixed_discount,
    apply_capped_discount
)

def main():
    price = 100

    print("Percentage discount (20%):")
    print(apply_percentage_discount(price, 20))  # 80.0

    print("\nFixed discount (15):")
    print(apply_fixed_discount(price, 15))  # 85.0

    print("\nCapped discount (70% capped at 50%):")
    print(apply_capped_discount(price, 70, 50))  # 50.0

if __name__ == "__main__":
    main()
