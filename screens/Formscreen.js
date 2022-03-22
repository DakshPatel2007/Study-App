import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet, TextInput, SafeAreaView } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

export default class Formscreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      fontsLoaded: false,
      dropdownHeight: 40
  }
  }

  onPress
  render() {
    return (
      <View>
      <SafeAreaView>
      <TextInput style = {styles.input}
      onChangeText={subject => this.setState({          subject })}
                placeholder={"Subject"}
                placeholderTextColor="black">
      
      </TextInput>
      <TextInput style = {styles.input}
      onChangeText={topic => this.setState({            topic})} placeholder={"Topics"}
      placeholderTextColor="black">   
      
      </TextInput>
      <TextInput style = {styles.input}
      onChangeText={textbook => this.setState({            textbook})} placeholder={"Textbook"}
      placeholderTextColor="black">
      
      </TextInput>
      <TextInput style = {styles.input}
      onChangeText={pagereference => this.setState({pagereference})} placeholder={"Page Reference"}
      placeholderTextColor="black">
      
      </TextInput>
      </SafeAreaView>
       </View>
    )
  }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})