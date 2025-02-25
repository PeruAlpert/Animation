import { StyleSheet, Dimensions, PixelRatio } from "react-native";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const spacing = {
  sm: width * 0.02, //8
  md: width * 0.04, //16
  lg: width * 0.06, //22
  xl: width * 0.08, //32
};


const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
  fontScale: Dimensions.get("window").fontScale,
};

const responsiveFontSize = (size) => {
  return Math.floor(
    PixelRatio.roundToNearestPixel(size / dimensions.fontScale)
  );
};

export default {
  width,
  height,
  spacing,
  responsiveFontSize,
};
