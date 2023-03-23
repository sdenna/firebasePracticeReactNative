import React from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const auth = getAuth();

/*
    By calling onAuthStateChanged, we subscribe to an event that triggers 
    every time the authorization state changes, such as when a user logs 
    in or logs out of the application.

    We use this event to capture the user information and set it properly 
    into the hook state, to then provide it back to the components that may 
    need it.
*/

export function useAuthentication() {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    user
  };
}