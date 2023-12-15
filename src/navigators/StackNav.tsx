import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Splash from '../screens/Splash/Splash';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import {useSelector} from 'react-redux';

export default function StackNav() {
  const Stack = createStackNavigator();
  const AuthReducer = useSelector((i: any) => i.AuthReducer);
  console.log('auth', AuthReducer);

  const Screens = AuthReducer?.isLogedinResponse == null ? {Login} : {Home};

  if (AuthReducer.isLoading) {
    return (
      <NavigationContainer>
        <Splash />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {Object.entries({
            ...Screens,
          }).map(([name, component], index) => {
            return (
              <Stack.Screen key={index} name={name} component={component} />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
