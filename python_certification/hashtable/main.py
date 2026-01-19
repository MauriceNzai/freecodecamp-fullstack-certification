#!/usr/bin/python3
"""
Main module demonstrating usage of the HashTable class.
"""

from hashtable import HashTable


def main():
    table = HashTable()

    print("Hash value for 'read':", table.hash("read"))

    table.add("golf", "sport")
    table.add("read", "activity")
    table.add("code", "programming")

    print("Lookup 'golf':", table.lookup("golf"))
    print("Lookup 'read':", table.lookup("read"))
    print("Lookup 'code':", table.lookup("code"))

    table.remove("golf")
    print("Lookup 'golf' after removal:", table.lookup("golf"))


if __name__ == "__main__":
    main()
