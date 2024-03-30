import { useStore } from '../hooks/useStore';
import colors from '../constants/colors';
import { View, Text, Button, StyleSheet } from 'react-native';
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

const WelcomeTexts = ({header, body}) => {
  

  return (
    <View style={{flex: 3, width: '90%'}}>
      <Text style={{
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.grey_40,
        textAlign: 'center',
        fontFamily: 'Inter-SemiBold'
      }}>
        {header}
      </Text>
    <Text
      style={{
        paddingTop: 10,
        fontSize: 15,
        color: colors.grey_30,
        fontWeight: '100',
        fontFamily: 'Inter-Regular',
        textAlign: "center"
      }}
    >
      {body}
    </Text>
  </View>
  )
}


const ControlButtons = () => {

  return (
    <View style={{flexDirection: 'row', paddingBottom: 15, justifyContent: 'space-between'}}>
      
      <Text style={styles.skipButton}>Skip</Text>
      <Text style={styles.nextButton}>Next</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  skipButton: {
    color: colors.grey_30
  },
  nextButton: {
    backgroundColor: colors.blue_60,
    color: '#fff',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
})
  


export {Dots, WelcomeTexts, ControlButtons}