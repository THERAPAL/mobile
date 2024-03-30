import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeMS from './components/WelcomeMS';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Light': require('./assets/fonts/Inter-Light.otf'),
    "Inter-Medium": require('./assets/fonts/Inter-Medium.otf'),
    "Inter-Regular": require('./assets/fonts/Inter-Regular.otf'),
    "Inter-SemiBold": require('./assets/fonts/Inter-SemiBold.otf'),
  })
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
