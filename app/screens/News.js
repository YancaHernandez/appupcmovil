import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import {
  Text,
  Card,
  Divider,
  Title,
  Paragraph,
  Caption,
} from "react-native-paper";

import colors from "../styles/colors";
// import { dummyData } from "../data/Data";
// import Carousel from "../components/Carousel";
const { width, height } = Dimensions.get("window");

const News = ({ route }) => {
  const { id, date, title, content, imagen } = route.params.item;
  // const { publishedAt, title, content, urlToImage } = route.params.item;

  return (
    <View>
      <ScrollView centerContent={true}>
        <View style={{ alignItems: "center" }}>
          {/* <Carousel data={dummyData} /> */}

          <Image
            source={{ uri: imagen }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>

        <Divider />
        <View style={{ marginHorizontal: 8 }}>
          <Card style={{ marginBottom: 16 }}>
            <Card.Content>
              <Caption>{date}</Caption>
              <Title style={styles.title}>{title}</Title>
              <Paragraph style={styles.textContent}>{content}</Paragraph>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    height: height / 4,
    width: "100%",
    marginBottom: 8,
  },
  title: {
    marginTop: 16,
    marginBottom: 16,
    color: colors.BUTTON_ACTIVO,
    fontFamily: "Montserrat-Bold",
    lineHeight: 24,
  },
  textContent: {
    color: colors.TEXT,
    fontFamily: "WorkSans-Regular",
    lineHeight: 26,
  },
});

export default News;
