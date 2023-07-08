import React, { useContext, useEffect, useState } from "react";
import { View, Text,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/atom/PrimaryButton";
import PrimaryTextInput from "../../components/atom/PrimaryTextInput";
import { AuthContext } from "../../store/auth/AuthContext";
import styles from './_styles'

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const {login,user, errorText} = useContext(AuthContext);

  function _onlogin() {
    login(email,password);
  }

  useEffect(()=>{
    user.isAuthenticated && navigation.navigate("Drawer")
  },[navigation,user.isAuthenticated ])

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <ScrollView automaticallyAdjustContentInsets={true}>
          <View style={styles.center}>
            <View style={styles.box}>
              <Text style={styles.heading}>Welcome</Text>
              <Text style={styles.subheading}>Sign in to continue!</Text>

              <View style={styles.inputs}>
                <PrimaryTextInput
                  label="Email"
                  setText={(text) => setEmail(text)}
                  placeholder="Email"
                  value={email}
                />
                <PrimaryTextInput
                  label="Password"
                  setText={(text) => setPassword(text)}
                  placeholder="Password"
                  value={password}
                />
                {errorText !== "" && errorText !== undefined && <Text style={{marginBottom:20,color:'red'}}>{errorText}</Text>}
                <PrimaryButton label="Login" onPress={_onlogin} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};



export default LoginScreen;
