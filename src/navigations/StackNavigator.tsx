import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DrawerNavigator from "./DrawerNavigator"
import LoginScreen from "../screens/Authentication"


const Stack = createNativeStackNavigator();

const StackNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Drawer" component={DrawerNavigator}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;