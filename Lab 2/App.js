import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyTextComp from './MyTextcomp';

class HomePage extends Component {

  state = {

    myState: 'Trang thai 1'

  }

  updateText = () => {
    if (this.state.myState == 'Trang thai 1') {
      this.setState({ myState: 'Trang thai 2' })

    }
    else if (this.state.myState == 'Trang thai 2') {
      this.setState({ myState: 'Trang thai 3' })
    }
    else if (this.state.myState == 'Trang thai 3') {
      this.setState({ myState: 'Trang thai 4' })
    } 
    else {
      this.setState({ myState: 'Trang thai 1' })
    }
    
  }


  render() {

    return (
      <View style={styles.container} >
        <Text style={styles.heading}>Hello</Text>
        <Text style={styles.text}>Hoang Quoc Hoan</Text>
        <Text style={styles.subTitle}>{this.state.myState}</Text>

        <Button
          onPress={this.updateText}
          title="Click me!"
          color="#841584"
        />

      <MyTextComp noidungText = 'code buoi 3'/>  

      <View style={styles.Myview}>
        <View style={styles.redbox}/>
        <View style={styles.blackbox}/>
        <View style={styles.bluebox}/>
      </View>

        <StatusBar style="auto" />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#97FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Myview: {
    padding: '1%',
    flexDirection:'column',
    width: 500,
    alignItems: 'center',
    height: 500
  },

  redbox:{
    flex: 1,
    width:150,
    margin:5,
    backgroundColor: '#FFE4B5'
  },
  blackbox:{
    flex: 1,
    width:150,
    margin:5,
    backgroundColor:'#436EEE'
    
  },
  bluebox:{
    flex: 2,
    width:150,
    margin:5,
    backgroundColor: '#54FF9F'
  },
  heading: {
    color: '#ffffff',
    fontSize: 40
  },
  text: {
    fontSize: 30
  },
  subTitle: {
    fontSize: 20,
    color: '#dd0000'
  }
});


export default HomePage;

