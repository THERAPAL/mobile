import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeMS from './components/WelcomeMS';

const Stack = createNativeStackNavigator()

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen
          name='Mental Support'
          component={WelcomeMS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
