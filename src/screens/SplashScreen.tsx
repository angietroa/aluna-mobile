import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { designSystem } from "../config/designSystem";
import { whiteLogoXml, whiteAlunaXml } from "../assets/svgConstants";

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <SvgXml
          xml={whiteLogoXml}
          width={260}
          height={260}
          style={styles.logo}
        />
        <SvgXml
          xml={whiteAlunaXml}
          width={181}
          height={55}
          style={[styles.aluna, { marginTop: 83 }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: designSystem.colors.primaryDark,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    margin: 0,
    padding: 0,
  },
  aluna: {
    margin: 0,
    padding: 0,
  },
});

export default SplashScreen;
