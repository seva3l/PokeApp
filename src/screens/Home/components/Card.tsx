import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PrimaryImage from '../../../components/atom/PrimaryImage'
import globalStyless from '../../../global/globalStyles';

interface CardProps{
    uri: string
    name: string
    types: string
}

export default function Card(props: CardProps) {
  return (
    <View style={styles.card}>
        <PrimaryImage
            source={{uri: props.uri}}
            style={styles.image}
        />
        <Text style={globalStyless.TextBold}>{props.name}</Text>
        <Text style={globalStyless.label}>{props.types}</Text>
  </View>
  )
}


const styles = StyleSheet.create({
    card: {
      flex: 1,
      alignItems: 'center',
      margin: 5,
      padding: 10,
      backgroundColor: '#f5f5f5',
      borderRadius: 5,
      elevation: 2,
    },
    image: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
    },
    
  });