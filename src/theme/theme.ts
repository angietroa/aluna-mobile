import { MD3LightTheme } from "react-native-paper";
import { designSystem } from "../config/designSystem";

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: designSystem.colors.primaryDark,
    primaryContainer: designSystem.colors.primaryLight,
    secondary: designSystem.colors.secondary,
    secondaryContainer: designSystem.colors.accent,
    surface: designSystem.colors.surface,
    background: designSystem.colors.background,
    error: designSystem.colors.error,
    onPrimary: designSystem.colors.white,
    onSecondary: designSystem.colors.primaryDark,
    onSurface: designSystem.colors.text.primary,
    onBackground: designSystem.colors.text.primary,
    onError: designSystem.colors.white,
  },
  fonts: {
    ...MD3LightTheme.fonts,
    default: {
      fontFamily: designSystem.typography.fontFamily,
    },
  },
};
