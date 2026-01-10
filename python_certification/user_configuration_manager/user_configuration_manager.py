#!/usr/bin/python3
"""
User Settings Management Module

This module provides utility functions for managing user settings
stored in a dictionary. It supports adding, updating, deleting,
and viewing settings while ensuring case-insensitive handling
of keys and values.

Functions:
    - add_setting(settings, tup)
    - update_setting(settings, tup)
    - delete_setting(settings, key)
    - view_settings(settings)
"""


def add_setting(settings: dict, setting: tuple) -> str:
    """
    Add a new setting to the settings dictionary.

    Args:
        settings (dict): Dictionary containing user settings.
        setting (tuple): A (key, value) pair to be added.

    Returns:
        str: Status message indicating success or failure.
    """
    key, value = (item.lower() for item in setting)

    if key in settings:
        return (
            f"Setting '{key}' already exists! "
            "Cannot add a new setting with this name."
        )

    settings[key] = value
    return f"Setting '{key}' added with value '{value}' successfully!"


def update_setting(settings: dict, setting: tuple) -> str:
    """
    Update an existing setting in the settings dictionary.

    Args:
        settings (dict): Dictionary containing user settings.
        setting (tuple): A (key, value) pair to update.

    Returns:
        str: Status message indicating success or failure.
    """
    key, value = (item.lower() for item in setting)

    if key not in settings:
        return (
            f"Setting '{key}' does not exist! "
            "Cannot update a non-existing setting."
        )

    settings[key] = value
    return f"Setting '{key}' updated to '{value}' successfully!"


def delete_setting(settings: dict, key: str) -> str:
    """
    Delete a setting from the settings dictionary.

    Args:
        settings (dict): Dictionary containing user settings.
        key (str): Setting key to delete.

    Returns:
        str: Status message indicating success or failure.
    """
    key = key.lower()

    if key not in settings:
        return "Setting not found!"

    del settings[key]
    return f"Setting '{key}' deleted successfully!"


def view_settings(settings: dict) -> str:
    """
    Display all user settings in a readable format.

    Args:
        settings (dict): Dictionary containing user settings.

    Returns:
        str: Formatted string of settings or a message if empty.
    """
    if not settings:
        return "No settings available."

    lines = ["Current User Settings:"]
    for key, value in settings.items():
        lines.append(f"{key.capitalize()}: {value}")

    return "\n".join(lines)



if __name__ == "__main__":
    # Test dictionary
    user_settings = {
        "theme": "dark",
        "notifications": "enabled",
        "volume": "high"
    }

    # Test add_setting
    print(add_setting(user_settings, ("Language", "English")))
    print(add_setting(user_settings, ("Theme", "Light")))

    # Test update_setting
    print(update_setting(user_settings, ("Volume", "Medium")))
    print(update_setting(user_settings, ("Brightness", "High")))

    # Test delete_setting
    print(delete_setting(user_settings, "Notifications"))
    print(delete_setting(user_settings, "Timezone"))

    # Test view_settings
    print(view_settings(user_settings))
