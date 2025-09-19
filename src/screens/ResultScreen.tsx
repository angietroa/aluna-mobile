import React from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Text, Button } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { designSystem } from "../config/designSystem";
import { iaXml, upArrowXml } from "../assets/svgConstants";

const ResultScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background_2.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
        >
          <Text style={styles.title}>Resultado de tu sesión</Text>

          <View style={styles.subtitleContainer}>
            <SvgXml xml={iaXml} width={28} height={28} style={styles.iaIcon} />
            <Text style={styles.subtitle}>Hoy sonaste mas calmado</Text>
          </View>

          <View style={styles.improvementContainer}>
            <SvgXml
              xml={upArrowXml}
              width={24}
              height={24}
              style={styles.upArrowIcon}
            />
            <Text style={styles.improvementText}>Tu estado mejoro un 20%</Text>
          </View>

          <View style={styles.exitButtonContainer}>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Home")}
              style={styles.exitButton}
              buttonColor={designSystem.colors.primaryDark}
              labelStyle={styles.exitButtonText}
            >
              Salir
            </Button>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.white,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingTop: 0,
    padding: 24,
    paddingBottom: 54,
    flexGrow: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: designSystem.typography.h1.fontSize,
    fontWeight: designSystem.typography.h1.fontWeight as any,
    lineHeight: designSystem.typography.h1.lineHeight,
    color: designSystem.colors.primaryDark,
    marginTop: 10,
    marginBottom: 23,
    textAlign: "left",
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 9,
  },
  subtitle: {
    fontSize: designSystem.typography.body.fontSize,
    fontWeight: designSystem.typography.body.fontWeight as any,
    lineHeight: designSystem.typography.body.lineHeight,
    color: designSystem.colors.text.primary,
    marginLeft: 0,
  },
  iaIcon: {
    marginRight: 3,
  },
  improvementContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 40,
  },
  improvementText: {
    fontSize: designSystem.typography.body.fontSize,
    fontWeight: designSystem.typography.body.fontWeight as any,
    lineHeight: designSystem.typography.body.lineHeight,
    color: designSystem.colors.text.primary,
    marginLeft: 0,
    alignSelf: "center",
  },
  upArrowIcon: {
    marginRight: 3,
    alignSelf: "center",
  },
  exitButtonContainer: {
    marginTop: "auto",
  },
  exitButton: {
    flex: 1,
    borderRadius: designSystem.borderRadius.medium,
  },
  exitButtonText: {
    color: designSystem.colors.white,
    fontSize: designSystem.typography.body.fontSize,
    fontWeight: designSystem.typography.body.fontWeight as any,
  },
});

export default ResultScreen;
