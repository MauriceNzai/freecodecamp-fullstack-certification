#!/usr/bin/python3

def validate_isbn(isbn: str, length: int) -> bool:
    """
    Validate an ISBN-10 or ISBN-13 code.

    Args:
        isbn (str): The ISBN string to validate.
        length (int): Expected ISBN length (10 or 13).

    Returns:
        bool: True if ISBN is valid, False otherwise.
    """
    if len(isbn) != length:
        # print(f'ISBN-{length} code should be {length} digits long.')
        return False
    if not has_valid_characters(isbn, length):
        return False

    main_digits = isbn[:-1]
    given_check_digit = isbn[-1]

    main_digits_list = [int(digit) for digit in main_digits]
    
    # Calculate the check digit from other digits
    expected_check_digit = (
             calculate_check_digit_10(main_digits_list)
             if length == 10
             else calculate_check_digit_13(main_digits_list)
    )
    
    return given_check_digit == expected_check_digit


def calculate_check_digit_10(digits: list[int]) -> str:
    """
    Calculate ISBN-10 check digit.

    Args:
        digits (list[int]): First 9 ISBN digits.

    Returns:
        str: Check digit (0–9 or 'X').
    """
    # Multiply each of the first 9 digits by its corresponding
    # weight (10 to 2) and sum up the results
    total = sum(digit * (10 - index) for index, digit in enumerate(digits))
    
    # Find the remainder of dividing the sum by 11, then subtract it from 11
    reminder = 11 - total % 11
    
    # The reminder can range from 1 to 11.
    # If the result is 11, use 0.
    # If the result is 10, use upper case X.
    # Use the value as it is for other numbers.
    if result == 11:
        return '0'
    elif result == 10:
        return 'X'
     
    return str(reminder)


def calculate_check_digit_13(digits: list[int]) -> str:
    """
    Calculate ISBN-13 check digit.

    Args:
        digits (list[int]): First 12 ISBN digits.

    Returns:
        str: Check digit (0–9).
    """
    # Multiply each of the first 12 digits by 1 and 3
    # alternately (starting with 1), and sum up the results
    total = sum(
            digit * (1 if digit % 2 == 0 else 3)
            for index, digit in enumerate(digits)
    )

    # Find the remainder of dividing the sum by 10, then subtract it from 10
    reminder = 10 - (total % 10)
    
    # The calculation result can range from 1 to 10.
    # If the result is 10, use 0.
    # Use the value as it is for other numbers.
    
    return "0" if reminder == 10 else str(reminder)


def has_valid_characters(isbn: str, length: int) -> bool:
    """
    Check if ISBN contains valid characters.

    Args:
        isbn (str): ISBN string.
        length (int): ISBN length.

    Returns:
        bool: True if characters are valid.
    """
    if length == 10:
        return all(c.isdigit() for c in isbn[:-1]) and isbn[-1] in "0123456789X"
    return isbn.isdigit()


def main():
    """
    Entry point for ISBN validation.
    """
    try:
        user_input = input("Enter ISBN and length (e.g. 9780306406157,13): ")
        isbn, length = user_input.replace(" ", "").split(",")
        length = int(length)
    except ValueError:
        print("Invalid input format.")
        return

    if length not in (10, 13):
        print("Length must be 10 or 13.")
        return

    if validate_isbn(isbn, length):
        print("Valid ISBN code.")
    else:
        print("Invalid ISBN code.")


if __name__ == '__main__':
    main()
