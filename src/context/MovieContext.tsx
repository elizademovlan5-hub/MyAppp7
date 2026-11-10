
import React, {
  createContext,
  useContext,
  useState,
} from "react";

import { initialMovies } from "../data/movies";
import { Movie } from "../types/movie";

type MovieContextType = {
  movies: Movie[];
  addMovie: (movie: Omit<Movie, "id" | "saved">) => void;
  toggleSave: (id: string) => void;
};

const MovieContext = createContext<
  MovieContextType | undefined
>(undefined);

export function MovieProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [movies, setMovies] =
    useState<Movie[]>(initialMovies);

  const addMovie = (
    movie: Omit<Movie, "id" | "saved">
  ) => {
    const newMovie: Movie = {
      ...movie,
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      saved: false,
    };

    setMovies((prev) => [newMovie, ...prev]);
  };

  const toggleSave = (id: string) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id
          ? { ...movie, saved: !movie.saved }
          : movie
      )
    );
  };

  return (
    <MovieContext.Provider
      value={{ movies, addMovie, toggleSave }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error(
      "useMovies must be used inside MovieProvider"
    );
  }

  return context;
}
