import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import Color from '../constants/Color';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../store/auth/AuthContext';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color={Color.PRIMARY} />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  logoutButtonText: {
    marginLeft: 10,
    color: Color.PRIMARY,
  },
});
