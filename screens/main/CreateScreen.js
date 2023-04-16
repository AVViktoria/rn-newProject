import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

const CreateScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const photoFn = await camera.takePictureAsync();
    setPhoto(photoFn.uri);
    console.log(photoFn.uri);
  };
  const sendPhoto = async () => {
    //  const photoFn = await camera.takePictureAsync();
    //  setPhoto(photoFn.uri);
    console.log("navigation");
    navigation.navigate("Posts", { photo });
  };
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoBox}>
            <Image
              source={{ uri: photo }}
              style={{ width: "100%", height: "100%", borderRadius: 8 }}
              // style={styles.takePhoto}
            />
          </View>
        )}
        <TouchableOpacity style={styles.photoIconBox} onPress={takePhoto}>
          <Ionicons name="camera-sharp" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
      <TouchableOpacity onPress={takePhoto}>
        <Text style={styles.loadText}>Load picture</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={sendPhoto}
      >
        <Text style={styles.btnTitle}>SEND</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  camera: {
    position: "relative",
    height: 240,
    marginTop: 32,
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  takePhotoBox: {
    // position: "absolute",
    // marginTop: 32,
    // marginHorizontal: 16,
    // borderRadius: 8,
    // justifyContent: "center",
    // alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#ffffff",
    width: "100%",
    height: "100%",
  },
  // takePhoto: {
  //   position: "absolute",
  //   marginTop: 32,
  //   marginHorizontal: 16,
  //   borderRadius: 8,
  //   width: 343,
  //   contentFit: "cover",
  //   height: 240,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  photoIconBox: {
    backgroundColor: "#FFFFFF",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  loadText: {
    marginTop: 8,
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    paddingHorizontal: 118,
    paddingVertical: 16,
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",

    marginHorizontal: 16,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});

export default CreateScreen;
