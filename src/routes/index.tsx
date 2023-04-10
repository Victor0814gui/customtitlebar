




import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserRoute } from './user';

export function Rotues() {
  return (
    <NavigationContainer>
      <UserRoute />
    </NavigationContainer>
  );
}