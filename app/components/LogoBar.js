import React from "react";
import { View, Image } from "react-native";

import { styleBarLogo } from "../styles/general";

const LogoBar = () => {
  return (
    <View style={styleBarLogo.logoOrientation}>
      {/* <Image
        style={styleBarLogo.sizeLogoTallerConstruyectoPais}
        source={require("../../assets/img/logoTallerConstruyendoPais.png")}
      /> */}
      <Image
        style={styleBarLogo.sizeLogo}
        source={require("../../assets/img/logoMinJusticia.png")}
      />
    </View>
  );
};

export default LogoBar;
