import React from 'react'
import {Component} from 'react'
import {View, StyleSheet, Text, Linking,TouchableOpacity} from 'react-native'

export default class LinearEquation extends Component{
  render(){
    return(
      <View style = {styles.container}>
      <Text onPress={()=>Linking.openURL("https://www.mathsisfun.com/algebra/linear-equations.html")}>Click For Linear equations </Text>
     
      <View>
       <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Homescreen')}>
              <Text style={{ fontSize:20, color:"black"}}>Back</Text>
        </TouchableOpacity>
      </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})