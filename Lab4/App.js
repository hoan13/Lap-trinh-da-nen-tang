import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Lab4 from "./Lab4";
import Lab4_b2 from "./Lab4_b2";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Lab4B3 from "./Lab4B3";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="bai1" component={Lab4} />
        <Stack.Screen name="bai2" component={Lab4_b2} />
        <Stack.Screen name="bai3" component={Lab4B3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
