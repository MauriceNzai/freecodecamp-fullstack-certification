#!/usr/bin/python3
"""
salary_tracker.py

This module defines an Employee class used to track employee details
such as name, level, and salary. It enforces business rules around
valid employee levels, minimum salaries per level, and promotion logic.

Key rules enforced:
- Employee level must be valid and predefined.
- Salary cannot be lower than the minimum salary for the employee's level.
- Employees cannot be demoted to a lower level.
- Promotions automatically adjust salary to the new level's base salary.
"""


class Employee:
    """
    Represents an employee with a name, level, and salary.

    The Employee class uses properties to control access to attributes
    and enforce validation rules when updating employee data.
    """

    _base_salaries = {
        'trainee': 1000,
        'junior': 2000,
        'mid-level': 3000,
        'senior': 4000,
    }

    def __init__(self, name, level):
        """
        Initialize a new Employee instance.

        Args:
            name (str): The employee's full name.
            level (str): The employee's level. Must be one of the
                         predefined levels in `_base_salaries`.

        Raises:
            TypeError: If name or level is not a string.
            ValueError: If level is not a valid predefined level.
        """
        if not (isinstance(name, str) and isinstance(level, str)):
            raise TypeError("'name' and 'level' attribute must be of type 'str'.")
        if level not in Employee._base_salaries:
            raise ValueError(f"Invalid value '{level}' for 'level' attribute.")

        self._name = name
        self._level = level
        self._salary = Employee._base_salaries[level]

    def __str__(self):
        """
        Return a user-friendly string representation of the employee.
        """
        return f'{self.name}: {self.level}'

    def __repr__(self):
        """
        Return an unambiguous string representation of the employee,
        suitable for debugging and object reconstruction.
        """
        return f"Employee('{self.name}', '{self.level}')"

    @property
    def name(self):
        """
        Get the employee's name.

        Returns:
            str: The employee's name.
        """
        return self._name

    @name.setter
    def name(self, new_name):
        """
        Update the employee's name.

        Args:
            new_name (str): The new name to assign.

        Raises:
            TypeError: If new_name is not a string.
        """
        if not isinstance(new_name, str):
            raise TypeError("'name' must be a string.")
        self._name = new_name
        print(f"'name' updated to '{self.name}'.")

    @property
    def level(self):
        """
        Get the employee's current level.

        Returns:
            str: The employee's level.
        """
        return self._level

    @level.setter
    def level(self, new_level):
        """
        Promote the employee to a new level.

        Business rules:
        - The new level must be valid.
        - The employee cannot be demoted.
        - The new level must be different from the current level.
        - Salary is updated automatically to the base salary
          of the new level.

        Args:
            new_level (str): The new level to assign.

        Raises:
            ValueError: If the level is invalid, unchanged,
                        or represents a demotion.
        """
        if new_level not in Employee._base_salaries:
            raise ValueError(f"Invalid value '{new_level}' for 'level' attribute.")
        if new_level == self.level:
            raise ValueError(f"'{self.level}' is already the selected level.")
        if Employee._base_salaries[new_level] < Employee._base_salaries[self.level]:
            raise ValueError("Cannot change to lower level.")

        print(f"'{self.name}' promoted to '{new_level}'.")
        self._level = new_level
        self.salary = Employee._base_salaries[new_level]

    @property
    def salary(self):
        """
        Get the employee's current salary.

        Returns:
            int | float: The employee's salary.
        """
        return self._salary

    @salary.setter
    def salary(self, new_salary):
        """
        Update the employee's salary.

        Business rules:
        - Salary must be numeric.
        - Salary must be higher than the minimum salary
          defined for the employee's current level.

        Args:
            new_salary (int | float): The new salary amount.

        Raises:
            TypeError: If new_salary is not numeric.
            ValueError: If new_salary is below or equal to
                        the minimum salary for the level.
        """
        if not isinstance(new_salary, (int, float)):
            raise TypeError("'salary' must be a number.")
        if new_salary <= Employee._base_salaries[self.level]:
            raise ValueError(
                f"Salary must be higher than minimum salary "
                f"${Employee._base_salaries[self.level]}."
            )

        self._salary = new_salary
        print(f'Salary updated to ${self.salary}.')
