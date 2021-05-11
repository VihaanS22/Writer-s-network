import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert} from 'react-native'
import * as Speech from 'expo-speech';

import firebase from 'firebase';
import db from '../config';

export default class Write extends React.Component {

constructor() {
    super();
    this.state = {
intro : "Hello there everyone. This is Emily, assisstant of Vihaan who is the creator of these helpful apps. This time it is a day planner, or better a holiday planner. Type in your plans in the boxes next to the times of the day and the larger box is for notes of the day. Enjoy Planning!!",

save : "Your story has been successfully saved. Do try reading other stories and planning your day with the calendar and the planner. Thanks for joining us.",

title : '',
author : '',
story : ''

}


}

intro=()=> {
  var hello = this.state.intro

 Speech.speak(hello);
}

 submitStory = ()=>{
      db.collection("stories").add({
          title: this.state.title,
          author: this.state.author,
          story: this.state.story
      })
      this.setState({
          title: '',
          author: '',
          story: ''
      })
      var saved = this.state.save
   Speech.speak(saved)
 
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
   

   
<TextInput

style = {{position : "absolute", marginLeft : 100, marginTop : 75, borderWidth : 2, borderRadius : 10, backgroundColor : "lightgreen"}}
        placeholder="!NAME OF THE STORY!"
        keyboardType="alphanumeric"
      />
      <TextInput
        style = {{position : "absolute", marginLeft : 100, marginTop : 125, borderWidth : 2, borderRadius : 10, backgroundColor : "yellow"}}
        placeholder="!NAME OF THE AUTHOR!"
        keyboardType="alphanumeric"
      />

<TextInput
multiline={true}
        style = {{position : "absolute", backgroundColor : "salmon", marginLeft : 45, marginTop : 240, borderWidth : 2, borderRadius : 10, height : 100, width : 280}}
        placeholder="!WRITE YOUR STORY HERE!"
        keyboardType="alphanumeric"
      />

<View>
<TouchableOpacity style={{position : "absolute", marginTop : -120, backgroundColor : "turquoise", marginLeft : 50, width : 300, height : 50, borderRadius : 10}} onPress={this.submitStory}>
<Text style={{alignSelf : "center", marginTop : 15, fontWeight : "bold", color : "tomato"}}>Submit</Text>
                      </TouchableOpacity>
         
         </View>

         <View>
<TouchableOpacity style={{position : "absolute", marginTop : -520, backgroundColor : "orange", marginLeft : 50, width : 300, height : 50, borderRadius : 10}}>
                      <Text style={{alignSelf : "center", marginTop : 15, fontWeight : "bold", color : "tomato"}}>✍🏻Story Writer✍🏻</Text>
                      </TouchableOpacity>
         
         </View>
     
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
