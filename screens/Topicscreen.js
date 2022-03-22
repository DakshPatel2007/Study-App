import React from 'react';
import { Text, View, Component, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from "../components/AppHeader"

export default class Topicscreen extends React.Component {
  render(){
  return (
    <View>
    <AppHeader/>
     <View> 
     
     <View style = {styles.buttonsContainer}>
<TouchableOpacity style = {styles.buttons}>
    <Text>Mathematics: Single variable and bivariate data  </Text>
</TouchableOpacity>

<TouchableOpacity style = {styles.buttons}> 
<Text>Science: Ionic compounds and covalent compounds  </Text>
</TouchableOpacity>

<TouchableOpacity style = {styles.buttons}>
<Text>Commerce: Running a buisness </Text>
</TouchableOpacity>

<TouchableOpacity style = {styles.buttons}
onPress={() => this.props.navigation.navigate('NewTopicScreen')}>
<Text> + </Text>
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

  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 0,
  
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    width: 300,
    height: 50,
    columnGap: 50
  }
});