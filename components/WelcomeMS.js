import { Image, Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { ControlButtons, Dots, WelcomeTexts } from "./InitialScreensComponents";

const WelcomeMS = () =>
  <View style={styles.container}>
    <Image
      source={{
        uri: "https://res.cloudinary.com/duqny6afm/image/upload/v1711772955/therapal/unsplash__-prYEEf0v4_qszlb6.png"
      }}
      style={styles.image}
    />
    <View style={styles.textBody}>
      <Dots />
      <WelcomeTexts
        header="Get the best mental support anywhere, anytime"
        body="Personalize your therapist and enjoy sessions through your preferred mode of communication"
      />
      <ControlButtons />
    </View>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 700,
    flex: 3
  },
  textBody: {
    flex: 2,
  }
})

export default WelcomeMS