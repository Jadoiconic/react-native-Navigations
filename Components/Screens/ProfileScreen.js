import { View, Text, Button } from "react-native";
import React from "react";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back to Home" />
    </View>
  );
}
