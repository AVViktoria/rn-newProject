
// import React from "react";
// import {
//   StyleSheet,
 
//   View,
//   ImageBackground,
//   TextInput,
// } from "react-native";


// export default function LoginScreen() {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         style={styles.image}
//         source={require("../../assets/Images/bcgRegistrationLg.png")}
//       >
//         <TextInput style={styles.input} textAlign={"center"} />
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     height: 812,
//     width: 375,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#f0f8ff",
//     height: 40,
//     borderRadius: 6,
//     marginHorizontal: 40,
//     color: "#f0f8ff",
//   },
// });


import React, { useState } from "react";

import {
  StyleSheet,
  View,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  // console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/Images/bcgRegistrationLg.png")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          

            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? -100 : null,
              }}
            >
              {/* -178 */}
              <View style={styles.formHeader}>
                 <Text style={styles.formTitle}>Sign in</Text>
              </View>
              

              <View style={{ marginTop: 33 }}>
                <TextInput
                  style={styles.input}
                  enum={"solid"}
                  placeholder={"Email address"}
                  placeholderTextColor={"#BDBDBD"}
                  backgroundColor={"#F6F6F6"}
                  onFocus={() => setIsShowKeyboard(true)}
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
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>SIGN IN</Text>
              </TouchableOpacity>

              <Text style={styles.bottomSignLogin}>No account? Sign in</Text>
            </View>

        </KeyboardAvoidingView>
      </ImageBackground>
      </TouchableWithoutFeedback>
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
    justifyContent: "flex-end",
  },
 
  form: {
    position: "relative",
    minHeight: 489,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  formHeader: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 32,
  },
  formTitle: {
    fontSize: 30,
    fontWeight: "500",
    // marginLeft:  "calc(50% - 184px/2 + 0.5px)",
    color: "#212121",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    marginHorizontal: 16,
    color: "#F6F6F6",
  },

  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,

  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  bottomSignLogin: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 144,
    fontSize: 16,
    color: "#1B4371",
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
