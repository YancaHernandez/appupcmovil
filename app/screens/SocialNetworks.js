import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Linking,
} from "react-native";
import { Divider } from "react-native-paper";

import { globalStyle } from "../styles/general";
import colors from "../styles/colors";
import ContentView from "../src/ContentView";

const SocialNetworks = () => {
  const [link, setLink] = useState("https://www.facebook.com/MinJusticiaCo");

  return (
    <View style={globalStyle.fondo}>
      {/* <Text style={styles.title}>Redes sociales</Text> */}
      <View
        style={{
          marginLeft: 15,
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <View>
          <TouchableHighlight
            onPress={() => setLink("https://www.facebook.com/MinJusticiaCo")}
            activeOpacity={1}
            underlayColor="#FFF"
          >
            <Image
              style={{
                resizeMode: "contain",
                width: 40,
              }}
              source={require("../../assets/img/facebook.png")}
            />
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
            onPress={() =>
              setLink("https://www.instagram.com/minjusticiaco/?hl=es-la")
            }
          >
            <Image
              style={{
                resizeMode: "contain",
                width: 40,
              }}
              source={require("../../assets/img/instagram.png")}
            />
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
            onPress={() => setLink("https://twitter.com/MinjusticiaCo?lang=es")}
            activeOpacity={1}
            underlayColor="#FFF"
          >
            <Image
              style={{
                resizeMode: "contain",
                width: 40,
              }}
              source={require("../../assets/img/twitter.png")}
            />
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
            onPress={() =>
              setLink("https://www.youtube.com/user/prensaminjusticia/featured")
            }
            activeOpacity={1}
            underlayColor="#FFF"
          >
            <Image
              style={{
                resizeMode: "contain",
                width: 40,
              }}
              source={require("../../assets/img/youtube.png")}
            />
          </TouchableHighlight>
        </View>
      </View>
      <Divider />
      <View style={styles.container}>
        <ContentView uri={link} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
    marginHorizontal: 16,
    color: colors.TEXT,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default SocialNetworks;
