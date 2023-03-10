import React from 'react';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import UserStack from './userStack';
import AuthStack from './authStack';

/*
    This component uses the useAuthentication hook to determine whether 
    we have a logged-in user or not, and based on that, it loads one of the 
    two application stacks.
*/

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}