import React,{useState} from "react";
import { SafeAreaView,View,FlatList, StyleSheet, Text} from "react-native";
import music_data from './music-data.json'
import SongCard from './components/SongCard'
import SearchBar from './components/SearchBar'


function App(){
  const [list,setList] =useState(music_data)

  const renderSong = ({item}) => <SongCard song={item}/>;

  const renderSeperator=() =><View style={styles.seperator}></View>

  const handleSearch = text => {
    const filteredList =music_data.filter(song =>{
      const searchedText= text.toLowerCase();
      const currentTitle=song.title.toLowerCase();
      console.log(currentTitle.indexOf(searchedText) >-1)
      return currentTitle.indexOf(searchedText) >-1
    })
    setList(filteredList);
  }
  return(
    <View style={styles.container} >
      <SearchBar onSearch={handleSearch}/>
    <FlatList 
    keyExtractor={item=> item.id}
    data={list}
    renderItem={renderSong}
    ItemSeparatorComponent={renderSeperator}></FlatList>
    </View>
  )

}

export default App

const styles= StyleSheet.create({
  container:{
    flex:1,
  },
  seperator:{
    flex:1,
    borderWidth:1,
  borderColor:'#e0e0e0'}
  
})