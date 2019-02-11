import React from 'react';
import { FlatList, ActivityIndicator, Text, View,StyleSheet,Image,TouchableOpacity } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import FetchExample from './Activites/FetchExample';
import FullNews from './Activites/FullNews';
import {createStore} from 'redux';
import {Provider} from 'react-redux'



export default class App extends React.Component {

  render(){
    return (
          <AppContainer />
      )
  }
}

const AppStackNavigator = createStackNavigator({
    FetchExample: FetchExample,
    FullNews: FullNews
},
{
defaultNavigationOptions:{
  title:"News App",
  headerTitleStyle:{color:"white", flex:1,textAlign:"center", fontWeight:"none"},
  headerStyle:{
    backgroundColor: "#0391C3",
    elevation: 0,
    shadowOpacity:0

  }
}
});

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent:"center",
      alignItems:"center"
    },

});
