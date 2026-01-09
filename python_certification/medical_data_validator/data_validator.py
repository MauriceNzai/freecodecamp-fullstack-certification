#!/usr/bin/python3
"""
Medical Records Validator Module

This module provides functions to validate a list or tuple of medical records.
Each record should be a dictionary containing the following keys:
- patient_id (str): Must start with 'p' followed by digits
- age (int): Must be >= 18
- gender (str): Must be 'male' or 'female' (case-insensitive)
- diagnosis (str or None)
- medications (list of str)
- last_visit_id (str): Must start with 'v' followed by digits

Functions:
- validate(data): Validates the structure and content of medical records.
- find_invalid_records(...): Checks each field of a record for correctness.
"""

import re

def validate(data):
    """
    Validate a list or tuple of medical records.

    Args:
        data (list or tuple): Collection of dictionaries representing\
                medical records.

    Returns:
        bool: True if all records are valid, False otherwise.

    Prints:
        Errors for invalid formats, missing/extra keys, or invalid field values.
    """
    if not isinstance(data, (list, tuple)):
        print("Invalid format: expected a list or tuple")
        return False

    is_invalid = False

    # Expected keys in each medical record
    key_set = {
        'patient_id', 'age', 'gender', 'diagnosis',
        'medications', 'last_visit_id'
    }

    for index, dictionary in enumerate(data):
        if not isinstance(dictionary, dict):
            print(f"Invalid format: expected a dictionary at position {index}")
            is_invalid = True
            continue

        # Check for missing or extra keys
        if set(dictionary.keys()) != key_set:
            print(f"Invalid format: {dictionary} at position {index} "
                  "has missing and/or invalid keys.")
            is_invalid = True
            continue

        # Check field-level constraints
        invalid_records = find_invalid_records(**dictionary)

        for key in invalid_records:
            print(f"Unexpected format '{key}: {dictionary[key]}' at\
                    position {index}")
            is_invalid = True

    if is_invalid:
        return False

    print("Valid format.")
    return True


def find_invalid_records(
        patient_id, age, gender, diagnosis, medications, last_visit_id
    ):
    """
    Identify invalid fields in a single medical record.

    Args:
        patient_id (str): Patient ID (e.g., 'P1001')
        age (int): Age of the patient (>=18)
        gender (str): 'male' or 'female'
        diagnosis (str or None): Medical diagnosis
        medications (list of str): List of medications
        last_visit_id (str): Visit ID (e.g., 'V2301')

    Returns:
        list: Keys of fields that are invalid.
    """
    constraints = {
        'patient_id': isinstance(patient_id, str) and re.fullmatch(
            r'p\d+', patient_id, re.IGNORECASE),
        'age': isinstance(age, int) and age >= 18,
        'gender': isinstance(gender, str) and gender.lower() in\
                ('male', 'female'),
        'diagnosis': diagnosis is None or isinstance(diagnosis, str),
        'medications': isinstance(medications, list) and all(
            isinstance(i, str) for i in medications),
        'last_visit_id': isinstance(last_visit_id, str) and re.fullmatch(
            r'v\d+', last_visit_id, re.IGNORECASE)
    }

    return [key for key, value in constraints.items() if not value]


if __name__ == '__main__':
    medical_records = [
        {
            'patient_id': 'P1001',
            'age': 34,
            'gender': 'Female',
            'diagnosis': 'Hypertension',
            'medications': ['Lisinopril'],
            'last_visit_id': 'V2301',
        },
        {
            'patient_id': 'p1002',
            'age': 47,
            'gender': 'male',
            'diagnosis': 'Type 2 Diabetes',
            'medications': ['Metformin', 'Insulin'],
            'last_visit_id': 'v2302',
        },
        {
            'patient_id': 'P1003',
            'age': 29,
            'gender': 'female',
            'diagnosis': 'Asthma',
            'medications': ['Albuterol'],
            'last_visit_id': 'v2303',
        },
        {
            'patient_id': 'p1004',
            'age': 56,
            'gender': 'Male',
            'diagnosis': 'Chronic Back Pain',
            'medications': ['Ibuprofen', 'Physical Therapy'],
            'last_visit_id': 'V2304',
        }
    ]

    # Example: check individual record
    print(find_invalid_records(**medical_records[0]))

    # Validate all records
    validate(medical_records)
