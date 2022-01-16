import { Text, View } from "../Themed";
import { Episode } from "../../types";
import { AVPlaybackStatus, Video } from "expo-av";
import { useRef, useState } from "react";
import styles from "./style";

const VideoPlayer = ({ episode }: Episode) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterSource={{
          uri: episode.poster,
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(status)}
      />
    </View>
  );
};
export default VideoPlayer;
