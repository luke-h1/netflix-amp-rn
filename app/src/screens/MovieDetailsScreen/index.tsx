import { Image } from "react-native";
import { Text, View } from "../../components/Themed";
import styles from "./styles";
import movie from "../../../assets/data/movie";
import { MaterialIcons } from "@expo/vector-icons";

interface MovieDetailsScreenProps {}

const MovieDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: movie.seasons.items[0].episodes.items[0].poster,
        }}
      />
      <View style={{ padding: 12 }}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.match}>98% Match</Text>
          <Text style={styles.year}>{movie.year}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>12+</Text>
          </View>
        </View>
        <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
        <MaterialIcons name="hd" size={24} color="white" />
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
