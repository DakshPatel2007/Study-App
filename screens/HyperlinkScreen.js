import React from 'react'
import {Component} from 'react'
import {View, StyleSheet, Text, Linking,TouchableOpacity, Image} from 'react-native'

export default class HyperLink extends Component{
  render(){
    return(
      <View style = {styles.container}>
      <Image style = {styles.imageStyle}
      source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7Iks2UON6iNwiKoIPmDrS88a0eN6-l09MA&usqp=CAU",/>
      <Text onPress={()=>Linking.openURL("https://www.mathsisfun.com/measure/unit-conversion-method.html")}>Click For Conversion </Text>
     
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
  },
  buttons: {
    borderWidth: 1,
    borderRadius: 15, 
    padding: 5,
    margin: 10,
  },
  imageStyle:{
    width: 40,
    height: 40
  }
})