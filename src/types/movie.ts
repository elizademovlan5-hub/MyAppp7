
export type Movie = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  genre: string[];
  imdbRating: number;
  duration: string;
  rotten: number;
  saved: boolean;
};

export const TAGS = ["2D", "3D", "IMAX", "4D"];

export const GENRES = [
  "Action",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Horror",
  "Adventure",
  "Animation",
  "Thriller",
  "Crime",
];
