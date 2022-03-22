import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// You can import from local files
import Homescreen from './screens/Homescreen';
import Formscreen from './screens/Formscreen';
import Mathematicscreen from './screens/Mathematicscreen';
import NewTopicScreen from './screens/NewTopicScreen';
import Subjectscreen from './screens/Subjectscreen';
import Topicscreen from './screens/Topicscreen'
import Sciencescreen from './screens/Sciencescreen'
import Commercescreen from './screens/Commercescreen'
import HyperlinkScreen from './screens/HyperlinkScreen'
import Surdscreen from './screens/Surdscreen'
import Probabilityscreen from './screens/Probabilityscreen'
import Scatterplotscreen from './screens/Scatterplotscreen'
import LinearEquationscreen from './screens/LinearEquationscreen'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Homescreen: Homescreen,
  Formscreen: Formscreen,
  Mathematicscreen: Mathematicscreen,
  NewTopicScreen: NewTopicScreen,
  Subjectscreen: Subjectscreen,
  Topicscreen: Topicscreen,
  Sciencescreen: Sciencescreen,
  Commercescreen: Commercescreen,
  HyperlinkScreen: HyperlinkScreen,
  Surdscreen:Surdscreen,
  Probabilityscreen:Probabilityscreen,
  Scatterplotscreen:Scatterplotscreen,
  LinearEquationscreen:LinearEquationscreen
});

const AppContainer = createAppContainer(AppNavigator);