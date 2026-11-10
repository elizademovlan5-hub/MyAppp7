
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import { useMovies } from "../context/MovieContext";
import { GENRES, TAGS } from "../types/movie";

export default function AddMovieScreen() {
  const { addMovie } = useMovies();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [genre, setGenre] = useState<string[]>([]);
  const [imdb, setImdb] = useState("");
  const [duration, setDuration] = useState("");
  const [rotten, setRotten] = useState("");

  const toggle = (
    value: string,
    items: string[],
    setter: (value: string[]) => void
  ) => {
    setter(
      items.includes(value)
        ? items.filter((item) => item !== value)
        : [...items, value]
    );
  };

  const submit = () => {
    if (
      !name.trim() ||
      !description.trim() ||
      !imageUrl.trim() ||
      !duration.trim() ||
      !imdb.trim() ||
      !rotten.trim()
    ) {
      Alert.alert("Validation", "Please fill all required fields.");
      return;
    }


    if (genre.length === 0) {
      Alert.alert("Validation", "Select at least one genre.");
      return;
    }

    const imdbValue = Number(imdb.replace(",", "."));
    const rottenValue = Number(rotten.replace(",", "."));

    if (
      !Number.isFinite(imdbValue) ||
      imdbValue < 0 ||
      imdbValue > 10
    ) {
      Alert.alert("Validation", "IMDb must be between 0 and 10.");
      return;
    }

    if (
      !Number.isFinite(rottenValue) ||
      rottenValue < 0 ||
      rottenValue > 100
    ) {
      Alert.alert("Validation", "Rotten must be between 0 and 100.");
      return;
    }

    addMovie({
      name: name.trim(),
      description: description.trim(),
      imageUrl: imageUrl.trim(),
      tags,
      genre,
      imdbRating: imdbValue,
      duration: duration.trim(),
      rotten: rottenValue,
    });

    setName("");
    setDescription("");
    setImageUrl("");
    setTags([]);
    setGenre([]);
    setImdb("");
    setDuration("");
    setRotten("");

    Alert.alert("Success", "Movie added successfully!", [
      { text: "OK", onPress: () => router.navigate("/") },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.body}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Add Movie</Text>

        <Text style={styles.label}>Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="Movie name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Description *</Text>
        <TextInput
          style={[styles.input, styles.multi]}
          placeholder="Movie description"
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Image URL *</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          autoCapitalize="none"
          value={imageUrl}
          onChangeText={setImageUrl}
        />

        <Text style={styles.label}>Tags</Text>
        <View style={styles.choices}>
          {TAGS.map((tag) => (
            <TouchableOpacity
              key={tag}
              style={[
                styles.choice,
                tags.includes(tag) && styles.selected,
              ]}
              onPress={() => toggle(tag, tags, setTags)}
            >
              <Text
                style={[
                  styles.choiceText,
                  tags.includes(tag) && styles.selectedText,
                ]}
              >
                {tag}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Genre *</Text>
        <View style={styles.choices}>
          {GENRES.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.choice,
                genre.includes(item) && styles.selected,
              ]}
              onPress={() => toggle(item, genre, setGenre)}
            >
              <Text
                style={[
                  styles.choiceText,
                  genre.includes(item) && styles.selectedText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>IMDb Rating * (0–10)</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder="8.6"
          value={imdb}
          onChangeText={setImdb}
        />

        <Text style={styles.label}>Duration *</Text>
        <TextInput
          style={styles.input}
          placeholder="2h 49m"
          value={duration}
          onChangeText={setDuration}
        />

        <Text style={styles.label}>Rotten * (0–100)</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder="72"
          value={rotten}
          onChangeText={setRotten}
        />

        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.buttonText}>Add Movie</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7fc",
  },
  body: {
    padding: 18,
    paddingBottom: 45,
  },
  title: {
    fontSize: 23,
    fontWeight: "800",
    marginBottom: 12,
  },
  label: {
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 7,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#dedbe8",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 9,
    fontSize: 15,
  },
  multi: {
    height: 95,
    textAlignVertical: "top",
  },
  choices: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  choice: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  selected: {
    backgroundColor: "#5836db",
    borderColor: "#5836db",
  },
  choiceText: {
    color: "#555",
  },
  selectedText: {
    color: "white",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#5836db",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    marginTop: 28,
  },
  buttonText: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
});
