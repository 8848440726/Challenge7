import React,{Component} from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from 'react-native';
export default class App extends Component{
  render(){
    return(
      <View  style={styles.container}>
        <ImageBackground source={require('./assets/bg1.jpg')}
        style={styles.backgroundimage}>
          <Image source={require("./assets/logo1.jpg")}
          style={styles.logo}></Image>
          <Text style={styles.text}>PHILIPPINES UNIVERSITY</Text>
          <TextInput style={styles.inputview}
          placeholder='Username'
          placeholderTextColor={'red'}></TextInput>
          <TextInput style={styles.inputview}
          placeholder='Password'
          placeholderTextColor={'white'}
          secureTextEntry={true}></TextInput>
          <TouchableHighlight style={styles.button}
          onPress={''}
          underlayColor={'transparent'}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
height:'100%',
width:'100%'
  },
  backgroundimage:{
    height:'100%',
    width:"100%",
    alignItems:'center',
    justifyContent:'center'
  },
  logo:{
    height:100,
    width:100
  },
  text:{
    fontSize:22,
    fontWeight:'bold',
    color:'black'
  },
  inputview:{
    height:55,
    width:'80%',
    borderWidth:1,
    marginTop:40,
    paddingLeft:20,
    borderColor:'green'
  },
  button:{
    width:'40%',
    height:40,
    backgroundColor:'green',
    borderRadius:8,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
  },
  buttontext:{
    fontSize:18,
    color:'white',
    fontWeight:'bold'
  }

})