#!/usr/bin/python3

#!/usr/bin/python3
"""
PIN Code Extractor Module.

This module provides functionality to extract numeric PIN codes from poems
based on a positional word-length rule.

For each poem:
- The poem is split into lines.
- For each line at index N, the word at position N is selected.
- The length of that word is appended to form a PIN digit.
- If a line does not have a word at position N, the digit '0' is used.

The result is a list of PIN codes (as strings), one per poem.
"""


def pin_extractor(poems):
    """
    Generate secret PIN codes from a list of poems.

    Each PIN code is constructed by iterating over the lines of a poem.
    For a line at index N:
    - If the line contains at least N+1 words, the length of the word at
      position N is appended to the PIN.
    - Otherwise, '0' is appended.

    Parameters
    ----------
    poems : list of str
        A list where each element is a poem represented as a newline-separated
        string.

    Returns
    -------
    list of str
        A list of PIN codes corresponding to the input poems. Each PIN is
        represented as a string of digits.

    Example
    -------
    >>> poems = ["One two three\\nFour five six"]
    >>> pin_extractor(poems)
    ['35']
    """
    secret_codes = []

    for poem in poems:
        secret_code = ''
        lines = poem.split('\n')

        for line_number, line in enumerate(lines):
            words = line.split()
            if line_number < len(words):
                secret_code += str(len(words[line_number]))
            else:
                secret_code += '0'

        secret_codes.append(secret_code)

    return secret_codes


if __name__ == "__main__":
    poem = "Stars and the moon\nshine in the sky\nwhite and bright\nuntil the end of the night"

    poem2 = 'The grass is green\nhere and there\nhoping for rain\nbefore it turns yellow'

    poem3 = 'There\nonce\nwas\na\ndragon'

    poems = [poem, poem2, poem3]

    pin_codes = pin_extractor(poems)
    print(pin_codes)
