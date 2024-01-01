import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Home from './home';
import Login from './Login';

export default function RootNavigator(){
  const [user, setUser] = useState<User | null>(null);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user)
      setUser(user);
    });
  }, [])


  return (
    <BottomSheetModalProvider>
      <Stack.Navigator>
        { user ? ( 
           <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        ) : ( 
          <Stack.Screen name="Đăng nhập/Đăng ký" component={Login} options={{ headerShown: true}}/>
        )}
      </Stack.Navigator>
     </BottomSheetModalProvider>
  );
};

