import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { designSystem } from "../config/designSystem";

interface FeatureCardProps {
  iconXml: string;
  text: string;
  onPress?: () => void;
}

const FeatureCard = ({ iconXml, text, onPress }: FeatureCardProps) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <SvgXml xml={iconXml} width={72} height={64} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: designSystem.colors.accent,
    borderRadius: designSystem.borderRadius.medium,
    padding: designSystem.spacing.md,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    marginHorizontal: designSystem.spacing.xs,
    height: 150,
    minHeight: 150,
    maxHeight: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  icon: {
    marginBottom: designSystem.spacing.sm,
  },
  textContainer: {
    height: 49,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: designSystem.typography.h3.fontSize,
    fontWeight: designSystem.typography.h3.fontWeight as any,
    lineHeight: designSystem.typography.h3.lineHeight,
    color: designSystem.colors.primaryDark,
    textAlign: "center",
  },
});

export default FeatureCard;
