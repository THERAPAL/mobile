import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const Splash = () => 
  <View style={styles.splash}>
    <Image 
      source={{uri: 'https://res.cloudinary.com/duqny6afm/image/upload/v1711772938/therapal/Group_1_l0pvpn.png'}}
      style={{width: 150, height: 150, resizeMode: 'contain'}}
    />
  </View>

const styles = StyleSheet.create({
  splash: {
    backgroundColor: colors.blue_50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Splash