import { useStore } from '../hooks/useStore';
import colors from '../constants/colors';
import { Entypo } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const Dots = ({}) =>  {
  const currentWelcomeScreen = useStore(state => state.currentWelcomeScreen)
  const setCurrWelcomeScreen = useStore(state => state.setCurrWelcomeScreen)
  return (
    <View style={{ columnGap: 15, paddingTop: 20, paddingBottom: 25, flexDirection: 'row', justifyContent: 'center'}}>
      {['first', 'second', 'third']
      .map(i => {
        return (
          <Octicons 
            name='dot-fill' 
            key={i}
            size={20} 
            color={currentWelcomeScreen === i ? colors.blue_60 : colors.grey_} 
            onPress={() => setCurrWelcomeScreen(i)}
          />
        )
      })}
    </View>
  )
}

const WelcomeTexts = ({header, body}) =>
  <View style={{flex: 3, width: '90%'}}>
    <Text style={{
      fontSize: 23,
      fontWeight: 'bold',
      color: colors.grey_40,
      textAlign: 'center'
    }}>
      {header}
    </Text>
    <Text
      style={{
        paddingTop: 10,
        fontSize: 15,
        color: colors.grey_30,
        textAlign: "center"
      }}
    >
      {body}
    </Text>
  </View>


export {Dots, WelcomeTexts}