import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
//     Components
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import PostsScreen from "./screens/main/PostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen";
import CreateScreen from "./screens/main/CreateScreen";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconImg}>
              <Image
                source={require("./assets/icons/grid.png")}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconPlus}>
              <Image
                source={require("./assets/icons/union.png")}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconImg}>
              <Image
                source={require("./assets/icons/user.png")}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
const styles = StyleSheet.create({
  iconImg: {
    width: 24,
    height: 24,
  },
  iconPlus: {
    width: 13,
    height: 13,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    // padding: "13.5 28.5 13.5 28.5",
    // width: 70,
    // height: 40,
  },
});
