import { DefaultTheme } from "react-native-paper";
import colors from "./colors";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // accent: '#03dac4',
    accent: "#EE0019",
    backdrop: "rgba(0, 0, 0, 0.5)",
    background: "#f6f6f6",
    disabled: "rgba(0, 0, 0, 0.26)",
    error: "#B00020",
    notification: "#f50057",
    onBackground: "#000000",
    onSurface: "#000000",
    placeholder: "rgba(0, 0, 0, 0.54)",
    primary: "#ffc300",
    // primary: "#3366CC",
    // primary: "#EE3D16",
    surface: "#ffffff",
    // text: "#000000",
    text: colors.TEXT,
  },
};

export { theme };
