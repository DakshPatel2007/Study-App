import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Study App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'cyan',
    borderWidth: 0.5,
    borderRadius: 25
  },
  text:{
    color: 'black',
    padding: 5,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});



