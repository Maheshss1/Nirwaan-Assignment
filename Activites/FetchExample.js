import React from 'react';
import { FlatList, ActivityIndicator, Text, View,StyleSheet,Image,TouchableOpacity, TouchableHighlight } from 'react-native';

export default class FetchExample extends React.Component {



  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=6d31d74501a94271bfdd844bc771d68b")
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.articles,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }


    return (
      <View style={styles.container}>

          <View style = {[styles.tabs, styles.header]}>
            <Text style = {styles.tabs_inside}>Feed</Text>
            <Text style = {styles.tabs_inside}>Favorite</Text>
          </View>


        <View>

                <FlatList data={this.state.dataSource}
                          renderItem={({item})=>
                          <TouchableHighlight onPress={()=>this.props.navigation.navigate("FullNews", {url:item.url})}>
                          <News title= {item.title}
                                url = {item.url}
                                urlToImage = {item.urlToImage}
                                content = {item.content}/>
                          </TouchableHighlight>}

                />
        </View>

      </View>
      )

  }
}

function News(props){
  return (
    <View style={styles.section}>
        <Image
        style={{ height:180, alignSelf:"stretch"}}
        source={{uri:props.urlToImage}} />

        <View style={styles.news}>
          <View style ={styles.headlineContainer}>
            <Text style={styles.headline}>{props.title}</Text>
            <TouchableOpacity style={styles.favButton}>
                <Text color="blue">Fav</Text>
            </TouchableOpacity>

          </View>
          <Text style={{margin:5, fontFamily:"Times New Roman"}}>
              {props.content}
          </Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    header: {
      alignItems:"center",
      backgroundColor: "#0391C3",
      padding: 10
    },
    tabs: {
      flexDirection: "row",
      alignSelf:"stretch",
      paddingTop: 5,
      justifyContent: "space-around"

    },
    tabs_inside: {
        color:"white"

    },
    section: {
        padding: 5,
        marginBottom: 20
    },
    news:{
      padding: 5
    },
    headlineContainer: {
      flexDirection:"row",
    },
    headline:{
      flex:1,
      fontSize: 16,
      color:"black"
    },
    favButton:{
      backgroundColor: "pink",
      padding: 10,
      alignSelf:"flex-end"
    },
    text:{
      color:"white",
      fontSize: 25
    }
});
