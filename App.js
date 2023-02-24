import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/Images/bcgRegistrationLg.png")}
      >
        <View styles={{ marginTop: 33 }}>
          <Text styles={styles.title}>Registration</Text>
        </View>
        <View style={styles.form}>
          <View style={{ marginTop: 33 }}>
            <TextInput
              style={styles.input}
              enum={"solid"}
              placeholder={"Login"}
              placeholderTextColor={"#BDBDBD"}
              backgroundColor={"#F6F6F6"}
            />
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
          </View>
          <Button title = "Create account"/>
        </View>
        <StatusBar style="auto" />
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
    justifyContent: "center",
    //  alignItems: "center",
    // height: 812,
    // width: 375,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
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
