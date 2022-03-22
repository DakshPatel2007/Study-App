import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class Sciencescreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>  Science </Text> 
      <TouchableOpacity 
      style={styles.topicButton} 
      onPress={() => this.props.navigation.navigate('Subjectscreen')}>
      <Text> Cells </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.topicButton} 
      onPress={() => this.props.navigation.navigate('Subjectscreen')}>
      <Text> Ionic compounds </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topicButton} 
      onPress={() => this.props.navigation.navigate('Subjectscreen')}>
      <Text> Infection and Response </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topicButton} 
      onPress={() => this.props.navigation.navigate('Subjectscreen')}>
      <Text>Waves </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topicButton} 
      onPress={() => this.props.navigation.navigate('Subjectscreen')}>
      <Text> Stars </Text>
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
    marginTop: 10,
  },
    buttons: {
      flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
    height: 50,
  },
    topicButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 10,
      padding: 5,
      margin: 7,
      width: 300

    },
    text: {
    alignSelf: 'center',
    backgroundColor: "lightgreen",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 5,
  },
});