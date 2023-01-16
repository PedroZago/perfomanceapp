import React, { memo } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { IFriend } from "../screens/Home";
import lodash from "lodash";

interface FriendProps {
  data: IFriend;
  follow: () => void;
}

const FriendComponent: React.FC<FriendProps> = ({ data, follow }) => {
  return (
    <View style={styles.container}>
      <Text>
        {data.name} - Likes: {data.likes}
      </Text>

      <TouchableOpacity onPress={follow}>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>

      <Text>Online em: {data.online}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});

// export const Friend = memo(FriendComponent, (prevProps, nextProps) =>
//   Object.is(prevProps.data, nextProps.data)
// );

export const Friend = memo(FriendComponent, (prevProps, nextProps) =>
  lodash.isEqual(prevProps.data, nextProps.data)
);
