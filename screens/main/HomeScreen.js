import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPosts from "../nested/DefaultScreenPosts";
import CommentsScreen from "../nested/CommentsScreen";
import MapScreen from "../nested/MapScreen";

const NestedScreen = createStackNavigator();
const HomeScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default HomeScreen;

// const ProfileScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>HomeScreen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default ProfileScreen;
