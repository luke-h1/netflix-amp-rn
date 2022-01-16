import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  plot: {
    color: 'darkgrey'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'normal'
  },
  duration: {
    color: 'darkgrey',
    fontSize: 10,
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderRadius: 3,
  },
})

export default styles;
