import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import * as Animatable from "react-native-animatable";

class Lab4B3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false,
    };
  }

  handleAnimate = () => {
    this.setState({ animated: !this.state.animated });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Chạy animation" onPress={this.handleAnimate} />
        <Animatable.View
          animation={this.state.animated ? "bounceIn" : null}
          duration={3000}
          style={{
            width: 200,
            height: 200,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            marginTop:50
          }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>Animated View</Text>
        </Animatable.View>
        {/* <Animatable.View
          animation={this.state.isMoving ? 'slideInRight' : null}
          duration={500}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>Chuyển động ngang</Text>
        </Animatable.View> */}
      </View>
    );
  }
}

export default Lab4B3;
