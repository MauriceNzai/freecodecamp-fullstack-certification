#!/usr/bin/python3
"""
HashTable Module

This module provides a simple implementation of a hash table using
separate chaining to handle collisions. Keys are hashed using a
basic character-sum hash function, and values are stored in buckets
implemented as dictionaries.

This implementation is intended for educational purposes to
demonstrate core hash table concepts such as hashing, collision
handling, and CRUD-like operations.
"""


class HashTable:
    """
    A simple hash table implementation using separate chaining.
    """

    def __init__(self):
        """
        Initialize the hash table with an empty collection.
        Each hash value maps to a bucket (dictionary).
        """
        self.collection = {}

    def hash(self, key: str) -> int:
        """
        Generate a hash value for a given string key.

        Args:
            key (str): The key to hash.

        Returns:
            int: The computed hash value.
        """
        return sum(ord(char) for char in key)

    def add(self, key, value) -> None:
        """
        Add or update a key-value pair in the hash table.

        Args:
            key (str): The key to store.
            value: The value associated with the key.
        """
        hashed_key = self.hash(key)

        if hashed_key not in self.collection:
            self.collection[hashed_key] = {}

        self.collection[hashed_key][key] = value

    def lookup(self, key):
        """
        Retrieve the value associated with a given key.

        Args:
            key (str): The key to look up.

        Returns:
            The value if the key exists, otherwise None.
        """
        hashed_key = self.hash(key)
        bucket = self.collection.get(hashed_key)

        if bucket is None:
            return None

        return bucket.get(key)

    def remove(self, key) -> None:
        """
        Remove a key-value pair from the hash table.

        Args:
            key (str): The key to remove.
        """
        hashed_key = self.hash(key)
        bucket = self.collection.get(hashed_key)

        if bucket and key in bucket:
            del bucket[key]

            # Remove empty bucket to keep table clean
            if not bucket:
                del self.collection[hashed_key]
