import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { designSystem } from "../config/designSystem";
import { logoXml } from "../assets/svgConstants";

const LoginScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        keyboardOpeningTime={250}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        style={styles.scrollView}
      >
        <SvgXml xml={logoXml} width={226} height={230} style={styles.logo} />

        <Text style={[styles.h3Text, { marginTop: 30 }]}>
          ¿Es tu primera vez visitando la aplicación? Crea tu cuenta aqui
        </Text>

        <View style={styles.inputsContainer}>
          <TextInput
            label="Correo"
            mode="outlined"
            style={styles.input}
            theme={{
              colors: {
                primary: designSystem.colors.primaryDark,
                outline: designSystem.colors.primaryDark,
                onSurfaceVariant: designSystem.colors.primaryDark,
                text: designSystem.colors.primaryDark,
                onSurface: designSystem.colors.primaryDark,
              },
            }}
          />
          <TextInput
            label="Contraseña"
            mode="outlined"
            secureTextEntry
            style={styles.input}
            theme={{
              colors: {
                primary: designSystem.colors.primaryDark,
                outline: designSystem.colors.primaryDark,
                onSurfaceVariant: designSystem.colors.primaryDark,
                text: designSystem.colors.primaryDark,
                onSurface: designSystem.colors.primaryDark,
              },
            }}
          />
          <TextInput
            label="Repetir contraseña"
            mode="outlined"
            secureTextEntry
            style={styles.input}
            theme={{
              colors: {
                primary: designSystem.colors.primaryDark,
                outline: designSystem.colors.primaryDark,
                onSurfaceVariant: designSystem.colors.primaryDark,
                text: designSystem.colors.primaryDark,
                onSurface: designSystem.colors.primaryDark,
              },
            }}
          />
        </View>

        <Button
          mode="contained"
          onPress={() => navigation.navigate("Home")}
          style={[styles.button, { marginTop: 10 }]}
          buttonColor={designSystem.colors.primaryDark}
        >
          Crear cuenta
        </Button>

        <Text style={[styles.h3Text, { marginTop: 12, textAlign: "center" }]}>
          o
        </Text>

        <Text style={[styles.h3Text, { marginTop: 12, textAlign: "center" }]}>
          ¿Ya tienes cuenta?
        </Text>

        <Button
          mode="contained"
          onPress={() => {}}
          style={[styles.button, { marginTop: 6 }]}
          buttonColor={designSystem.colors.primaryDark}
        >
          Login
        </Button>
      </KeyboardAwareScrollView>
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
    padding: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  logo: {
    marginTop: 0,
  },
  h3Text: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24,
    color: designSystem.colors.text.primary,
    textAlign: "center",
  },
  inputsContainer: {
    width: "100%",
    gap: 1,
    marginTop: 40,
  },
  input: {
    width: "100%",
  },
  button: {
    width: "100%",
    borderRadius: designSystem.borderRadius.medium,
  },
});

export default LoginScreen;
