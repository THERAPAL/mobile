import { Image, Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import colors from "../../constants/colors";
import WelcomeTexts from "./WelcomeText";
import Dots from "./Dots";

const screens = [
  {
    header: "Get the best mental support anywhere, anytime",
    text: "Personalize your therapist and enjoy sessions through your preferred mode of communication",
    image: {
      uri: "https://res.cloudinary.com/duqny6afm/image/upload/v1711772955/therapal/unsplash__-prYEEf0v4_qszlb6.png"
    }
  },
  {
    header: "Enjoy access to tools that aid your mental health",
    text: "Track your mood, meditate, receive daily affirmations and access your therapist anytime",
    image: {
      uri: "https://res.cloudinary.com/duqny6afm/image/upload/v1711772951/therapal/unsplash_97JLexPYfbo_m5cubi.png"
    }
  },
  {
    header: "Become a better version of yourself",
    text: "Improve your mindedness and wellness with daily meditations and affirmations",
    image: {
      uri: "https://res.cloudinary.com/duqny6afm/image/upload/v1711772950/therapal/unsplash_HS5CLnQbCOc_vs35ba.png"
    }
  },
]

const WelcomeScreens = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  function setIndex(idx) {
    if (idx > 2) {
      setCurrentIndex(0)
      return
    }
    setCurrentIndex(idx)
  }

  return <View style={styles.container}>
    <Image
      source={{
        uri: screens[currentIndex].image.uri
      }}
      style={styles.image}
    />
    <View style={styles.textBody}>
      <Dots 
        currentIndex={currentIndex} 
        setIndex={(idx) => {setIndex(idx)}}
      />
      <WelcomeTexts
        header={screens[currentIndex].header}
        body={screens[currentIndex].text}
      />
      <View style={{width: '90%', flexDirection: 'row', paddingBottom: 15, justifyContent: 'space-between'}}>
        <Text style={styles.skipButton}>Skip</Text>
        <Text 
          style={styles.nextButton} 
          onPress={() => {
            setIndex(currentIndex + 1)
          }}
        >
          Next
        </Text>
      </View>
    </View>
  </View>
}

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
  },
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

  

export default WelcomeScreens