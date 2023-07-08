import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from '../../interface/Pokemon';


interface PokemonContextValue {
  pokemonList: Pokemon[];
  loading: boolean;
  error: string | null;
  fetchPokemonList: () => void;
}

const URL = 'https://pokeapi.co/api/v2/pokemon'
export const PokemonContext = createContext<PokemonContextValue | undefined>(undefined);

const LIMIT = 20;
export const PokemonProvider: React.FC = ({ children }) => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [offset, setOffset] = useState<number>(0);
    
    const [refreshing, setRefreshing] = useState<boolean>(false);



    const fetchPokemonList = async (refresh = false) => {
        setLoading(true);
        setError(null);
      
        try {
          const newOffset = refresh ? 0 : offset;
          const response = await axios.get(`${URL}?offset=${newOffset}&limit=${LIMIT}`);
          const newPokemonList = response.data.results;
      
          const pokemonDetailsPromises = newPokemonList.map(async (pokemon) => {
            const detailsResponse = await axios.get(pokemon.url);
            const types = detailsResponse.data.types.map((type) => type.type.name);
            return {
              ...pokemon,
              types,
            };
          });
      
          const updatedPokemonList = await Promise.all(pokemonDetailsPromises);
      
          if (refresh) {
            setPokemonList(updatedPokemonList);
            setOffset(LIMIT);
          } else {
            setPokemonList((prevList) => [...prevList, ...updatedPokemonList]);
            setOffset((prevOffset) => prevOffset + LIMIT);
          }
        } catch (error) {
          setError('Error fetching Pokémon list');
        } finally {
          setLoading(false);
          setRefreshing(false);
        }
      };
      
      
      
    

    useEffect(() => {
        fetchPokemonList();
    }, []);

    const contextValue: PokemonContextValue = {
        pokemonList,
        loading,
        error,
        fetchPokemonList,
    };

    return <PokemonContext.Provider value={contextValue}>{children}</PokemonContext.Provider>;
};
