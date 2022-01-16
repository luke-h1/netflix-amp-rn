import { Image, Pressable, FlatList } from "react-native";
import { Text, View } from "../../components/Themed";
import styles from "./styles";
import movie from "../../../assets/data/movie";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Video, Audio } from "expo-av";
import VideoPlayer from "../../components/VideoPlayer";

interface MovieDetailsScreenProps {
  seasons: {
    items: {
      id: string;
      name: string;
      episodes: {
        items: {
          id: string;
          title: string;
          poster: string;
          duration: string;
          plot: string;
          video: string;
        }[];
      };
    };
  };
}
const MovieDetailsScreen = () => {
  const firstSeason = movie.seasons.items[0];
  const seasonNames = movie.seasons.items.map((season) => season.name);
  const [currentEpisode, setCurrentEpisode] = useState(
    firstSeason.episodes.items[0]
  );
  const [currentSeason, setCurrentSeason] =
    useState<typeof firstSeason>(firstSeason);
  return (
    <View>
      {/* <Image
        style={styles.image}
        source={{
          uri: movie.seasons.items[0].episodes.items[0].poster,
        }}
      /> */}
      <VideoPlayer episode={currentEpisode} />
      {/*       <EpisodeItem episode={movie.seasons.items[0].episodes.items[0]} />
       */}
      <FlatList
        style={{ marginBottom: 250 }}
        data={currentSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} onPress={setCurrentEpisode}/>}
        onTouchStart={() => console.log('hi')}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% Match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>
            <Pressable
              style={styles.playButton}
              onPress={() => console.log("hi")}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16}>
                  Play
                </Entypo>
              </Text>
            </Pressable>

            <Pressable
              style={styles.downloadButton}
              onPress={() => console.log("hi")}
            >
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white">
                  {" "}
                  Download
                </AntDesign>
              </Text>
            </Pressable>
            <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color="#fff" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="#fff" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Ionicons name="share-social-outline" size={24} color="#fff" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>
            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(_value, index) => {
                setCurrentSeason(movie.seasons.items[index]);
              }}
            >
              {seasonNames &&
                seasonNames.map((name) => (
                  <Picker.Item
                    label={name}
                    value={name}
                    color="#fff"
                    key={name}
                  />
                ))}
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
