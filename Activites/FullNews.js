import React from 'react';
import {  Text, View,StyleSheet, WebView } from 'react-native';

export default class FullNews extends React.Component {

  render(){
    const {params} = this.props.navigation.state
    return (
        <View style= {styles.container}>
          <WebView source ={{uri:params.url}} />
        </View>
      )
  }
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems:"stretch"
    },

});
