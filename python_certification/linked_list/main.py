#!/usr/bin/python3
"""
Demo script for the LinkedList module.
"""

from linked_list import LinkedList


def main():
    my_list = LinkedList()

    print("Is list empty?", my_list.is_empty())

    my_list.add(1)
    my_list.add(2)

    print("Is list empty?", my_list.is_empty())
    print("List length:", my_list.length)

    my_list.remove(1)
    print("List length after removing 1:", my_list.length)


if __name__ == "__main__":
    main()
