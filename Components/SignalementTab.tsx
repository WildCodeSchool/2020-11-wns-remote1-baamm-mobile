import React, {useRef} from 'react';
import { Image, StyleSheet, Text, TextInput, Alert } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import AppContainer from './AppContainer';

export default function SignalementTabComponent() {
  const menu = useRef<Menu>(null);

  const [raisonRetard, setRaisonRetard] = React.useState('Raison du retard');

    const hideMenu = (duree: string) => {
      if (menu.current) {
        menu.current.hide();
      } else {
        throw new Error("Menu not found");
      }
      let retard = duree === 'abs' ? 'Je serai absent.' : 'Je serai en retard de '+duree+' minutes.';
      console.log(retard, ' Raison : ', raisonRetard);
      Alert.alert(
        retard,
        "Raison : "+raisonRetard,
        [
          {
            text: "Annuler",
            onPress: () => console.log("Je ne serai pas en retard"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("Retard signalé") }
        ],
        {cancelable: false}
      );
    
    }

    const showMenu = () => {
      if (menu.current) {
        menu.current.show();
      } else {
        throw new Error("Menu not found");
      }
    } 

    return (
      <AppContainer>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 20,
            fontSize: 20
          }}
        > 
          Signaler un retard / une absence
        </Text>
        <Image
          style={{ resizeMode: "cover", width: 400, marginBottom: 10 }}
          source={
            require('../assets/late.png')
          }
        ></Image>
        <TextInput
          style={{ 
            height: 150,
            borderColor: 'gray', 
            borderWidth: 1,
            margin: 10,
            textAlign: 'center'
          }}
          onChangeText={text => setRaisonRetard(text)}
          value={raisonRetard}
        />

        <Menu 
          style={styles.menu}
          ref={menu} 
          button={
            <Text onPress={showMenu} 
            style={styles.button}>
              Durée
            </Text>}
        >
          <MenuItem style={styles.evenMenuItem} onPress={() => hideMenu('15')}>15 min</MenuItem>
          <MenuItem style={styles.oddMenuItem}  onPress={() => hideMenu('30')}>30 min</MenuItem>
          <MenuItem style={styles.evenMenuItem} onPress={() => hideMenu('45')}>45 min</MenuItem>
          {/* <MenuDivider /> */}
          <MenuItem style={styles.oddMenuItem} textStyle={styles.absenceItem} onPress={() => hideMenu('abs')}>Absence</MenuItem>
        </Menu>
      </AppContainer>
    )
}


const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  button: {
    paddingTop: 20,
    textAlign: 'center',
    height: 50,
    backgroundColor: '#2196F3'
  },
  evenMenuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  oddMenuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  absenceItem: {
    color: 'red',
    fontWeight: "bold",  
  }
});