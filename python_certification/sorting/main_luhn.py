#!/usr/bin/python3
from luhn_validator import verify_card_number

def main():
    samples = [
        "234-566 980-864",
        "453914889",
        "4111-1111-1111-1111",
        "1234 5678 9012 3456",
        "",
        "abc"
    ]

    for card in samples:
        try:
            is_valid = verify_card_number(card)
            print(f"{card!r} -> {'VALID' if is_valid else 'INVALID'}")
        except ValueError as err:
            print(f"{card!r} -> ERROR: {err}")

if __name__ == "__main__":
    main()
