import React from 'react';
import { Text, View, Component, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from "../components/AppHeader"

export default class Homescreen extends React.Component {
constructor(){
  super();
  this.state={
    like:0,
    dislike:0
  }
}

  render(){
  return (
    <View style = {styles.container}>
    <AppHeader/>
     <View>
     <Text style = {styles.textContainer}>Subjects to study</Text> 
     
     <View style = {styles.buttonsContainer}>
<TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Mathematicscreen')}>
              <Text style={styles.buttonText}>Mathematics</Text>
            </TouchableOpacity>

<TouchableOpacity style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Sciencescreen')}> 
<Text style={styles.buttonText}>Science </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Commercescreen')}>
<Text style={styles.buttonText}>Commerce </Text>
</TouchableOpacity>

    <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
    
    </View>
    </View>
    </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
  backgroundColor: "gold",
  padding: 15.5

  },

  textContainer: {
  flex: 10,
  alignSelf: 'center',
  textAlign: 'center',
  backgroundColor: "tomato",
  borderWidth: 0.5,
  borderRadius: 8,
  width: 250,
  padding: 5,
  margin: 30,
  fontSize: 18,
  fontWeight: 500
  },

  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 0,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    margin: 7,
    width: 300,
    height: 50,
    backgroundColor: "turquoise",
  },
  buttonText: {
    fontSize: 20,
    color: "maroon",
    
  }
});