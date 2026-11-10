
import { Movie } from "../types/movie";

export const initialMovies: Movie[] = [
  {
    id: "1",
    name: "Inception",
    description:
      "A skilled thief enters dreams to steal secrets, but a new mission challenges everything he knows.",
    imageUrl:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    tags: ["2D", "IMAX"],
    genre: ["Action", "Sci-Fi"],
    imdbRating: 8.8,
    duration: "2h 28m",
    rotten: 87,
    saved: false,
  },
  {
    id: "2",
    name: "Interstellar",
    description:
      "A team of explorers travels beyond Earth in search of a new home for humanity.",
    imageUrl:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    tags: ["2D", "3D"],
    genre: ["Adventure", "Drama", "Sci-Fi"],
    imdbRating: 8.6,
    duration: "2h 49m",
    rotten: 73,
    saved: false,
  },
  {
    id: "3",
    name: "The Dark Knight",
    description:
      "Batman faces the Joker, whose chaos threatens the people of Gotham City.",
    imageUrl:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    tags: ["2D", "IMAX", "4D"],
    genre: ["Action", "Crime", "Drama"],
    imdbRating: 9.0,
    duration: "2h 32m",
    rotten: 94,
    saved: false,
  },
  {
    id: "4",
    name: "Avatar",
    description:
      "A former marine discovers an extraordinary world and must choose where he belongs.",
    imageUrl:
      "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    tags: ["3D", "IMAX"],
    genre: ["Action", "Adventure", "Sci-Fi"],
    imdbRating: 7.9,
    duration: "2h 42m",
    rotten: 81,
    saved: false,
  },
];
