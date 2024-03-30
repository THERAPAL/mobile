import colors from "../../constants/colors"
import { Octicons } from '@expo/vector-icons';
import { View } from "react-native";

const Dots = ({currentIndex, setIndex}) =>  {
  return (
    <View style={{ columnGap: 15, paddingTop: 20, paddingBottom: 25, flexDirection: 'row', justifyContent: 'center'}}>
      {['first', 'second', 'third']
      .map((i, idx) => {
        return (
          <Octicons
            name='dot-fill' 
            key={i}
            size={25} 
            color={currentIndex === idx ? colors.blue_60 : colors.grey_} 
            onPress={() => setIndex(idx)}
          />
        )
      })}
    </View>
  )
}

export default Dots