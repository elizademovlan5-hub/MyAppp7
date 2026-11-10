
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useMovies } from "../context/MovieContext";

export default function ProfileScreen() {
  const { movies } = useMovies();

  const savedCount = movies.filter(
    (movie) => movie.saved
  ).length;

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Ionicons
          name="person"
          size={55}
          color="#5836db"
        />
      </View>

      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.subtitle}>Movie Lover 🎬</Text>

      <View style={styles.card}>
        <Text style={styles.label}>My Saved Movies</Text>
        <Text style={styles.value}>{savedCount}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Total Movies</Text>
        <Text style={styles.value}>{movies.length}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>About App</Text>
        <Text style={styles.small}>
          
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7f7fc",
    padding: 20,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#e8e1ff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
  },
  name: {
    fontSize: 23,
    fontWeight: "800",
    marginTop: 15,
  },
  subtitle: {
    color: "#777",
    marginTop: 5,
    marginBottom: 25,
  },
  card: {
    width: "100%",
    padding: 17,
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontWeight: "600",
  },
  value: {
    fontWeight: "800",
    color: "#5836db",
    fontSize: 20,
  },
  small: {
    fontSize: 11,
    color: "#777",
  },
});
