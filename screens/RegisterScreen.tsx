import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../constants/Colors";

export default function WelcomeScreen() {
  const [fullName, setFullName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  return (
    <ScrollView contentContainerStyle={{justifyContent: 'space-evenly', alignItems: "center",}} style={[styles.screen]}>
      <View style={[styles.flex, styles.photo_container]}>
        <View style={[styles.flex, styles.user_photo]}>
          <AntDesign name="user" size={40} color="gray" />
          <Text style={styles.add_photo}>ADD PHOTOS</Text>
        </View>
      </View>

      <View style={[styles.form]}>
        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Full Name</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            placeholder="Your Full Name"
            placeholderTextColor="gray"
            maxLength={50}
          />
        </View>

        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Birthday</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={(text) => setBirthday(text)}
            value={birthday}
            placeholder="dd/mm/yyyy"
            placeholderTextColor="gray"
            autoCompleteType={"cc-exp"}
          />
        </View>

        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Email</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Your Email"
            placeholderTextColor="gray"
            maxLength={50}
            autoCompleteType={"email"}
          />
        </View>

        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Phone Number</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
            placeholder="Your Phone Number"
            placeholderTextColor="gray"
            maxLength={20}
            autoCompleteType={"tel"}
          />
        </View>

        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Location/Address</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={(text) => setAddress(text)}
            value={address}
            placeholder="Your Location"
            placeholderTextColor="gray"
            maxLength={50}
          />
        </View>
      </View>

      <View style={[styles.button_container]}>
        <TouchableOpacity onPress={() => {}}>
          <View style={[styles.flex, styles.button]}>
            <Text style={[styles.button_text]}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flexDirection: 'column',
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  flex: {
    alignItems: "center",
    justifyContent: "center",
  },
  photo_container: {
    height: 200
  },
  user_photo: {
    minHeight: 140,
    minWidth: 140,
    borderRadius: 120,
    borderColor: '#ccc',
    borderStyle: 'dotted',
    borderWidth: 1
  },
  add_photo: {
    color: 'gray',
    padding: 5,
    fontSize: 15,
    fontWeight: '600'
  },
  form: {
    height: 500,
    width: "100%",
    justifyContent: "space-between",
  },
  input_label: {
    fontSize: 15,
    fontWeight: '500',
    paddingBottom: 15,
  },
  input_container: {
    display: "flex",
    flexDirection: "column",
    height: 50,
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
    paddingTop: 70,
    paddingBottom: 40,
    width: "100%",
    justifyContent: "center",
  },
  button: {
    backgroundColor: colors.green,
    width: "100%",
    borderRadius: 30,
    paddingVertical: 15,
  },
  button_text: {
    fontSize: 18,
    fontWeight: "600",
    color: 'white',
  }
});
