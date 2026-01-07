#!/usr/bin/python3
"""
caesar_cipher.py

A production-ready implementation of the Caesar cipher supporting
both encryption and decryption of ASCII alphabetic text.

The Caesar cipher is a simple substitution cipher in which each letter
in the plaintext is shifted a fixed number of positions down the alphabet.
Both lowercase and uppercase letters are supported, while non-alphabetic
characters are preserved as-is.

⚠️ Security Notice:
This cipher is intended for educational purposes only and should NOT be
used for securing sensitive or confidential data.
"""

def caesar(text, shift, encrypt=True):
    """
    Apply a Caesar cipher transformation to the given text.

    This function performs both encryption and decryption depending
    on the value of the `encrypt` flag. Alphabetic characters are shifted
    cyclically within the English alphabet while preserving case.
    Non-alphabetic characters are left unchanged.

    Args:
        text (str):
            The input text to be transformed.

        shift (int):
            The number of positions each letter should be shifted.
            Must be a positive integer.

        encrypt (bool, optional):
            If True (default), the function encrypts the text.
            If False, the function decrypts the text by reversing the shift.

    Returns:
        str:
            The transformed text after applying the Caesar cipher.

    Raises:
        TypeError:
            If `shift` is not an integer.

        ValueError:
            If `shift` is less than 1.

    Examples:
        >>> caesar("abc", 3)
        'def'

        >>> caesar("Def", 3, encrypt=False)
        'Abc'

        >>> caesar("Hello, World!", 5)
        'Mjqqt, Btwqi!'
    """
    if not isinstance(shift, int):
        return 'Shift must be an integer value.'
    if shift < 1:
        return 'Shift must be a positive integer.'
    if not encrypt:
        shift = - shift

    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    
    low_bound = alphabet + alphabet.upper()
    high_bound = shifted_alphabet + shifted_alphabet.upper()

    translation_table = str.maketrans(low_bound, high_bound)
    
    return text.translate(translation_table)


def encrypt(text, shift):
    """
    Encrypt text using the Caesar cipher.

    This is a convenience wrapper around the `caesar` function that
    explicitly performs encryption for improved readability and intent.

    Args:
        text (str):
            The plaintext message to encrypt.

        shift (int):
            The number of positions to shift each letter.

    Returns:
        str:
            The encrypted ciphertext.

    Example:
        >>> encrypt("Attack at dawn", 3)
        'Dwwdfn dw gdzq'
    """
    return caesar(text, shift)


def decrypt(text, shift):
    """
    Decrypt text that was encrypted using the Caesar cipher.

    This function reverses the Caesar cipher transformation using
    the same shift value that was used for encryption.

    Args:
        text (str):
            The encrypted ciphertext.

        shift (int):
            The number of positions originally used to encrypt the text.

    Returns:
        str:
            The decrypted plaintext.

    Example:
        >>> decrypt("Dwwdfn dw gdzq", 3)
        'Attack at dawn'
    """
    return caesar(text, shift, encrypt=False)


if __name__ == '__main__':
    encrypted_text = encrypt('freeCodeCamp', 3)
    print(encrypted_text)

    encrypted_text = "Pbhentr vf sbhaq va hayvxryl cynprf."
    decrypted_text = decrypt(encrypted_text, 13)
    print(decrypted_text)
