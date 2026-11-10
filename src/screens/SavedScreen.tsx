
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/MovieContext";

export default function SavedScreen() {
  const { movies } = useMovies();

  const saved = movies.filter((movie) => movie.saved);

  return (
    <View style={styles.container}>
      <FlatList
        data={saved}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard movie={item} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No saved movies
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f7f7fc",
  },
  empty: {
    textAlign: "center",
    marginTop: 70,
    color: "#777",
    fontSize: 16,
  },
});
