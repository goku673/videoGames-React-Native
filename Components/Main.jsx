import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Linking} from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { traerJuegosPorCategoria,traerJuegosPorPlataforma,traerJuegos} from './Redux/Slice';

const Main = () => {
  const dispatch =  useDispatch();
  const allGames = useSelector(state => state.allGames.games);
  const filteredGames = useSelector(state => state.allGames.filteredGames);
  
 
  const [category, setCategory] = useState('');

  useEffect ( () => {
    dispatch(traerJuegos());
  },[dispatch]);

  useEffect ( () => {
      if(category) {
         dispatch(traerJuegosPorCategoria(category));
      }
  },[dispatch,category])
  
  const categories = [
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn-based",
    "first-person",
    "third-person",
    "top-down",
    "tank",
    "space",
    "sailing",
    "side-scroller",
    "superhero",
    "permadeath",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
    "action",
    "military",
    "martial-arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts"
  ];
  
 const games = category ? filteredGames : allGames;
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.short_description}</Text>
      <Text>Genre: {item.genre}</Text>
      <Text>Platform: {item.platform}</Text>
      <Text style = {styles.playNow} onPress={() => Linking.openURL(item.game_url)}>Play Now</Text>
    </View>
  );

  return (
    <View style={styles.container}>
       <Picker selectedValue={category} onValueChange={(value) => setCategory(value)}>
        <Picker.Item label="All" value="" />
        {categories.map((category) => (
          <Picker.Item key={category} label={category} value={category} />
        ))}
      </Picker>
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 23,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  playNow : {
     color : 'blue',
     fontSize : 18,
     fontWeight : 'bold',
     marginTop : 10,
     padding :10, 

     textAlign : 'center',
     borderWidth :1 , 
     borderRadius : 5,
     borderColor : 'blue'
  }
});

export default Main;