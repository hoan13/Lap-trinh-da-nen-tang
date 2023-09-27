import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class HttpExample extends Component {
  state = {
    data: ''
  }
  componentDidMount = async ()=>{
    await fetch("http:/jsonplaceholder.typicode.com/posts/1", { method: "GET" })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        this.setState({
          data: responseJson
        })

      }).catch((error)=>{
        console.log(error);
      });
  
};render(){
  return(
    <View>
      <Text>
        {this.state.data.body}
      </Text>
    </View>
  )
}
}
export default HttpExample