import React from 'react';
import {Text,Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Reacts from "../screens/Reacts"
import ReactNative from "../screens/ReactNative"
import Node from 'screens/Node';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const renderTabTitle = (isFocused, tabName) => {
    const color = isFocused ? 'blue' : 'gray';
    const title = isFocused ? (
      <Text style={{color}}> {tabName}</Text>
    ) : (
      <Text style={{color}}> {tabName}</Text>
    );
    return title;
  };
  return (
    <Tab.Navigator
      initialRouteName="Reacts"
      screenOptions={({route}) => ({
        unmountOnBlur: true,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
      >
      <Tab.Screen
        name={"Reacts"}
        component={Reacts}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <Image source={{uri:"https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png"}} style={{height:25,width:25}} /> : <Image source={{uri:"https://static.thenounproject.com/png/3574480-200.png"}} style={{height:25,width:25}} />,
          tabBarLabel: ({focused}) => {
            return renderTabTitle(focused, 'Reacts');
          },
        }}
      />
       <Tab.Screen
        name={"ReactNative"}
        component={ReactNative}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <Image source={{uri:"https://cdn.iconscout.com/icon/free/png-512/free-date-1439767-1214338.png?f=avif&w=512"}} style={{height:25,width:25}} /> : <Image source={{uri:"https://cdn.iconscout.com/icon/free/png-512/free-date-1439767-1214338.png?f=avif&w=512"}} style={{height:25,width:25}} />,
          tabBarLabel: ({focused}) => {
            return renderTabTitle(focused, 'ReactNative');
          },
        }}
      />
       <Tab.Screen
        name={"Node"}
        component={Node}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <Image source={{uri:"https://cdn.iconscout.com/icon/free/png-512/free-layer-1439750-1214322.png?f=avif&w=512"}} style={{height:25,width:25}} /> : <Image source={{uri:"https://cdn.iconscout.com/icon/free/png-512/free-layer-1439750-1214322.png?f=avif&w=512"}} style={{height:25,width:25}} />,
          tabBarLabel: ({focused}) => {
            return renderTabTitle(focused, 'Node');
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
