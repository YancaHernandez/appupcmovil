import React, { useState, useEffect } from "react";
import { View, Animated, Image, StyleSheet } from "react-native";
import { splashScreenBackgroundStyle } from "../styles/general";

const SplashScreen = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, []);

  return (
    <View style={splashScreenBackgroundStyle.image}>
      <Animated.View
        style={{
          opacity: animacion,
        }}
      >
        <Image
          style={styles.sizeLogo}
          source={require("../../assets/img/logoMinJusticia.png")}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  sizeLogo: {
    width: 361,
    height: 75,
  },
});

export default SplashScreen;
