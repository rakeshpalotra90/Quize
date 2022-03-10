import { Text, View,Image, StyleSheet} from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import images from '../assets/images';
import colors from '../common/style/color';

import home from '../screen/Home'
import debitCard from '../screen/DebitCard'
import payment from '../screen/payment'
import profile from '../screen/profile'
import creditScreen from '../screen/credit'

const Stack = createNativeStackNavigator();
const tab =createBottomTabNavigator();

function Bottomtab () {
    return(
      <tab.Navigator screenOptions={{headerShown:false,tabBarLabel:'', tabBarStyle:{
        // backgroundColor:'black',
        // bottom:10,
        // borderRadius:10,
      }}} initialRouteName='SnapHome'>
        <tab.Screen name='Home' component={home} 
          options={{
          tabBarIcon: ({focused}) => (
            focused ?
              <Image source={images.home} style={styles.bottomIconFocus} />
            : 
            <Image source={images.home} style={styles.bottomIcon} />
          ),
          }} 
          />
        <tab.Screen name='DebitCard' component={debitCard} 
          options={{
            tabBarIcon: ({focused}) => (
              focused ?
              <Image source={images.card} style={styles.bottomIconFocus} />
              :
              <Image source={images.card} style={styles.bottomIcon} />
            ),
            }}
        />
        <tab.Screen name='Credit' component={creditScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            focused ?
            <Image source={images.payment} style={styles.bottomIconFocus} />
            :
            <Image source={images.payment} style={styles.bottomIcon} />
          ),
          }}
        />
        <tab.Screen name='Payment' component={payment}
        options={{
          tabBarIcon: ({focused}) => (
            focused ?
            <Image source={images.upArrow} style={styles.bottomIconFocus} />
            :
            <Image source={images.upArrow} style={styles.bottomIcon} />
          ),
          }}
        />
        <tab.Screen name='Profile' component={profile} 
        options={{
          tabBarIcon: ({focused}) => (
            focused ?
            <Image source={images.user} style={styles.bottomIconFocus} />
            :
            <Image source={images.user} style={styles.bottomIcon} />
          ),
          }}
        />
      </tab.Navigator>
    )
  }

export class Navigation extends Component {

  render() {
    return (
        <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={Bottomtab} options={{headerShown:false}}/>
          {/* <Stack.Screen name="DebitCard" component={debitCard} options={{headerShown:false}}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  bottomIconFocus:{
    height:30,
    width:30,
    tintColor:colors.primary,
    marginTop:10
  },
  bottomIcon:{
    height:30,
    width:30,
    marginTop:10
  }
});

export default Navigation