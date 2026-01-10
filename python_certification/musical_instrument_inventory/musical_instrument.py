#!/usr/bin/python3

"""
musical_instrument.py

This module defines a simple object-oriented representation of musical
instruments using a single class, `MusicalInstrument`.

The `MusicalInstrument` class models basic properties and behaviors common
to musical instruments, including:
    - The instrument's name
    - The family or type it belongs to (e.g., woodwind, brass)
    - The ability to "play" the instrument
    - Providing a descriptive fact about the instrument

This module is intended for educational purposes and demonstrates:
    - Class and object creation in Python
    - Use of instance attributes
    - Method definitions and string formatting
    - Basic object-oriented design principles

Example:
    >>> instrument = MusicalInstrument("Oboe", "woodwind")
    >>> instrument.play()
    The Oboe is fun to play!
    >>> instrument.get_fact()
    'The Oboe is part of the woodwind family of instruments.'
"""


class MusicalInstrument:
    """Represents a musical instrument and its family."""

    def __init__(self, name, instrument_type):
        """
        Initialize a MusicalInstrument instance.

        :param name: Name of the instrument
        :param instrument_type: Instrument family (e.g. woodwind, brass)
        """
        if not isinstance(name, str) or not name:
            raise ValueError("Instrument name must be a non-empty string.")
        if not isinstance(instrument_type, str) or not instrument_type:
            raise ValueError("Instrument type must be a non-empty string.")
        self.name = name
        self.instrument_type = instrument_type

    def play(self):
        """Print a message indicating the instrument is being played."""
        return f'The {self.name} is fun to play!'

    def get_fact(self):
        """Return a fact about the instrument family."""
        return (
            f'The {self.name} is part of the {self.instrument_type}'
            'family of instruments.'
        )

if __name__ == '__main__':
    instrument_1 = MusicalInstrument('Oboe', 'woodwind')
    instrument_2 = MusicalInstrument('Trumpet', 'brass')

    print(instrument_1.play())
    print(instrument_1.get_fact())

    print(instrument_2.play())
    print(instrument_2.get_fact())
