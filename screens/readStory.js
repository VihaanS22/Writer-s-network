import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Linking from 'expo-linking'

export default class Read extends React.Component {
  render() {
    return (
      <View style = {{backgroundColor : "salmon", height : 600}}>

<TouchableOpacity style={{alignSelf : "center", position : "absolute", marginTop : 150, backgroundColor : "orange", marginLeft : 50, width : 300, height : 50, borderRadius : 10}}>
                      <Text style={{alignSelf : "center", marginTop : 15, fontWeight : "bold", color : "tomato"}}>📚Story Reader📚</Text>
                      </TouchableOpacity>

      <TouchableOpacity style = {{marginTop : 250, backgroundColor : "navajowhite", width : 190, height :  150, alignSelf : "center"}}
    
     onPress={()=>{Linking.openURL('https://www.freechildrenstories.com/')}}>
     

      <Text style = {{fontWeight : "bold", marginTop : 50, color : "red"}}>🖨️Click here to read some stories by people who have joined The Writer's Network🖨️</Text>
      </TouchableOpacity>
      
     
      <Image source={require('../assets/murty.png')} style = {{marginLeft : 1000, marginTop : -150, width: 240, height : 240}}/>
      <Image source={require('../assets/bond.png')} style = {{marginLeft : 100, marginTop : -400, width: 240, height : 240}}/>

      </View>
    );
  }
}