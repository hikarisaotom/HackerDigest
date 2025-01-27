import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import customTheme from '../../../styles/CustomTheme';

interface LottieSectionProps {
  lottieSource: any;
  title: string;
  message: string;
}

const LottieSection = ({ lottieSource, message, title}:LottieSectionProps) => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>{title}</Text>
      <LottieView source={lottieSource} autoPlay loop style={styles.lottie} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: customTheme.colors.background,
  },
  lottie: {
    width: 200,
    height: 200,
  },
  title: {
    marginTop: 20,
    fontSize: customTheme.fontSizes.xxl,
    fontWeight: 'bold',
    textAlign: 'center',
    color: customTheme.colors.analogousDeepLavender,
  },
  text: {
    marginTop: 20,
    fontSize: customTheme.fontSizes.l,
    fontWeight: 'bold',
    textAlign: 'center',
    color: customTheme.colors.neutralCharcoalGray,
  },
});

export default LottieSection;
