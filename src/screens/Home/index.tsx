import React,{useEffect,useContext, useState} from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native';
import { PokemonContext } from '../../store/pokemon/PokemonContext';
import Card from './components/Card';
import styles from './_styles';

const SPRITE_URL  = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
export default function HomeScreen() {
  const { pokemonList, loading, error, fetchPokemonList } = useContext(PokemonContext);
  const [refreshing, setRefreshing] = useState(false)


  useEffect(()=>{
    fetchPokemonList();
  },[])

  const handleLoadMore = () => {
    if (!loading) {
      fetchPokemonList();
    }
  };

  const handleRefresh = () =>{
    setRefreshing(true);
    fetchPokemonList(true);
    !loading && setRefreshing(false)
  }


  const getPokemonSprite = (pokemonUrl) => {
    const pokemonId = pokemonUrl.split('/')[6];
    return `${SPRITE_URL}${pokemonId}.png`;
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator />;
  };

  const renderItem = ({ item }) => (
    <Card
      uri={getPokemonSprite(item.url)}
      name={item.name}
      types={item.types}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        numColumns={2}
      />
    </View>
    
  );
}


