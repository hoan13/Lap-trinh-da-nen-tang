
import { Text, View,Image,StyleSheet,ScrollView } from 'react-native'
import React, { Component } from 'react'
import ImageExample from './ImageExample.js'

export class ScrollViewEXample extends Component {
  state = {
    names: [
      { adj: require("../Lab3/park.png"), name: "Devin", phone: 1 },
      { adj: require("../Lab3/park.png"), name: "Dan", phone: 2 },
      { adj: require("../Lab3/park.png"), name: "Dominic", phone: 3 },
      { adj: require("../Lab3/park.png"), name: "Jackson", phone: 4 },
      { adj: require("../Lab3/park.png"), name: "James", phone: 5 },
      { adj: require("../Lab3/park.png"), name: "Joel", phone: 6 },
      { adj: require("../Lab3/park.png"), name: "John", phone: 7 },
      { adj: require("../Lab3/park.png"), name: "Jillian", phone: 8 },
      { adj: require("../Lab3/park.png"), name: "Jimmy", phone: 9 },
      { adj: require("../Lab3/park.png"), name: "Julie", phone: 10 },
    ],
  };
  render() {
    return (
      <View>
        <ScrollView>
          {this.state.names.map((item, index) => (
            <View key={item.phone} style={style.item}>
              <Image source={item.adj} style={style.img_anh} />
              <Text>{item.name}</Text>
            </View>
          ))}
          <ImageExample />
        </ScrollView>
      </View>
    );
  }
}

export default ScrollViewEXample
const style = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 30,
    magin: 2,
    borderColor: "#f20320",
    borderWidth: 2,
    backgroundColor: "#d2f7f1",
  },
    img_anh: {
      width: 30,
      height: 30,
      marginRight:30,
    },
});
