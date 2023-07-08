import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // background: "transparent",
      primary: 'rgb(255, 45, 85)',
    },
  };  

const RootNavigator = () =>{
    return(
        <NavigationContainer theme={theme}>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default RootNavigator;