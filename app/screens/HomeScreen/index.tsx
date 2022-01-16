import * as React from "react";
import { Image, StyleSheet, Text } from "react-native";

import { View } from "../../components/Themed";
import styles from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.pinimg.com/originals/67/5e/bc/675ebc2fd210a8bd5362928a51514960.jpg",
          
        }}
      />
    </View>
  );
};
export default HomeScreen;
