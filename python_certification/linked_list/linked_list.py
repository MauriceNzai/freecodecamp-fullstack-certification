#!/usr/bin/python3
"""
LinkedList Module

This module provides a simple implementation of a singly linked list.
It supports basic operations such as:
- Checking if the list is empty
- Adding elements to the end of the list
- Removing elements from the list
- Tracking the length of the list

The implementation is intended for educational purposes and demonstrates
core data structure concepts such as nodes, pointers, and traversal.
"""


class LinkedList:
    """A singly linked list implementation."""

    
    class Node:
        """
        Represents a single node in the linked list.

        Attributes:
            element: The value stored in the node.
            next (Node | None): Reference to the next node in the list.
        """

        
        def __init__(self, element):
            """
            Initialize a new node.

            Args:
                element: The value to be stored in the node.
            """
            self.element = element
            self.next = None

    
    def __init__(self):
        """
        Initialize an empty linked list.
        """
        self.length = 0
        self.head = None

    
    def is_empty(self):
        """
        Check whether the linked list is empty.

        Returns:
            bool: True if the list is empty, False otherwise.
        """
        return self.length == 0

    
    def add(self, element):
        """
        Add an element to the end of the linked list.

        Args:
            element: The value to be added to the list.
        """
        node = self.Node(element)

        if self.is_empty():
            self.head = node
        else:
            current_node = self.head
            while current_node.next is not None:
                current_node = current_node.next
            current_node.next = node

        self.length += 1


    def remove(self, element):
        """
        Remove the first occurrence of an element from the linked list.

        Args:
            element: The value to be removed.

        Notes:
            - If the element does not exist, the list remains unchanged.
            - Only the first matching element is removed.
        """
        previous_node = None
        current_node = self.head

        while current_node is not None and current_node.element != element:
            previous_node = current_node
            current_node = current_node.next

        if current_node is None:
            return  # Element not found

        if previous_node is not None:
            previous_node.next = current_node.next
        else:
            self.head = current_node.next

        self.length -= 1

