import { Text, View } from "../Themed";
import { Episode } from "../../types";
import { AVPlaybackStatus, Video } from "expo-av";
import { useRef, useState, useEffect, LegacyRef } from "react";
import styles from "./style";
import { Playback } from "expo-av/build/AV";

interface Props {
  episode: Episode;
}

const VideoPlayer = ({ episode }: Props) => {
  const [src, setSrc] = useState<string>("");
  const video = useRef<Playback>(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    (async () => {
      await video.current?.loadAsync(
        {
          uri: episode.video,
        },
        {},
        false
      );
    })();
    setSrc(episode.video);
  }, [episode]);

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        usePoster={true}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(status)}
      />
    </View>
  );
};
export default VideoPlayer;
