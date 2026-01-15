#!/usr/bin/python3
"""
demo.py

Demonstrates usage of the Media Catalogue module.
"""

from media import Movie, TVSeries, MediaCatalogue, MediaError

catalogue = MediaCatalogue()

try:
    catalogue.add(Movie("The Matrix", 1999, "The Wachowskis", 136))
    catalogue.add(Movie("Inception", 2010, "Christopher Nolan", 148))
    catalogue.add(TVSeries("Scrubs", 2001, "Bill Lawrence", 24, 9, 182))
    catalogue.add(TVSeries("Breaking Bad", 2008, "Vince Gilligan", 47, 5, 62))

    print(catalogue)

except ValueError as e:
    print(f"Validation Error: {e}")

except MediaError as e:
    print(f"Media Error: {e}")
    print(f"Unable to add {e.obj}: {type(e.obj)}")
