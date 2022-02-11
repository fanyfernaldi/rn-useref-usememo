import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UseRefPage from '../pages/UseRefPage';
import UseMemoPage from '../pages/UseMemoPage';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UseRefPage" component={UseRefPage} />
      <Stack.Screen name="UseMemoPage" component={UseMemoPage} />
    </Stack.Navigator>
  );
};

export default Router;
