import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";

const PostScreen = ({ route }) => {
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

export default PostScreen;
