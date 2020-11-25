import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../constants/Colors";

export default function Doctor(props: any) {
  return (
    <View style={styles.item}>
      <Image style={[styles.image]} source={props.uri} />

      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.speciality}>{props.speciality}</Text>

        <View style={[styles.rating_container]}>
          <Ionicons
            style={[styles.star]}
            name="md-star"
            size={24}
            color={colors.yellow}
          />
          <Ionicons
            style={[styles.star]}
            name="md-star"
            size={24}
            color={colors.yellow}
          />
          <Ionicons
            style={[styles.star]}
            name="md-star"
            size={24}
            color={colors.yellow}
          />
          <Ionicons
            style={[styles.star]}
            name="md-star"
            size={24}
            color={colors.yellow}
          />
          <Ionicons
            style={[styles.star]}
            name="md-star"
            size={24}
            color={colors.yellow}
          />

          <Text style={styles.rating}>{props.rating}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignItems: 'center',
    width: "100%",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  rating_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
  },
  name: {
    fontWeight: '600',
  },
  speciality: {
    color: colors.green,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  rating: {
    color: 'gray',
    marginLeft: 5,
    fontWeight: '600',
  },
  star: {
    paddingRight: 5,
  },
});
