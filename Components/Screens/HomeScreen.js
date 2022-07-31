import { View, Button, Text } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Setting")}
        title="Go to Settings"
      />
    </View>
  );
}
