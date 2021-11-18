import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Movies from '../screens/Movies';
import Favorites from '../screens/Favourites';

const BottomTab = createBottomTabNavigator();
const tabBarOptions={
  showLabel:false,
  activeTintColor:'#9381FF',
  style:{
    height:'10%',
  }
};


function RootNavigator(){
  return(
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={tabBarOptions}>
         <BottomTab.Screen
            name='Movies'
            component={Movies}
            options={{
              tabBarIcon: ({color, size}) => (
              <MaterialIcons name="movie-filter" color={color} size={size} />
            ),
            }}
         />

         <BottomTab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            ),
          }}
        />


      </BottomTab.Navigator>
    </NavigationContainer>
  )
}


export default RootNavigator;
