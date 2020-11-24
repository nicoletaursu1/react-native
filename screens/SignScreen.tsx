import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../constants/Colors";

export default function WelcomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={[styles.screen, styles.flex]}>
      <View style={[styles.flex, styles.text_container]}>
        <Text style={styles.text}>Telemedicine</Text>
      </View>

      <View style={[styles.form]}>
        <View style={[styles.input_container]}>
          <AntDesign name="user" size={24} color="white" />
          <TextInput
            style={[styles.input]}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder='Email Address'
            placeholderTextColor='white'

            maxLength={50}
          />
        </View>

        <View style={[styles.input_container]}>
          <AntDesign name="lock" size={24} color="white" />
          <TextInput
            style={[styles.input]}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder='Password'
            placeholderTextColor='white'
            secureTextEntry={true}
            maxLength={50}
          />
        </View>
      </View>

      <View style={[styles.button_container]}>
        <TouchableOpacity onPress={() => {}}>
          <View style={[styles.flex, styles.button]}>
            <Text style={[styles.button_text]}>Login</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={[styles.flex, styles.button, styles.button_second]}>
            <Text style={[styles.button_text, styles.text_second]}>SIGNUP</Text>
          </View>
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
    paddingHorizontal: 25,
  },
  text: {
    color: "white",
    fontSize: 35,
    fontFamily: "sans-serif",
    fontWeight: "600",
  },
  flex: {
    alignItems: "center",
    justifyContent: "center",
  },
  text_container: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
  },
  input_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    paddingHorizontal: 20,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    padding: 10,
    width: '100%',
    color: 'white'
  },
  button_container: {
    height: "30%",
    width: "100%",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 30,
    paddingVertical: 18,
  },
  button_second: {
    backgroundColor: colors.green,
    paddingVertical: 15,
  },
  button_text: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.green,
  },
  text_second: {
    color: colors.lightGreen,
  },
});
