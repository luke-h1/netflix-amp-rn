import React from "react";
import { FlatList, Text, Image } from "react-native";
import styles from "./styles";

const HomeCategory = () => {
  return (
    <>
      <Text style={styles.title}>Popular on Netflix</Text>
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
    </>
  );
};
export default HomeCategory;
