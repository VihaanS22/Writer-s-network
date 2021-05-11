import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native'
import * as Speech from 'expo-speech';



export default class Plan extends React.Component {

constructor() {
    super();
    this.state = {

intro : "Hello there everyone. This is Emily, assisstant of Vihaan who is the creator of these helpful apps. This time it is a day planner, or better a holiday planner. Type in your plans in the boxes next to the times of the day and the larger box is for notes of the day. Enjoy Planning!!",




    }


}

intro=()=> {
  var hello = this.state.intro
 
    Speech.speak(hello);
   
  

}

  render() {
    return (
      <View style = {{backgroundColor : "salmon", height : 600}}>
     
      <View style={styles.viewStyle}>
         
        <Text style={styles.textStyle}>The Writer's Network 
        </Text>
         <Text style={styles.small}>
Read. Write. Publish</Text>
</View>

         <View>


         
   <Image source={require('../assets/note.png')} style = {{width : 550, height : 550, marginLeft : -100, marginTop : -25}}
     />
    
     <Text style = {{marginLeft : 150, fontWeight :"bold", position : "absolute", backgroundColor : "#ffb37b", fontSize :  23}} 
     onPress={()=>{this.intro()}}>
     
     DAY PLANNER</Text>

  


<TextInput
        style = {{position : "absolute", marginLeft : 45, marginTop : 50, borderWidth : 2, borderRadius : 50, height : 100, width : 280}}
        placeholder=""
        keyboardType="alphanumeric"
      />
<TextInput
        style = {{position : "absolute", marginLeft : 45, marginTop : 150, borderWidth : 2, borderRadius : 50, height : 100, width : 280}}
        placeholder=""
        keyboardType="alphanumeric"
      />
<TextInput
        style = {{position : "absolute", marginLeft : 45, marginTop : 250, borderWidth : 2, borderRadius : 50, height : 100, width : 280}}
        placeholder=""
        keyboardType="alphanumeric"
      />

   
     
</View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F7D6D0',
    alignItems: 'center',
    justifyContent: 'center',
 marginTop: 0,
 height : 150
  },
  textStyle: {
    fontSize: 25,
    fontFamily: 'TimesRoman',
    fontWeight : "bold",
    backgroundColor : "#4B8378",
    color : "white"

  },
  small: {
    fontSize: 20,
    fontFamily: 'COMIC SANS MS',
    fontWeight : "bold",
     backgroundColor : "#FF9636",
     color : "white"
  }

});
