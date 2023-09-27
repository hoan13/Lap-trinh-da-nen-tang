import { View, Text,FlatList,Button } from "react-native";

import React from "react";

const ProfileScreen = ({ navigation, route }) => {

  return (
    <View>
      <Text
        style={{ fontSize: 50, textAlign: "center", justifyContent: "center" }}
      >
        ProfileScreen
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Thông tin SV:
      </Text>
      <Text>
        {route.params.name} - {route.params.tuoi} - {route.params.mssv}
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Thông tin sv thêm bên home :
      </Text>
      <Text>ten1: "Hoàn", tuoi1: 21, mssv1: "PH30066",</Text>
      <Button
        title="Chuyển màn hình"
        onPress={() => {
          navigation.navigate("Home", {
            ten1: "Hoàn",
            tuoi1: 21,
            mssv1: "PH30066",
          });
        }}
      />
    </View>
  );
};  

export default ProfileScreen;
