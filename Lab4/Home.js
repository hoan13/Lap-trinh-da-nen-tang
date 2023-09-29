import React from "react";
import { View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({navigation}) => {

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Button
          title="Chuyển màn hình bài 1"
          onPress={() => {
            navigation.navigate("bai1");
          }}
        />

        <Button
          title="Chuyển màn hình bài 2"
          onPress={() => {
            navigation.navigate("bai2");
          }}
        />
        <Button
          title="Chuyển màn hình bài 3 "
          onPress={() => {
            navigation.navigate("bai3");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
