#!/usr/bin/env python3
"""
Email Simulator Module

This module simulates a simple email system using object-oriented
programming concepts. It supports sending, receiving, reading,
listing, and deleting emails between users.

Classes:
    Email  - Represents an individual email message
    Inbox  - Manages received emails for a user
    User   - Represents a user who can send and receive emails

Usage:
    Run this module directly to see a basic demonstration.
"""

import datetime as dt


class Email:
    """
    Represents an email message.

    Attributes:
        sender (User): The user who sent the email
        receiver (User): The user who receives the email
        subject (str): Email subject
        body (str): Email content
        timestamp (datetime): Time the email was created
        read (bool): Read status of the email
    """

    def __init__(self, sender, receiver, subject, body):
        """
        Initialize a new Email instance.

        Args:
            sender (User): Sender of the email
            receiver (User): Recipient of the email
            subject (str): Email subject
            body (str): Email body
        """
        self.sender = sender
        self.receiver = receiver
        self.subject = subject
        self.body = body
        self.timestamp = dt.datetime.now()
        self.read = False

    def mark_as_read(self):
        """Mark the email as read."""
        self.read = True

    def display_full_email(self):
        """
        Display the full email contents and mark it as read.
        """
        self.mark_as_read()
        print('\n--- Email ---')
        print(f'From: {self.sender.name}')
        print(f'To: {self.receiver.name}')
        print(f'Subject: {self.subject}')
        print(f"Received: {self.timestamp.strftime('%Y-%m-%d %H:%M')}")
        print(f'Body: {self.body}')
        print('------------\n')

    def __str__(self):
        """
        Return a short summary representation of the email.
        """
        status = 'Read' if self.read else 'Unread'
        return (
            f"[{status}] From: {self.sender.name} | "
            f"Subject: {self.subject} | "
            f"Time: {self.timestamp.strftime('%Y-%m-%d %H:%M')}"
        )


class Inbox:
    """
    Represents a user's inbox.

    Manages receiving, listing, reading, and deleting emails.
    """

    def __init__(self):
        """Initialize an empty inbox."""
        self.emails = []

    def receive_email(self, email):
        """
        Add a new email to the inbox.

        Args:
            email (Email): Email to be added
        """
        self.emails.append(email)

    def list_emails(self):
        """Display a list of all emails in the inbox."""
        if not self.emails:
            print('Your inbox is empty.\n')
            return

        print('\nYour Emails:')
        for index, email in enumerate(self.emails, start=1):
            print(f'{index}. {email}')

    def read_email(self, index):
        """
        Read and display an email by its index.

        Args:
            index (int): 1-based index of the email
        """
        if not self.emails:
            print('Inbox is empty.\n')
            return

        actual_index = index - 1
        if actual_index < 0 or actual_index >= len(self.emails):
            print('Invalid email number.\n')
            return

        self.emails[actual_index].display_full_email()

    def delete_email(self, index):
        """
        Delete an email from the inbox.

        Args:
            index (int): 1-based index of the email
        """
        if not self.emails:
            print('Inbox is empty.\n')
            return

        actual_index = index - 1
        if actual_index < 0 or actual_index >= len(self.emails):
            print('Invalid email number.\n')
            return

        del self.emails[actual_index]
        print('Email deleted.\n')


class User:
    """
    Represents a user in the email system.

    Attributes:
        name (str): User's name
        inbox (Inbox): User's inbox
    """

    def __init__(self, name):
        """
        Initialize a new user.

        Args:
            name (str): Name of the user
        """
        self.name = name
        self.inbox = Inbox()

    def send_email(self, receiver, subject, body):
        """
        Send an email to another user.

        Args:
            receiver (User): Recipient of the email
            subject (str): Email subject
            body (str): Email body
        """
        email = Email(sender=self, receiver=receiver, subject=subject, body=body)
        receiver.inbox.receive_email(email)
        print(f'Email sent from {self.name} to {receiver.name}!\n')

    def check_inbox(self):
        """Display the user's inbox."""
        print(f"\n{self.name}'s Inbox:")
        self.inbox.list_emails()

    def read_email(self, index):
        """
        Read an email from the inbox.

        Args:
            index (int): 1-based email index
        """
        self.inbox.read_email(index)

    def delete_email(self, index):
        """
        Delete an email from the inbox.

        Args:
            index (int): 1-based email index
        """
        self.inbox.delete_email(index)


def main():
    """Demonstrate basic usage of the email simulator."""
    tory = User('Tory')
    ramy = User('Ramy')

    tory.send_email(ramy, 'Hello', 'Hi Ramy, just saying hello!')
    ramy.send_email(tory, 'Re: Hello', 'Hi Tory, hope you are fine.')

    ramy.check_inbox()
    ramy.read_email(1)
    ramy.delete_email(1)
    ramy.check_inbox()


if __name__ == '__main__':
    main()
