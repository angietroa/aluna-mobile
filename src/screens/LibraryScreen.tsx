import React from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Text } from "react-native-paper";
import { designSystem } from "../config/designSystem";
import {
  oneXml,
  twoXml,
  threeXml,
  fourXml,
  fiveXml,
} from "../assets/svgConstants";
import FeatureCard from "../components/FeatureCard";

const LibraryScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
        >
          <Text style={styles.title}>Biblioteca de meditación</Text>

          <Text style={styles.subtitle}>¿En que quieres enfocarte hoy?</Text>

          <View style={styles.cardsContainer}>
            <View style={styles.cardsRow}>
              <FeatureCard
                iconXml={oneXml}
                text="Sueño y descanso"
                onPress={() =>
                  navigation.navigate("Meditation", {
                    meditationType: "el sueño y descanso",
                  })
                }
              />
              <FeatureCard
                iconXml={twoXml}
                text="Estrés"
                onPress={() =>
                  navigation.navigate("Meditation", {
                    meditationType: "el estrés",
                  })
                }
              />
            </View>

            <View style={styles.cardsRow}>
              <FeatureCard
                iconXml={threeXml}
                text="Ansiedad"
                onPress={() =>
                  navigation.navigate("Meditation", {
                    meditationType: "la ansiedad",
                  })
                }
              />
              <FeatureCard
                iconXml={fourXml}
                text="Emociones difíciles"
                onPress={() =>
                  navigation.navigate("Meditation", {
                    meditationType: "emociones difíciles",
                  })
                }
              />
            </View>

            <View style={styles.cardsRow}>
              <FeatureCard
                iconXml={fiveXml}
                text="Concentración y productividad"
                onPress={() =>
                  navigation.navigate("Meditation", {
                    meditationType: "la concentración y productividad",
                  })
                }
              />
              <View style={styles.emptyCard} />
            </View>
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
  },
  title: {
    fontSize: designSystem.typography.h1.fontSize,
    fontWeight: designSystem.typography.h1.fontWeight as any,
    lineHeight: designSystem.typography.h1.lineHeight,
    color: designSystem.colors.primaryDark,
    marginTop: 0,
    marginBottom: 0,
    textAlign: "left",
  },
  subtitle: {
    fontSize: designSystem.typography.body.fontSize,
    fontWeight: designSystem.typography.body.fontWeight as any,
    lineHeight: designSystem.typography.body.lineHeight,
    color: designSystem.colors.text.primary,
    marginBottom: 15,
    textAlign: "left",
  },
  cardsContainer: {
    marginTop: 0,
  },
  cardsRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  emptyCard: {
    width: "48%",
    marginHorizontal: designSystem.spacing.xs,
    height: 150,
    minHeight: 150,
    maxHeight: 150,
  },
});

export default LibraryScreen;
