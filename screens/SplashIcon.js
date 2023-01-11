import * as React from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";
import { Color } from "../GlobalStyles";

const SplashIcon = ({navigation}) => {
  React.useEffect(()=>{
    setTimeout(() => navigation.navigate("Onboard3"), 3000);
  })
  return (
    <ImageBackground
      style={styles.splashIcon}
      source={require("../assets/splash.png")}
    >
      <Image
        style={styles.splashChildPosition}
        resizeMode="cover"
        source={require("../assets/unsplashrgauysta0ni.png")}
      />
      <View style={[styles.splashChild, styles.splashChildPosition]} />
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
      <View style={styles.splashItem} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  splashChildPosition: {
    width: '100%',
    left: 0,
    top: 0,
    position: "absolute",
    height: '100%',
  },
  splashChild: {
    backgroundColor: Color.shadeOfPrimary,
    opacity: 0.8,
    width: '100%',
    height: '100%',
  },
  logoIcon: {
    top: "40%",
    left: 83,
    width: 209,
    height: 119,
    position: "absolute",
    overflow: "hidden",
  },
  splashItem: {
    height: "0.62%",
    width: "36.8%",
    top: "98.71%",
    right: "31.33%",
    bottom: "0.68%",
    left: "31.87%",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 5,
    position: "absolute",
  },
  splashIcon: {
    flex: 1,
    overflow: "hidden",
    height: '100%',
    width: "100%",
  },
});

export default SplashIcon;
