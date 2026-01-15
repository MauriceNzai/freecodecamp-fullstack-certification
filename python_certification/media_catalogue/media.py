#!/usr/bin/python3
"""
media.py

Provides object-oriented models for managing a media catalogue,
including movies and TV series, with built-in validation and
custom error handling.
"""


class MediaError(Exception):
    """
    Custom exception raised when invalid objects are added
    to the media catalogue.

    Attributes:
        obj (any): The object that caused the error.
    """

    def __init__(self, message, obj):
        super().__init__(message)
        self.obj = obj


class Movie:
    """
    Represents a standalone movie.

    Attributes:
        title (str): Movie title.
        year (int): Year of release (must be >= 1895).
        director (str): Name of the director.
        duration (int): Duration in minutes.
    """

    def __init__(self, title, year, director, duration):
        if not title.strip():
            raise ValueError("Title cannot be empty")
        if year < 1895:
            raise ValueError("Year must be 1895 or later")
        if not director.strip():
            raise ValueError("Director cannot be empty")
        if duration <= 0:
            raise ValueError("Duration must be positive")

        self.title = title
        self.year = year
        self.director = director
        self.duration = duration

    def __str__(self):
        """
        Return a user-friendly string representation of the movie.
        """
        return f"{self.title} ({self.year}) - {self.duration} min, {self.director}"


class TVSeries(Movie):
    """
    Represents an entire TV series.

    Inherits from Movie but interprets duration as the
    average episode duration.

    Attributes:
        seasons (int): Number of seasons.
        total_episodes (int): Total number of episodes.
    """

    def __init__(self, title, year, director, avg_episode_duration, seasons, total_episodes):
        super().__init__(title, year, director, avg_episode_duration)

        if seasons < 1:
            raise ValueError("Seasons must be 1 or greater")
        if total_episodes < 1:
            raise ValueError("Total episodes must be 1 or greater")

        self.seasons = seasons
        self.total_episodes = total_episodes

    def __str__(self):
        """
        Return a user-friendly string representation of the TV series.
        """
        return (
            f"{self.title} ({self.year}) - "
            f"{self.seasons} seasons, {self.total_episodes} episodes, "
            f"{self.duration} min avg, {self.director}"
        )


class MediaCatalogue:
    """
    Stores and manages a collection of media items.

    Supports adding movies and TV series, filtering by type,
    and formatted display of catalogue contents.
    """

    def __init__(self):
        self.items = []

    def add(self, media_item):
        """
        Add a media item to the catalogue.

        Args:
            media_item (Movie): A Movie or TVSeries instance.

        Raises:
            MediaError: If the object is not a Movie or TVSeries.
        """
        if not isinstance(media_item, Movie):
            raise MediaError(
                "Only Movie or TVSeries instances can be added",
                media_item
            )
        self.items.append(media_item)

    def get_movies(self):
        """
        Retrieve all standalone movies in the catalogue.

        Returns:
            list[Movie]: List of Movie objects.
        """
        return [
            item for item in self.items
            if isinstance(item, Movie) and not isinstance(item, TVSeries)
        ]

    def get_tv_series(self):
        """
        Retrieve all TV series in the catalogue.

        Returns:
            list[TVSeries]: List of TVSeries objects.
        """
        return [item for item in self.items if isinstance(item, TVSeries)]

    def __str__(self):
        """
        Return a formatted string representation of the catalogue.
        """
        if not self.items:
            return "Media Catalogue (empty)"

        movies = self.get_movies()
        series = self.get_tv_series()

        result = f"Media Catalogue ({len(self.items)} items):\n\n"

        if movies:
            result += "=== MOVIES ===\n"
            for i, movie in enumerate(movies, 1):
                result += f"{i}. {movie}\n"

        if series:
            result += "\n=== TV SERIES ===\n"
            for i, tv_series in enumerate(series, 1):
                result += f"{i}. {tv_series}\n"

        return result
