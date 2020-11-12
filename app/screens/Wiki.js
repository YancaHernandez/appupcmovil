import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { Avatar, IconButton, Card, Divider, List } from "react-native-paper";

import { globalStyle } from "../styles/general";
import colors from "../styles/colors";
import ModalList from "../components/ModalList";
import ModalWiki from "../components/ModalWiki";
import { listQuestionsAPI } from "../data/Data";
import { categories } from "../data/Data";

const Wiki = () => {
  const [visible, setVisible] = useState(false);
  const [visibleModalWiki, setVisibleModalWiki] = useState(false);

  const [listQuestions, setListQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  // const [searchQuery, setSearchQuery] = useState("");
  const [nameCategorySelect, setNameCategorySelect] = useState(null);

  useEffect(() => {
    const getListQuestions = () => {
      setListQuestions(listQuestionsAPI);
    };
    getListQuestions();
  }, []);

  const showAnswer = (item) => {
    setSelectedQuestion(item);
    setVisibleModalWiki(true);
  };

  const selectCategory = (id, name) => {
    setListQuestions(
      id == -1
        ? listQuestionsAPI
        : listQuestionsAPI.filter((item) => item.category == id)
    );
    setNameCategorySelect(name);
  };

  return (
    <View style={globalStyle.fondo}>
      <TouchableHighlight
        onPress={() => setVisible(true)}
        activeOpacity={1}
        underlayColor="#FFF"
      >
        <Card.Title
          onPress={() => setVisible(true)}
          title="WIKI"
          subtitle={`${
            nameCategorySelect != null ? nameCategorySelect : "Todas"
          }`}
          titleStyle={styles.titleCard}
          subtitleStyle={styles.subtitleCard}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="card-bulleted-outline"
              color="#FFF"
              style={{ backgroundColor: colors.BUTTON_ACTIVO }}
            />
          )}
          right={(props) => <IconButton {...props} icon="magnify" />}
        />
      </TouchableHighlight>

      <Divider />
      <ScrollView centerContent={true}>
        <View style={{ marginHorizontal: 16 }}>
          <View style={{ marginVertical: 16 }}>
            <FlatList
              data={listQuestions}
              keyExtractor={(listQuestions) => listQuestions.id.toString()}
              renderItem={({ item }) => (
                <List.Item
                  title={item.question}
                  titleNumberOfLines={5}
                  titleStyle={styles.title}
                  style={styles.contentTitle}
                  onPress={() => showAnswer(item)}
                />
              )}
            />
          </View>
        </View>
        <ModalList
          visible={visible}
          setVisible={setVisible}
          title={"Categoría"}
          list={[{ id: -1, name: "Todas" }, ...categories]}
          searchQuery={null}
          setSearchQuery={null}
          setSelectItem={selectCategory}
        />

        <ModalWiki
          visible={visibleModalWiki}
          setVisible={setVisibleModalWiki}
          selectedQuestion={selectedQuestion}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleCard: {
    fontFamily: "Montserrat-Bold",
  },
  subtitleCard: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  contentTitle: {
    backgroundColor: "#F2F2F2",
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Wiki;
