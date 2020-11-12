import * as React from "react";
import { Drawer } from "react-native-paper";

const DrawerList = ({ title }) => (
  <Drawer.Item
    style={{
      backgroundColor: "#EDF0F1",
      marginBottom: 4,
      marginHorizontal: 0,
      paddingVertical: 6,
    }}
    //   icon="star"
    label={title}
  />
);

export default DrawerList;
