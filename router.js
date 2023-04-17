import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
//     Components
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import ProfileScreen from "./screens/main/ProfileScreen";
import HomeScreen from "./screens/main/HomeScreen";
import CreateScreen from "./screens/main/CreateScreen";

//   user, plus and grid-icons
import { Feather } from "@expo/vector-icons";

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
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconImg}>
              <Feather
                name="grid"
                size={24}
                color={focused ? "#fff" : "rgba(33, 33, 33, 0.8)"}
              />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconPlus}>
              <Feather
                name="plus"
                size={24}
                color={focused ? "#fff" : "rgba(33, 33, 33, 0.8)"}
              />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconImg}>
              <Feather
                name="user"
                size={24}
                color={focused ? "#fff" : "rgba(33, 33, 33, 0.8)"}
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
    width: 40,
    height: 40,
    padding: 8,
  },
  iconPlus: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    width: 70,
    height: 40,

    // color: "rgba(33, 33, 33, 0.8)",
  },
});
