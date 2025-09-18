import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import { theme } from "../theme/theme";
import CustomHeader from "../components/CustomHeader";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import LibraryScreen from "../screens/LibraryScreen";
import MeditationScreen from "../screens/MeditationScreen";
import ResultScreen from "../screens/ResultScreen";
const Stack = createStackNavigator();

const AppNavigator = () => {
  const renderCustomHeader = (routeName: string, navigation: any) => {
    const showBackButton = routeName !== "Home";
    return (
      <CustomHeader
        showBackButton={showBackButton}
        onBackPress={() => navigation.goBack()}
      />
    );
  };
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.onPrimary,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              header: () => renderCustomHeader("Home", navigation),
            })}
          />
          <Stack.Screen
            name="Library"
            component={LibraryScreen}
            options={({ navigation }) => ({
              header: () => renderCustomHeader("Library", navigation),
            })}
          />
          <Stack.Screen
            name="Meditation"
            component={MeditationScreen}
            options={({ navigation }) => ({
              header: () => renderCustomHeader("Meditation", navigation),
            })}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={({ navigation }) => ({
              header: () => renderCustomHeader("Result", navigation),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigator;
