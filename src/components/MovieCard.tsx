
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Movie } from "../types/movie";
import { useMovies } from "../context/MovieContext";

export default function MovieCard({
  movie,
}: {
  movie: Movie;
}) {
  const { toggleSave } = useMovies();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/details",
          params: { id: movie.id },
        })
      }
    >
      <Image
        source={{ uri: movie.imageUrl }}
        style={styles.poster}
      />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {movie.name}
        </Text>

        <Text style={styles.genre} numberOfLines={1}>
          {movie.genre.join(", ")}
        </Text>

        <Text style={styles.info}>
          ⭐ {movie.imdbRating.toFixed(1)}
          {"   "}{movie.duration}
        </Text>

        <View style={styles.tags}>
          {movie.tags.map((tag) => (
            <Text key={tag} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.save}
        onPress={() => toggleSave(movie.id)}
      >
        <Ionicons
          name={
            movie.saved
              ? "bookmark"
              : "bookmark-outline"
          }
          size={22}
          color="#5836db"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  poster: {
    width: 77,
    height: 105,
    borderRadius: 8,
    backgroundColor: "#ddd",
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#191919",
  },
  genre: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
  info: {
    fontSize: 12,
    color: "#444",
    marginTop: 8,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 9,
  },
  tag: {
    backgroundColor: "#eee9ff",
    color: "#5836db",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
    fontSize: 10,
    fontWeight: "700",
  },
  save: {
    padding: 7,
    alignSelf: "flex-start",
  },
});
