import { StyleSheet } from "react-native";
import colors from "./colors";

const splashScreenBackgroundStyle = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.WHITE,
  },
});

const styleBarLogo = StyleSheet.create({
  logoOrientation: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -8,
  },
  sizeLogo: {
    width: 135,
    height: 45,
    // marginLeft: 10,
  },
  sizeLogoTallerConstruyectoPais: {
    width: 83,
    height: 42,
  },
});

const globalStyle = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fondo: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  marginHorizontal32: {
    marginLeft: 32,
    marginRight: 32,
  },
  marginHorizontal40: {
    marginLeft: 40,
    marginRight: 40,
  },
  title: {
    color: colors.TITLE_SUBTITLE,
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
  },

  title2: {
    color: colors.TITLE_SUBTITLE,
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
  },

  text: {
    color: colors.TEXT,
    fontFamily: "WorkSans-Regular",
    fontSize: 15,
  },

  buttonContent: {
    backgroundColor: colors.BUTTON_ACTIVO,
    borderRadius: 32,
  },
  labelButtonContent: {
    fontFamily: "WorkSans-Medium",
  },

  buttonText: {
    color: colors.BUTTON_ACTIVO,
    fontFamily: "WorkSans-Medium",
    textDecorationLine: "underline",
    fontSize: 13,
  },

  buttonOutlined: {
    borderRadius: 32,
  },
  labelButtonOutlined: {
    color: colors.BUTTON_ACTIVO,
    fontFamily: "WorkSans-Medium",
  },
  labelButtonOutlinedDisabled: {
    fontFamily: "WorkSans-Medium",
  },

  opcionMenu: {
    backgroundColor: "#000",
    borderRadius: 0,
    marginBottom: 8,
  },
  labelOpcionMenu: {
    marginVertical: 30,
    fontFamily: "WorkSans-Medium",
    color: colors.WHITE,
    fontSize: 16,
    textTransform: "uppercase",
    flex: 1,
    textAlign: "center",
  },
});

const reportStyle = StyleSheet.create({
  reportTitleContainer: {
    fontFamily: "Montserrat-Bold",
    color: colors.WHITE,
    fontSize: 16,
    padding: 16,
    marginBottom: 16,
  },
  container: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  subContainer: {
    marginBottom: 16,
  },
  title: {
    color: colors.TEXT,
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    textTransform: "uppercase",
  },
  textFuente: {
    color: colors.FUENTE,
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
  textBig: {
    color: colors.BUTTON_ACTIVO,
    fontSize: 25,
    fontFamily: "WorkSans-Medium",
  },
});

export { splashScreenBackgroundStyle };
export { styleBarLogo };
export { globalStyle };
export { reportStyle };
