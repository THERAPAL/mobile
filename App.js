import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import WelcomeScreens from './components/WelcomeScreens';

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
          name='welcome_screens'
          component={WelcomeScreens}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
