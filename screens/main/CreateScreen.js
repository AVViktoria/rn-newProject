import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";

const CreateScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [permission, setPermission] = Camera.useCameraPermissions();

  //    Location permission
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  //    Camera permission
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setPermission(status === "granted");
    })();
  }, []);

  if (permission === null) {
    return <View />;
  }
  if (permission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    const photoFn = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);

    setPhoto(photoFn.uri);
    console.log("photo", photo);
  };

  const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("DefaultScreen", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoBox}>
            <Image
              source={{ uri: photo }}
              style={{ width: "100%", height: "100%", borderRadius: 8 }}
            />
          </View>
        )}
        <TouchableOpacity style={styles.photoIconBox} onPress={takePhoto}>
          <Ionicons name="camera-sharp" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
      {/* <TouchableOpacity onPress={takePhoto}>
        <Text style={styles.loadText}>Load picture</Text>
      </TouchableOpacity> */}
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
  //   // width: 343,
  //   contentFit: "cover",
  //   height: 400,
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
