import { StyleSheet } from "react-native";
import Color from "../../constants/Color";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.SECONDARY,
     
    },
    content: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 80,
      marginTop: 30
    },
    center: {
      alignItems: "center",
      width: "100%",
    },
    box: {
      padding: 5,
      paddingVertical: 8,
      width: "95%",
      backgroundColor: "transparent",
    },
    heading: {
      fontSize: 18,
      fontWeight: "600",
      color: Color.PRIMARY,
    },
    subheading: {
      fontSize: 14,
      fontWeight: "500",
      color: "#000000",
      marginTop: 5,
      marginBottom: 20,
    },
    inputs: {
      marginTop: 20,
    },
    forgotPasswordButton: {
      marginLeft: 2,
      alignItems: "flex-end",
      marginTop: 10,
      marginBottom: 10
    },
    forgotPasswordButtonText: {
      color: Color.PRIMARY,
    },
    createAccount: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      paddingBottom: 40
    },
    createAccountButton: {
      marginLeft: 2,
    },
  });

  export default styles;