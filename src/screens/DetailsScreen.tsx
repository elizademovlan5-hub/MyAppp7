
import {
  router,
  useLocalSearchParams,
} from "expo-router";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useMovies } from "../context/MovieContext";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const { movies, toggleSave } = useMovies();

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return (
      <View style={styles.center}>
        <Text>Movie not found</Text>

        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Text style={styles.link}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.body}
    >
      <Image
        source={{ uri: movie.imageUrl }}
        style={styles.poster}
      />

      <Text style={styles.title}>
        {movie.name}
      </Text>

      <Text style={styles.genre}>
        {movie.genre.join(" • ")}
      </Text>

      <View style={styles.stats}>
        <Text>
           {movie.imdbRating.toFixed(1)} IMDb
        </Text>

        <Text>
           {movie.rotten}% Rotten
        </Text>

        <Text> {movie.duration}</Text>
      </View>

      <View style={styles.tags}>
        {movie.tags.map((tag) => (
          <Text key={tag} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>

      <Text style={styles.heading}>
        Description
      </Text>

      <Text style={styles.description}>
        {movie.description}
      </Text>

      <Text style={styles.heading}>
        Image URL
      </Text>

      <Text selectable style={styles.url}>
        {movie.imageUrl}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleSave(movie.id)}
      >
        <Text style={styles.buttonText}>
          {movie.saved
            ? "Unsave Movie"
            : "Save Movie"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7fc",
  },
  body: {
    padding: 18,
    paddingBottom: 40,
  },
  poster: {
    width: "100%",
    height: 280,
    borderRadius: 14,
    backgroundColor: "#ddd",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    marginTop: 18,
    color: "#222",
  },
  genre: {
    color: "#777",
    marginTop: 5,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 18,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
  },
  tags: {
    flexDirection: "row",
    gap: 7,
    marginTop: 16,
  },
  tag: {
    backgroundColor: "#eae4ff",
    padding: 7,
    borderRadius: 7,
    color: "#5836db",
    fontWeight: "700",
  },
  heading: {
    fontSize: 17,
    fontWeight: "700",
    marginTop: 23,
    marginBottom: 7,
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    color: "#444",
  },
  url: {
    color: "#5836db",
    fontSize: 12,
  },
  button: {
    backgroundColor: "#5836db",
    padding: 16,
    marginTop: 26,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "#5836db",
    marginTop: 15,
  },
});
