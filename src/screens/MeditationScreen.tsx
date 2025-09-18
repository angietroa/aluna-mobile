import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { designSystem } from "../config/designSystem";
import { iaXml, playXml, microphoneXml } from "../assets/svgConstants";
import EqualizerAnimation from "../components/EqualizerAnimation";
import CustomModal from "../components/CustomModal";

const MeditationScreen = ({ navigation, route }: any) => {
  const { meditationType } = route.params || {
    meditationType: "Sueño y descanso",
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showRecordingModal, setShowRecordingModal] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Meditación para {meditationType}</Text>

        <View style={styles.subtitleContainer}>
          <SvgXml xml={iaXml} width={28} height={28} style={styles.iaIcon} />
          <Text style={styles.subtitle}>Sesión guiada y analizada por IA.</Text>
        </View>

        <View style={styles.playButtonContainer}>
          {!isPlaying ? (
            <TouchableOpacity
              style={styles.playButton}
              activeOpacity={0.8}
              onPress={() => setIsPlaying(true)}
            >
              <SvgXml
                xml={playXml}
                width={67}
                height={86}
                style={styles.playIcon}
              />
              <Text style={styles.playText}>Iniciar</Text>
            </TouchableOpacity>
          ) : (
            <EqualizerAnimation />
          )}
        </View>

        <View style={styles.finishButtonContainer}>
          {isPlaying ? (
            <>
              <Button
                mode="outlined"
                onPress={() => setIsPlaying(false)}
                style={styles.pauseButton}
                buttonColor={designSystem.colors.secondary}
                labelStyle={styles.pauseButtonText}
              >
                Pausar
              </Button>
              <Button
                mode="contained"
                onPress={() => setShowRecordingModal(true)}
                style={styles.finishButton}
                buttonColor={designSystem.colors.primaryDark}
                labelStyle={styles.finishButtonText}
              >
                Finalizar
              </Button>
            </>
          ) : (
            <Button
              mode="contained"
              onPress={() => setShowRecordingModal(true)}
              style={styles.finishButton}
              buttonColor={designSystem.colors.primaryDark}
              labelStyle={styles.finishButtonText}
            >
              Finalizar
            </Button>
          )}
        </View>
      </ScrollView>

      <CustomModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        title="¿Como te sientes ahora?"
        content={
          <Text style={styles.emojisText} onPress={() => setShowModal(false)}>
            😀 😐 😞 😡 😴
          </Text>
        }
        buttonText="Saltar"
        onButtonPress={() => setShowModal(false)}
      />

      <CustomModal
        visible={showRecordingModal}
        onClose={() => setShowRecordingModal(false)}
        title="¿Quieres grabar tu sentir?"
        content={
          <View style={styles.recordingContent}>
            <Text style={styles.recordingDescription}>
              Esto nos ayudara a darte una mejor experiencia en proximas
              sesiones
            </Text>

            <View style={styles.recordingContainer}>
              <TouchableOpacity
                style={styles.microphoneButton}
                onPress={() => setIsRecording(!isRecording)}
                activeOpacity={0.8}
              >
                {!isRecording ? (
                  <SvgXml
                    xml={microphoneXml}
                    width={32}
                    height={32}
                    style={styles.microphoneIcon}
                  />
                ) : (
                  <Text style={styles.timerText}>
                    {formatTime(recordingTime)}
                  </Text>
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.recordingButtonsContainer}>
              <Button
                mode="text"
                onPress={() => {
                  setShowRecordingModal(false);
                  navigation.navigate("Result");
                }}
                style={styles.omitButton}
                labelStyle={styles.omitButtonText}
              >
                Omitir
              </Button>
              <Button
                mode="contained"
                onPress={() => {
                  setShowRecordingModal(false);
                  navigation.navigate("Result");
                }}
                style={styles.saveButton}
                buttonColor={
                  isRecording ? designSystem.colors.white : "#e8e8e8"
                }
                labelStyle={[
                  styles.saveButtonText,
                  isRecording && styles.activeButtonText,
                  !isRecording && styles.disabledButtonText,
                ]}
                disabled={!isRecording}
              >
                Guardar
              </Button>
            </View>
          </View>
        }
        buttonText=""
        onButtonPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.white,
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
    marginTop: 0,
    marginBottom: 0,
    textAlign: "left",
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 40,
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
  playButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  playButton: {
    width: 243,
    height: 243,
    borderRadius: 121.5,
    backgroundColor: designSystem.colors.accent,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    marginBottom: 16,
  },
  playIcon: {
    marginBottom: 18,
  },
  playText: {
    fontSize: designSystem.typography.h1.fontSize,
    fontWeight: designSystem.typography.h1.fontWeight as any,
    lineHeight: designSystem.typography.h1.lineHeight,
    color: designSystem.colors.primaryDark,
  },
  finishButtonContainer: {
    marginTop: 40,
    flexDirection: "row",
    gap: 4,
  },
  pauseButton: {
    flex: 1,
    borderRadius: designSystem.borderRadius.medium,
    borderColor: designSystem.colors.secondary,
    borderWidth: 2,
  },
  pauseButtonText: {
    color: designSystem.colors.primary,
    fontSize: designSystem.typography.body.fontSize,
    fontWeight: designSystem.typography.body.fontWeight as any,
  },
  finishButton: {
    flex: 1,
    borderRadius: designSystem.borderRadius.medium,
  },
  finishButtonText: {
    color: designSystem.colors.white,
    fontSize: designSystem.typography.body.fontSize,
    fontWeight: designSystem.typography.body.fontWeight as any,
  },
  emojisText: {
    fontSize: 32,
    textAlign: "center",
  },
  recordingContent: {
    alignItems: "center",
    width: "100%",
  },
  recordingDescription: {
    fontSize: designSystem.typography.body.fontSize,
    fontWeight: designSystem.typography.body.fontWeight as any,
    lineHeight: designSystem.typography.body.lineHeight,
    color: designSystem.colors.primaryDark,
    textAlign: "left",
    marginBottom: 47,
  },
  recordingContainer: {
    alignItems: "center",
    marginBottom: 47,
  },
  microphoneButton: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: designSystem.colors.primaryDark,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  microphoneIcon: {
    // El color se maneja directamente en el SVG
  },
  timerText: {
    fontSize: designSystem.typography.h3.fontSize,
    fontWeight: designSystem.typography.h3.fontWeight as any,
    lineHeight: designSystem.typography.h3.lineHeight,
    color: designSystem.colors.white,
  },
  recordingButtonsContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  omitButton: {
    borderRadius: designSystem.borderRadius.medium,
    minWidth: 50,
    paddingHorizontal: 0,
    paddingVertical: 2,
  },
  omitButtonText: {
    color: designSystem.colors.primaryDark,
    fontSize: 14,
    fontWeight: designSystem.typography.body.fontWeight as any,
  },
  saveButton: {
    borderRadius: 50,
    minWidth: 50,
    paddingHorizontal: 0,
    paddingVertical: 2,
  },
  saveButtonText: {
    color: designSystem.colors.white,
    fontSize: 14,
    fontWeight: designSystem.typography.body.fontWeight as any,
  },
  activeButtonText: {
    color: designSystem.colors.primaryDark,
  },
  disabledButtonText: {
    color: "#9b9a9c",
  },
});

export default MeditationScreen;
