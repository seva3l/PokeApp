import {TouchableOpacity,TouchableOpacityProps,Text} from 'react-native'

import Color from '../../constants/Color'
import styles from '../../global/globalStyles'

interface QButtonProps extends TouchableOpacityProps{
    label ? : string
    isDisabled ? : boolean
    width ? : any
    backgroundColor ? : string,
    variant?: string
}
const PrimaryButton = (props:QButtonProps) => {
  return (
    <TouchableOpacity
    onPress={props.onPress} 
    style={{
        padding:15,
        borderRadius:10,
        backgroundColor: props.variant === "outlined" ? "transparent" : Color.PRIMARY ,
        justifyContent:"center",
        borderWidth: props.variant === "outlined" ? 0.9 : 0,
        alignItems:"center",
        width: props.width
    }}
    >
        <Text style={[styles.buttonText,{color:Color.WHITE}]}>{props.label}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton;
