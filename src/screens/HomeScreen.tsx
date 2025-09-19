import React from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Text } from "react-native-paper";
import { designSystem } from "../config/designSystem";
import { sixXml, sevenXml, eightXml } from "../assets/svgConstants";
import FeatureCard from "../components/FeatureCard";

const HomeScreen = ({ navigation }: any) => {
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
          <Text style={styles.title}>Conoce tu progreso</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statColumn}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Racha</Text>
            </View>
            <View style={styles.statColumn}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Sesiones</Text>
            </View>
            <View style={styles.statColumn}>
              <Text style={styles.statNumber}>🙂</Text>
              <Text style={styles.statLabel}>Estado</Text>
            </View>
          </View>

          <View style={styles.cardsContainer}>
            <View style={styles.cardsRow}>
              <FeatureCard iconXml={sixXml} text="Programar alarma" />
              <FeatureCard iconXml={sevenXml} text="Ver alarmas" />
            </View>

            <View style={styles.cardsRow}>
              <FeatureCard
                iconXml={eightXml}
                text="Iniciar meditación"
                onPress={() => navigation.navigate("Library")}
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
    marginBottom: 15,
    textAlign: "left",
  },
  statsContainer: {
    backgroundColor: designSystem.colors.primaryDark,
    borderRadius: 12,
    paddingTop: 27,
    paddingBottom: 27,
    paddingHorizontal: 34,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 12,
  },
  statColumn: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 40,
    color: designSystem.colors.white,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: designSystem.typography.body.fontSize,
    fontWeight: designSystem.typography.body.fontWeight as any,
    lineHeight: designSystem.typography.body.lineHeight,
    color: designSystem.colors.white,
  },
  cardsContainer: {
    marginTop: 12,
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

export default HomeScreen;
