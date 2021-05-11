import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Plan from './screens/planner'
import Read from './screens/readStory'
import Write from './screens/writeStory'
import Calendar from './screens/calender'


import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";


export default class App extends React.Component {
  render() {
    return (
      
      <AppContainer/>
  
 

    )
   
    
  }
}

const TabNavigator = createBottomTabNavigator({
  WRITER : {screen : Write},
   READER : {screen : Read},
  CALENDAR : {screen : Calendar},
  PLANNER : {screen : Plan},

   
 },
{
  defaultNavigationOptions : ({navigation})=>({
    tabBarIcon : ()=>{
      const routeName = navigation.state.routeName
      if (routeName === 'PLANNER'){
        return (

       <Image style ={{width:70, height:65, marginBottom : 50}} source={require('./assets/planner.png')}/>   
        )
  
      }
      else if(routeName === 'READER'){
        return(
          <Image style ={{width:60, height:60, marginBottom : 50}} source={require('./assets/book-removebg-preview.png')}/>
        )
      }

      else if(routeName === 'CALENDAR'){
        return(
          <Image style ={{width:60, height:60, marginBottom : 50}} source={require('./assets/calendar.png')}/>
        )
      }
    
      else if(routeName === 'WRITER'){
        return(
          <Image style ={{width:60, height:60, marginBottom : 50}} source={require('./assets/writing.png')}/>
        )
      }
    
    },
     
  })
 
}
);





const AppContainer = createAppContainer(TabNavigator);

