import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import colors from "../constants/Colors";

export default function HomeScreen() {
  const [fullName, setFullName] = useState("");
  const [desease, setDesease] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
      style={[styles.screen]}
    >
      <View style={[styles.flex, styles.container]}>
        <TouchableOpacity onPress={() => {}}>
          <View style={[styles.flex, styles.button_transparent]}>
            <Text style={[styles.button_text, styles.button_text_first ]}>
              VERY URGENT
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={[styles.form]}>
        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Name</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            placeholder="Your Name"
            placeholderTextColor="gray"
            maxLength={50}
          />
        </View>

        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Desease</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={(text) => setDesease(text)}
            value={desease}
            placeholder="What is your illness"
            placeholderTextColor="gray"
            autoCompleteType={"cc-exp"}
          />
        </View>

        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Your location</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={(text) => setAddress(text)}
            value={address}
            placeholder="Your Location"
            placeholderTextColor="gray"
            maxLength={50}
          />
        </View>

        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Description (Optional)</Text>
          <TextInput
            style={[styles.input, { height: 90 } ]}
            onChangeText={(text) => setDescription(text)}
            value={description}
            placeholder="Describe Here"
            placeholderTextColor="gray"
            maxLength={255}
            multiline
          />
        </View>
      </View>

      <View style={[styles.button_container]}>
        <TouchableOpacity onPress={() => {}}>
          <View style={[styles.flex, styles.button]}>
            <Text style={[styles.button_text]}>Request</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  flex: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: 150,
  },
  form: {
    height: 450,
    width: "100%",
    justifyContent: "space-between",
  },
  input_label: {
    fontSize: 15,
    fontWeight: "500",
    paddingBottom: 15,
  },
  input_container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    color: "black",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  button_container: {
    paddingTop: 30,
    paddingBottom: 30,
    width: "100%",
    justifyContent: "center",
  },
  button_transparent: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 30,
    borderColor: colors.green,
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  button: {
    backgroundColor: colors.green,
    width: "100%",
    borderRadius: 30,
    paddingVertical: 15,
  },
  button_text: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
  },
  button_text_first: {
    fontSize: 14,
    color: colors.green
  }
});
