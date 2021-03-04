import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Camera } from "expo-camera";
import * as ImageManipulator from 'expo-image-manipulator';

import AppContainer from "./AppContainer";

const CameraTabComponent = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    console.log("test");
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {
    if (cameraRef.current) {
      try {
        let photo = await cameraRef.current!.takePictureAsync();
        console.log(photo);
        console.log(
          await ImageManipulator.manipulateAsync(photo.uri, [
            { resize: { width: 400 } },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <AppContainer>
      <Camera
        ref={ cameraRef }
        style={{ flex: 1 }}
      ></Camera>
      <Button title="Take new photo" onPress={snap} />
    </AppContainer>
  );
};

export default CameraTabComponent;