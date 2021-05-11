import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Linking from 'expo-linking'

export default class Calendar extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
      
      <Image style = {{width : 350, height : 450, marginTop : 40, alignSelf : "center"}}
     source={require('../assets/calender.png')}/>
     

      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#ef7b64',
    flex: 1,
    fontFamily: 'comic sans ms',
  },
  header: {
    backgroundColor: 'pink',
    border: 'dashed',
    
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
    fontFamily: 'britannic',
    fontSize: 20,
    padding: 15,
  },
});
