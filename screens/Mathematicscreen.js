import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class Mathematicscreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Mathematics </Text> 
      <TouchableOpacity 
      style={styles.topicButton} 
      onPress={() => this.props.navigation.navigate('HyperlinkScreen')}>
      <Text> Measurement </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.topicButton} 
      onPress={() => this.props.navigation.navigate('Surdscreen')}>
      <Text> Indices and Surds </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topicButton} 
      onPress={() => this.props.navigation.navigate('Probabilityscreen')}>
      <Text> Probability </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topicButton} 
      onPress={() => this.props.navigation.navigate('Scatterplotscreen')}>
      <Text>  Single Varible and Bivariate statistics </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topicButton} 
      onPress={() => this.props.navigation.navigate('LinearEquationscreen')}>
      <Text> Expressions, equations and linear equations </Text>
      </TouchableOpacity>

      
     
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Homescreen')}>
              <Text style={{ fontSize:20, color:"black"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
    padding: 10,
    //marginTop: 5,
  },
    buttons: {
      flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    width: 150,
    height: 50,
    backgroundColor: "turquoise"
  },
    topicButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 10,
      padding: 5,
      margin: 12,
      width: 300,
      backgroundColor: 'turquoise'

    },
    text: {
    alignSelf: 'center',
    backgroundColor: "tomato",
    fontWeight: 'bold',
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 5,
    fontSize: 16
  },
});