
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, Image, Button } from "react-native";
import * as FileSystem from 'expo-file-system';

import AppContainer from "./AppContainer";

const APIURL = "https://api.cloudinary.com/v1_1/dy8inpbdc/image/upload";

const uploadToCloudinary = async (filename: string) => {
  const fileinfo = await FileSystem.getInfoAsync(filename);
  console.log(fileinfo);
  try {
    let fileString = await FileSystem.readAsStringAsync(fileinfo.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    let base64String = "data:image/jpeg;base64," + fileString;
    let formdata = new FormData();
    formdata.append("file", base64String);
    formdata.append("upload_preset", "wcspreset");
    console.log("uploading started");
    fetch(APIURL, {
      body: formdata,
      method: "POST",
    })
      .then(async (r) => {
        let data = await r.json();
        console.log(data);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};


const GalleryTabComponent = () => {
  const [photos, setPhotos] = useState<String[]>([]);

  (async () => 
    setPhotos(
      await FileSystem.readDirectoryAsync (
        FileSystem.cacheDirectory + "ImageManipulator"
      )
    )
  )();

return (
    <AppContainer>
      <Text>Gallery component</Text>
      <ScrollView>
      {photos.map((photo, index) => (
          <>
            <Image
              key={index}
              style={{ resizeMode: "contain", height: 400, marginBottom: 10 }}
              source={{
                uri: FileSystem.cacheDirectory + "ImageManipulator/" + photo,
              }}
            />
            <Button
              title="Upload"
              onPress={() =>
                uploadToCloudinary(
                  FileSystem.cacheDirectory + "ImageManipulator/" + photo
                )
              }
            />
          </>
        )) }
      </ScrollView>
    </AppContainer>
  );
};

export default GalleryTabComponent;