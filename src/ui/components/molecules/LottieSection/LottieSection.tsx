import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

interface LottieSectionProps {
  lottieSource: any;
  message: string;
}

const LottieSection = ({ lottieSource, message }:LottieSectionProps) => {
  return (
    <View style={styles.container} testID="lottie-section">
      <LottieView source={lottieSource} autoPlay loop style={styles.lottie} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  lottie: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});

export default LottieSection;
