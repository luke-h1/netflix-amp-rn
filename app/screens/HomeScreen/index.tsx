import * as React from "react";
import { Image, FlatList, StyleSheet, Text } from "react-native";

import { View } from "../../components/Themed";
import styles from "./styles";
import categories from "../../assets/data/categories";

const firstCategory = categories.items[0];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={firstCategory.movies}
        horizontal
        renderItem={({ item }) => (
          <Image
            testID="test"
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
      />
    </View>
  );
};
export default HomeScreen;
