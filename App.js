// import { StatusBar } from "expo-status-bar";
import {
 
  StyleSheet,
  View,
  ImageBackground,
  Platform,
  Text,
  TextInput, 
  TouchableOpacity
} from "react-native";

export default function App() {
  // console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/Images/bcgRegistrationLg.png")}
      >
      
          
        
        <View style={styles.form}>
          
          <Text style={styles.inputTitle} >Registration</Text>

          <View style={{ marginTop: 33 }}>
            <TextInput
              style={styles.input}
              enum={"solid"}
              placeholder={"Login"}
              placeholderTextColor={"#BDBDBD"}
              backgroundColor={"#F6F6F6"}
            />
          </View>

            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                enum={"solid"}
                placeholder={"Email address"}
                placeholderTextColor={"#BDBDBD"}
                backgroundColor={"#F6F6F6"}
              />
            </View>

            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                enum={"solid"}
                placeholder={"Password"}
                placeholderTextColor={"#BDBDBD"}
                backgroundColor={"#F6F6F6"}
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
              <Text style={styles.btnTitle}>SIGN IN</Text>
            </TouchableOpacity>
            <Text style={styles.enterLogin} >Уже есть аккаунт? Войти</Text>
        </View>
        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    justifyContent: "flex-end"
    //  alignItems: "center",
  
  },
  inputTitle: {
    
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 33,
    fontSize: 30,
    // weight: 500,
    fontWeight: "500",
// marginLeft:  "calc(50% - 184px/2 + 0.5px)",
    // fontWeight: 500,
    color: "#212121",
  },
  form: {},

  input: {
    borderWidth: 1,

    borderColor: "#E8E8E8",
    borderRadius: 8,

    height: 50,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    marginHorizontal: 16,

    color: "#212121",
  },

   btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    // marginBottom: 113,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    // paddingVertical: 16,
    // paddingHorizontal: 50,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  enterLogin:{
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 78,
    fontSize: 16,
    color: "#1B4371",
  }
});

// import React, { useState, useEffect } from "react";
// import {} from "react-native";

// import * as Font from "expo-font";
// import { AppLoading } from "expo";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import LoginScreen from "./screens/auth/LoginScreen";
// import RegistrationScreen from "./screens/auth/RegistrationScreen";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
//   });
// };

// const AuthStack = createStackNavigator();

// export default function App() {
//   const [iasReady, setIasReady] = useState(false);

//   if (!iasReady) {
//     return (
//       <AppLoading
// startAsync={loadApplication}
//         onFinish={() => setIasReady(true)}
//         onError={console.warn}
//       />
//     );
//   }

//   return (
//     <NavigationContainer>
//       <AuthStack.Navigator>
//         <AuthStack.Screen name="Register" component={RegistrationScreen} />
//         <AuthStack.Screen name="Login" component={LoginScreen} />
//       </AuthStack.Navigator>
//     </NavigationContainer>
//   );
// }
