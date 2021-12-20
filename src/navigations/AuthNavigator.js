import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {REGISTER, SIGN_IN} from '../constants/routeNames';
import SignIn from '../screens/SignIn';
import Register from '../screens/Register';

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={SIGN_IN} component={SignIn} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
