import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/Colors";

export default function WelcomeScreen() {
  return (
    <View style={[styles.screen]}>
      <Text style={styles.text}>Telemedicine</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: colors.green,
    paddingHorizontal: 20,
    paddingVertical: "15%",
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'sans-serif',
    fontWeight: '600',
  }
});
