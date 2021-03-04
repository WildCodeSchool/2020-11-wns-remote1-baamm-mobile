import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CameraTabComponent from "./Components/CameraTab";
import GalleryTabComponent from "./Components/GalleryTab";
import HomeTabComponent from "./Components/HomeTab"
import WallTabComponent from "./Components/WallTab";
import RoomTabComponent from "./Components/RoomTab";
import SignalementTabComponent from "./Components/SignalementTab";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTabComponent} />
        <Tab.Screen name="Room" component={RoomTabComponent} />
        <Tab.Screen name="Signalement" component={SignalementTabComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
