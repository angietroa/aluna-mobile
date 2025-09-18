import React from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { designSystem } from "../config/designSystem";
import { alunaXml } from "../assets/svgConstants";

interface CustomHeaderProps {
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const CustomHeader = ({
  showBackButton = false,
  onBackPress,
}: CustomHeaderProps) => {
  return (
    <Appbar.Header
      style={{
        backgroundColor: designSystem.colors.white,
        elevation: 0,
        shadowOpacity: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {showBackButton && (
        <Appbar.BackAction
          onPress={onBackPress}
          color={designSystem.colors.primaryDark}
          size={24}
        />
      )}
      <Appbar.Content title="" />
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <SvgXml xml={alunaXml} width={70} height={22} />
      </View>
      <View style={{ marginLeft: "auto", marginRight: 16 }}>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: designSystem.colors.primaryDark,
            borderWidth: 2,
            borderColor: designSystem.colors.background,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: designSystem.colors.background,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            A
          </Text>
        </View>
      </View>
    </Appbar.Header>
  );
};

export default CustomHeader;
