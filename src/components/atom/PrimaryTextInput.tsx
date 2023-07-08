import { View, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { Text } from 'react-native'

interface IbaseTextInput extends TextInputProps{
  value? : string
  placeholder?: string
  label? : string
  setText? : (e: string) => void;
}

export default function PrimaryTextInput(props: IbaseTextInput) {
  return (
    <View>
      {props.label !== undefined && props.label !== "" &&
        <Text>{props.label}</Text>
      }
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.setText}
        autoCapitalize="none"
        style={{padding:20, borderBottomWidth: 1, borderBottomColor: 'grey', marginBottom: 40}}
      />
    
    </View>
  )
}