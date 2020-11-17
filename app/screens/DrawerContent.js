import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Linking,
} from "react-native";
import { Avatar, Title, Caption, Drawer, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { globalStyle } from "../styles/general";
import authContext from "../context/auth/authContext";

export function DrawerContent(props) {
  const { loggued, user, logout } = useContext(authContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                style={{ resizeMode: "contain" }}
                source={require("../../assets/img/logoInicioSesion.png")}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                {loggued ? (
                  <>
                    <Title style={styles.title}>{user.email}</Title>
                    <Caption
                      style={globalStyle.buttonText}
                      onPress={() => props.navigation.navigate("account")}
                      numberOfLines={2}
                    >
                      Editar perfil
                    </Caption>
                  </>
                ) : (
                  <>
                    <Title style={styles.title}>Usuario invitado</Title>
                    <Caption
                      style={globalStyle.buttonText}
                      onPress={() => props.navigation.navigate("account")}
                    >
                      Iniciar sesión
                    </Caption>
                  </>
                )}
              </View>
            </View>
            {/* <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Follower</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Follower</Caption>
              </View>
            </View> */}
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Inicio"
              labelStyle={styles.fontFamily}
              onPress={() => {
                props.navigation.navigate("home");
              }}
            />

            {/* <DrawerItem
              icon={({ color, size }) => (
                // <FontAwesome5 name="user-tie" size={size} color={color} />
                <MaterialCommunityIcons
                  name="account-tie"
                  size={size}
                  color={color}
                />
              )}
              label="Ministro"
              labelStyle={styles.fontFamily}
              onPress={() => {
                props.navigation.navigate("ministro");
              }}
            /> */}

            {/* <DrawerItem
              icon={({ color, size }) => (
                // <Icon name="home-outline" color={color} size={size} />
                <AntDesign name="infocirlceo" size={size} color={color} />
              )}
              label="Información general"
              labelStyle={styles.fontFamily}
              onPress={() => {
                props.navigation.navigate("informacionGeneral");
              }}
            /> */}
          </Drawer.Section>

          {/* <Drawer.Section>
            <Text style={styles.titleSesion}>Redes sociales</Text>
            <View
              style={[styles.row, { marginLeft: 15, flexDirection: "row" }]}
            >
              <View style={styles.section}>
                <TouchableHighlight
                  onPress={() =>
                    Linking.openURL("https://www.facebook.com/MinJusticiaCo")
                  }
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

              <View style={styles.section}>
                <TouchableHighlight
                  onPress={() =>
                    Linking.openURL(
                      "https://www.instagram.com/minjusticiaco/?hl=es-la"
                    )
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

              <View style={styles.section}>
                <TouchableHighlight
                  onPress={() =>
                    Linking.openURL("https://twitter.com/MinjusticiaCo?lang=es")
                  }
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

              <View style={styles.section}>
                <TouchableHighlight
                  onPress={() =>
                    Linking.openURL(
                      "https://www.youtube.com/user/prensaminjusticia/featured"
                    )
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
          </Drawer.Section> */}

          {/* <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              // icon={({ color, size }) => (
              //   <Icon name="home-outline" color={color} size={size} />
              // )}
              label="www.minjusticia.gov.co"
              labelStyle={[styles.fontFamily, { color: colors.BUTTON_ACTIVO }]}
              onPress={() => Linking.openURL("https://www.minjusticia.gov.co/")}
            />
          </Drawer.Section> */}

          {/* <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      {loggued && (
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Cerrar sesión"
            labelStyle={styles.fontFamily}
            onPress={() => logout()}
          />
        </Drawer.Section>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Montserrat-Bold",
  },
  titleSesion: {
    marginLeft: 15,
    marginTop: 15,
    fontFamily: "Montserrat-Medium",
    color: "#666",
  },
  fontFamily: {
    fontFamily: "Montserrat-Regular",
  },
  row: {
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
