import { View, Text,Image, ImageProps } from 'react-native'
import React from 'react'


interface PrimaryImageProps extends ImageProps{}

const PrimaryImage: React.FC<PrimaryImageProps> = ({ source, style, ...rest }) => {
    return (
        <View>
            <Image source={source} style={style} {...rest} />
        </View>
    );
};

export default PrimaryImage