import React, { useState, useCallback } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { api } from "../api/api";
import { FriendsList } from "../components/FriendsList";

export interface IFriend {
  id: number;
  name: string;
  likes: number;
  online: string;
}

export const Home = () => {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState<IFriend[]>([]);

  async function handleSearch() {
    const response = await api.get<IFriend[]>(`/friends?q=${name}`);

    const formattedData = response.data.map((item) => ({
      id: item.id,
      name: item.name,
      likes: item.likes,
      online: `${new Date().getHours()}:${new Date().getMinutes()}`,
    }));

    setFriends(formattedData);
  }

  const handleFollow = useCallback(() => {
    console.log(`follow user`);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>

      <TextInput
        placeholder="Nome do cliente"
        onChangeText={setName}
        style={styles.input}
      />

      <Button title="Buscar" onPress={handleSearch} />

      <FriendsList data={friends} follow={handleFollow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 20,
  },
});
