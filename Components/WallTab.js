import React, { useState, useEffect } from "react";
import { Image, ScrollView } from "react-native";
import axios from "axios";
import AppContainer from "./AppContainer";
const IMAGES_URL =
  "https://681813489647456:NIm-xmnaF0kn3OKPX8yxorl82RU@api.cloudinary.com/v1_1/dy8inpbdc/resources/search";
const WallTabComponent = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    (async () => {
      const photos = await axios.get(IMAGES_URL);
      setPhotos(photos.data.resources);
    })();
  }, []);
  return (
    <AppContainer>
      <ScrollView>
        {photos.map((el, index) => (
          <Image
            key={index}
            style={{
              resizeMode: "contain",
              height: 400,
            }}
            source={{
              uri: el.url,
            }}
          />
        ))}
      </ScrollView>
    </AppContainer>
  );
};
export default WallTabComponent;