// import React ,{ ReactChildren } from "react";
// import { StyleSheet, Text, View } from "react-native";

// const AppContainer = ({children}) => (
//   <View style={styles.container}>{children}</View>
// );

// export default AppContainer;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//     flex: 1,
//   },
// });

import React, { ReactChildren, ReactChild } from "react";
import { StyleSheet, Text, View } from "react-native";

interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const AppContainer = ({ children }: AuxProps) => (
  <View style={styles.container}>{children}</View>
);

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
});
