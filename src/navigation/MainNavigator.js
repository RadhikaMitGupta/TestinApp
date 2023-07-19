import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen/SplashScreen';
 import TabNavigator from './TabNavigator';
import Apple from 'screens/Node';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {

  return (
    <NavigationContainer
      >
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="TabNavigator"
          component={  TabNavigator }
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
