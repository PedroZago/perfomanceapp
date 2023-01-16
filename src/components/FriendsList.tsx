import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import { IFriend } from "../screens/Home";
import { Friend } from "./Friend";

interface FriendsListProps {
  data: IFriend[];
  follow: () => void;
}

export const FriendsList: React.FC<FriendsListProps> = ({ data, follow }) => {
  const totalLikes = useMemo(
    () => data.reduce((likes, friend) => likes + friend.likes, 0),
    [data]
  );

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>

      <FlatList
        data={data}
        keyExtractor={(item: IFriend) => String(item.id)}
        renderItem={({ item }) => <Friend data={item} follow={follow} />}
      />
    </View>
  );
};
