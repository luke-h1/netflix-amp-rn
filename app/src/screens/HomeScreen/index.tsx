import * as React from "react";
import { Image, FlatList, StyleSheet, Text } from "react-native";

import { View } from "../../components/Themed";
import styles from "./styles";
import categories from "../../../assets/data/categories";
import HomeCategory from "../../components/HomeCategory";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => (
          <HomeCategory category={item} key={item.id} />
        )}
      />
    </View>
  );
};
export default HomeScreen;
