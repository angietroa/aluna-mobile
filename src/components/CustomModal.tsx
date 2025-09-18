import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import { Text, Button } from "react-native-paper";
import { designSystem } from "../config/designSystem";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  buttonText: string;
  onButtonPress: () => void;
}

const CustomModal = ({
  visible,
  onClose,
  title,
  content,
  buttonText,
  onButtonPress,
}: CustomModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>{title}</Text>

            <View
              style={[
                styles.contentContainer,
                !buttonText && styles.contentContainerNoButton,
              ]}
            >
              {content}
            </View>

            {buttonText && (
              <Button
                mode="text"
                onPress={onButtonPress}
                style={styles.button}
                buttonColor={designSystem.colors.white}
                labelStyle={styles.buttonText}
                rippleColor={designSystem.colors.accent}
              >
                {buttonText}
              </Button>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(30, 30, 30, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    paddingHorizontal: 50,
  },
  modalContent: {
    backgroundColor: designSystem.colors.background,
    borderRadius: designSystem.borderRadius.large,
    padding: 24,
  },
  title: {
    fontSize: designSystem.typography.h2.fontSize,
    fontWeight: designSystem.typography.h2.fontWeight as any,
    lineHeight: designSystem.typography.h2.lineHeight,
    color: designSystem.colors.black,
    textAlign: "left",
    marginBottom: 20,
  },
  contentContainer: {
    marginBottom: 24,
    alignItems: "stretch",
  },
  contentContainerNoButton: {
    marginBottom: 0,
  },
  button: {
    alignSelf: "flex-end",
    borderRadius: designSystem.borderRadius.medium,
    backgroundColor: designSystem.colors.white,
  },
  buttonText: {
    color: designSystem.colors.primaryDark,
    fontSize: 14,
    fontWeight: designSystem.typography.body.fontWeight as any,
  },
});

export default CustomModal;
