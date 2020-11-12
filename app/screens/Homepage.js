import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
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

import { globalStyle } from "../styles/general";
import colors from "../styles/colors";
import { dummyData } from "../data/Data";
import Carousel from "../components/Carousel";
import { news } from "../data/Data";

const Homepage = ({ navigation }) => {
  const [noticias, setNoticias] = useState([]);
  const [newsCarousel, setNewsCarousel] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=general&apiKey=32726524901d4e5080c12891566243cf`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    };
    consultarAPI();
    setNewsCarousel(noticias.slice(0, 5));
  }, []);

  if (noticias.length == 0)
    return (
      <View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color={colors.PRIMARY} />
          <Text style={styles.textLoad}>Cargando las noticias...</Text>
        </View>
      </View>
    );

    return null;

  return (
    <View>
      <ScrollView centerContent={true}>
        <View>
          <Carousel data={dummyData} />
          {/* <Carousel data={newsCarousel} /> */}
        </View>

        <Divider />
        <View style={{ marginHorizontal: 8 }}>
          <FlatList
            data={news}
            keyExtractor={(news) => news.id.toString()}
            renderItem={({ item }) => (
              <Card
                onPress={() => navigation.navigate("news", { item })}
                style={{ marginBottom: 16 }}
              >
                <Card.Content>
                  <Caption>{item.date}</Caption>
                  <Title numberOfLines={2} style={styles.title}>
                    {item.title}
                  </Title>
                  <Paragraph
                    numberOfLines={3}
                    style={{
                      color: colors.TEXT,
                      fontFamily: "WorkSans-Regular",
                    }}
                  >
                    {item.content}
                  </Paragraph>
                  <Caption style={globalStyle.buttonText}>Leer más</Caption>
                </Card.Content>
              </Card>
            )}
          />

          {/* <FlatList
            data={noticias}
            keyExtractor={(noticias) => noticias.url.toString()}
            renderItem={({ item }) => (
              <Card
                onPress={() => navigation.navigate("news", { item })}
                style={{ marginBottom: 16 }}
              >
                <Card.Content>
                  <Caption>{item.publishedAt}</Caption>
                  <Title numberOfLines={2} style={styles.title}>
                    {item.title}
                  </Title>
                  <Paragraph
                    numberOfLines={3}
                    style={{
                      color: colors.TEXT,
                      fontFamily: "WorkSans-Regular",
                    }}
                  >
                    {item.description}
                  </Paragraph>
                  <Caption style={globalStyle.buttonText}>Leer más</Caption>
                </Card.Content>
              </Card>
            )}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    marginBottom: 16,
    color: colors.BUTTON_ACTIVO,
    fontFamily: "Montserrat-Bold",
    lineHeight: 24,
  },
  textLoad: {
    marginVertical: 8,
    color: colors.TEXT,
    fontFamily: "Montserrat-Medium",
  },
});

export default Homepage;
