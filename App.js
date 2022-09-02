import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './componets/Homepage';
import Reviewpage from './componets/Reviewpage';
import Profilepage from './componets/Profilepage';
import Bookings from './componets/Bookings';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name='Home'
      component={Homepage}/>
       <Stack.Screen 
      name='Details'
      component={Reviewpage}/>
        <Stack.Screen 
      name='Profilepage'
      component={Profilepage}/>
       <Stack.Screen 
      name='Bookings'
      component={Bookings}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}



