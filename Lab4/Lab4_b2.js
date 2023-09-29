import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import { Animatable } from "react-native-animatable";
const Lab4_b2 = () => {
  const handlePress = () => {};

  const handlePress1 = () => {
    alert("TouchableWithoutFeedback was pressed!");
  };

  const [text, setText] = useState("Chào React Native!");
  const [animationType, setAnimationType] = useState("fadeIn"); // Hiệu ứng mặc định là fadeIn

  const changeTextAndAnimate = () => {
    setText("Xin chào bạn đã thay đổi văn bản!");
    setAnimationType("bounceIn"); // Chuyển đổi hiệu ứng khi thay đổi văn bản
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableHighlight onPress={handlePress} underlayColor="red">
        <View
          style={{
            marginVertical: "10%",
          }}
        >
          <Text>Press Me (TouchableHighlight)</Text>
        </View>
      </TouchableHighlight>

      <TouchableNativeFeedback
        onPress={handlePress}
        background={TouchableNativeFeedback.Ripple("green", true)}
      >
        <View
          style={{
            marginVertical: "10%",
          }}
        >
          <Text>Press Me (TouchableNativeFeedback)</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableWithoutFeedback onPress={handlePress1}>
        <View
          style={{
            marginVertical: "10%",
          }}
        >
          <Text>Press Me (TouchableWithoutFeedback)</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Lab4_b2;
