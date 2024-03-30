import { Text, View } from "react-native"
import colors from "../../constants/colors"

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
export default WelcomeTexts