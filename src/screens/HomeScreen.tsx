
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/MovieContext";

export default function HomeScreen() {
  const { movies } = useMovies();
  const [search, setSearch] = useState("");

  const filtered = movies.filter((movie) =>
    movie.name
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Ionicons
          name="search"
          size={19}
          color="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Search movies..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard movie={item} />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No movies found
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7fc",
    padding: 16,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e6e3ee",
  },
  input: {
    flex: 1,
    padding: 12,
  },
  list: {
    paddingTop: 16,
    paddingBottom: 20,
  },
  empty: {
    textAlign: "center",
    marginTop: 50,
    color: "#777",
  },
});
