import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/Colors";

export default function WelcomeScreen() {
  return (
    <View style={[styles.screen, styles.flex]}>
      <View style={[styles.flex, styles.text_container]}>
        <Text style={styles.main_text}>Welcome</Text>
        <Text style={styles.secondary_text}>
          Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, t. Ut enim
          ad veni am, quis nostrud exercitation ullamco
        </Text>
      </View>

      <View style={[styles.button_container]}>
        <TouchableOpacity onPress={() => {}}>
          <View style={[styles.flex, styles.button]}>
            <Text style={[styles.button_text]}>Sign Up</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={[styles.flex, styles.button, styles.button_second]}>
            <Text style={[styles.button_text, styles.text_second]}>Login</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.urgent]}>URGENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.green,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingVertical: "15%",
  },
  flex: {
    alignItems: "center",
    justifyContent: "center",
  },
  text_container: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  main_text: {
    color: "rgb(227, 255, 229)",
    fontSize: 34,
    fontWeight: "600",
    textShadowColor: colors.greenShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  secondary_text: {
    padding: 20,
    color: "rgb(183, 255, 195)",
    fontSize: 18,
    fontWeight: "500",
    textShadowColor: colors.greenShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textAlign: "center",
  },
  button_container: {
    height: "30%",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 30,
    paddingVertical: 18,
  },
  button_second: {
    backgroundColor: colors.green,
    borderColor: colors.lightGreen,
    borderWidth: 3,
    paddingVertical: 15,
  },
  button_text: {
    fontSize: 18,
    color: colors.green,
  },
  text_second: {
    color: colors.lightGreen,
    textShadowColor: colors.greenShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  urgent: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: colors.lightGreen,
    textShadowColor: "rgb(7, 117, 53)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});
