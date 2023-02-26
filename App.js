import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
// import { AppLoading } from "expo";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import * as ScreenOrientation from "expo-screen-orientation";

import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
ScreenOrientation.unlockAsync();

export default function RegistrationScreen() {
  // console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isReady, setIsReady] = useState(false);

  //   //* вызываем для перерендера компонента при переворачивании экрана
  //   const [dimensions, setDimensions] = useState(
  //     Dimensions.get("window").width
  //   );

  //   useEffect(() => {
  //     const onChange = () => {
  //       const width = Dimensions.get("window").width;

  //       setDimensions(width);
  //     };
  //     Dimensions.addEventListener("change", onChange);
  //     return () => {
  //       Dimensions.removeEventListener("change", onChange);
  //     };
  //   }, []);
  // //*                                                       ******//

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const loadApplication = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("./assets/fonts/roboto/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/roboto/Roboto-Medium.ttf"),
      "Roboto-Bold": require("./assets/fonts/roboto/Roboto-Bold.ttf"),
    });
  };

  if (!isReady) {
    // SplashScreen.hideAsync()
    return (
      SplashScreen.hideAsync(),
      (
        <AppLoading
          startAsync={loadApplication}
          onFinish={() => setIsReady(true)}
          onError={console.warn}
        />
      )
    );
  }
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
                // width: dimensions,
              }}
            >
              <View style={styles.imageBcg}>
                <Image
                  style={{ width: 120, height: 120, resizeMode: "contain" }}
                  // source={{
                  //   uri: '',
                  // }}
                />
              </View>

              <View style={styles.formHeader}>
                <Text style={styles.formTitle}>Registration</Text>
              </View>

              <View style={{ marginTop: 33 }}>
                <TextInput
                  style={styles.input}
                  enum={"solid"}
                  placeholder={"Login"}
                  placeholderTextColor={"#BDBDBD"}
                  backgroundColor={"#F6F6F6"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
              </View>

              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  enum={"solid"}
                  placeholder={"Email address"}
                  placeholderTextColor={"#BDBDBD"}
                  backgroundColor={"#F6F6F6"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
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
                  icon={
                    <TouchableOpacity
                      onPress={() => {
                        setIsSecureEntry((prev) => !prev);
                      }}>
                      <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                    </TouchableOpacity>
                  }
                  iconPosition="right"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>

              {/* <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry((prev) => !prev);
                }}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            error={errors.password || error?.password?.[0]}
            onChangeText={(value) => {
              onChange({name: 'password', value});
            }}
          /> */}






              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>SIGN IN</Text>
              </TouchableOpacity>

              <Text style={styles.bottomSignLogin}>
                Уже есть аккаунт? Войти
              </Text>
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
    minHeight: 549,
    zIndex: 1,

    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // marginHorizontal: 16,
  },
  imageBcg: {
    zIndex: 10,
    position: "absolute",
    alignItems: "center",
    // justifyContent: "center",
    top: -60,
    left: 158,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  formHeader: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 92,
  },
  formTitle: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    // fontWeight: "500",
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
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
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
    fontFamily: "Roboto-Regular",
  },
  bottomSignLogin: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 78,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
  },
});
