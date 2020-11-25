import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../constants/Colors";
import Doctor from "../components/Doctor";
import images from "../assets/images";

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
      }}
      style={[styles.screen]}
    >
      <View style={[styles.flex, styles.container]}>
        <View style={[styles.flex, styles.check]}>
          <AntDesign name="check" size={40} color={colors.green} />
        </View>
      </View>

      <View style={[styles.header_container]}>
        <Text style={[styles.header_text]}>Your Request Has Been Approved</Text>
        <Text style={[styles.header_subtext]}>
          Lorem ipsum dolor sit amet,consectetur adipiscing elit, t. Ut enim ad
          minim venia m, quis nostrud exertation uliamco
        </Text>
      </View>

      <Text style={[styles.details_title]}>Request Details</Text>

      <View style={[styles.form]}>
        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Name</Text>
          <Text style={[styles.details]}>Jojon Suehendra</Text>
        </View>

        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Desease</Text>
          <Text style={[styles.details]}>Sore Eyes</Text>
        </View>

        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Your location</Text>
          <Text style={[styles.details]}>St. Broxlyn 212</Text>
        </View>

        <View style={[styles.input_container]}>
          <Text style={[styles.input_label]}>Description</Text>
          <Text style={[styles.details]}>
            Aku ingin menjadi sentitik awan kecil di langint bersama mentari
            yaga hah
          </Text>
        </View>
      </View>

      <Text style={styles.doctor}>Doctor</Text>
      <Doctor
        name="Dudung Sokmati"
        speciality="Eye Specialist"
        rating="4.9"
        uri={images.DudungSokmati}
      />

      <View style={[styles.button_container]}>
        <TouchableOpacity onPress={() => {}}>
          <View style={[styles.flex, styles.button]}>
            <Text style={[styles.button_text]}>Confirm</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={[styles.flex, styles.button_transparent]}>
            <Text style={[styles.button_text_second]}>Cancel Request</Text>
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
  check: {
    borderColor: colors.green,
    borderWidth: 2,
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header_container: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  header_text: {
    fontWeight: "600",
    paddingHorizontal: 50,
  },
  header_subtext: {
    color: "gray",
    fontSize: 14,
    padding: 20,
  },
  details_title: {
    alignSelf: "flex-start",
    color: colors.green,
    fontWeight: "600",
  },
  form: {
    width: "100%",
  },
  input_label: {
    fontSize: 15,
    fontWeight: "500",
    paddingTop: 15,
    paddingBottom: 5,
  },
  details: {
    color: "gray",
  },
  input_container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  doctor: {
    alignSelf: 'flex-start',
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 19,
    fontWeight: '700',
    color: colors.green,
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
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginTop: 20,
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
    color: colors.green,
  },
  button_text_second: {
    color: "gray",
  },
});
