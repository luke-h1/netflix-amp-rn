import React from "react";
import { FlatList, Text, Image } from "react-native";
import styles from "./styles";

interface Props {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
}

const HomeCategory = ({ category }: Props) => {
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        key={category.id}
        data={category.movies}
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
