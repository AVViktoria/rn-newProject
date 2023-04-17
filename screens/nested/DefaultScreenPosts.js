import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, FlatList, Image } from "react-native";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  // console.log(route);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  // console.log(posts);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString}
        renderItem={({ item }) => (
          <View style={styles.loadedPhotoBox}>
            <Image source={{ uri: item.photo }} style={styles.loadedPhoto} />
          </View>
        )}
      />
      <Button title="go to map" onPress={() => navigation.navigate("Map")} />
      <Button
        title="go to Comments"
        onPress={() => navigation.navigate("Comments")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    marginHorizontal: 16,
  },
  loadedPhotoBox: {
    // position: "relative",
    display: "flex",
    flexStart: "top",
    flexDirection: "row",
    width: "100%",
    marginBottom: 8,
    height: 240,
  },
  loadedPhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const DefaultScreen = () => (
//   <View style={styles.container}>
//     <Text>DefaultScreen</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

export default DefaultScreenPosts;
