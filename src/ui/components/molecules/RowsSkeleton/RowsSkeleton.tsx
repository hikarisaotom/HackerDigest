import { Image } from 'moti';
import React from 'react';
import { Text, View  } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import customTheme from '../../../styles/CustomTheme';
import rowsSkeletonStyles from './RowsSkeleton.style';

export default function RowsSkeleton() {
  const styles = rowsSkeletonStyles;
  const items = Array.from({ length: 10 }, (_, index) => (
   <View style={styles.mainContainer} key={index}>
     <SkeletonPlaceholder key={index} borderRadius={customTheme.borderRadius.sm} backgroundColor={customTheme.colors.light} speed={300}>
      <View style={styles.container}>
        <View style={styles.avatar} />
        <View style={styles.textContainer}>
          <Image style={styles.image} source={{uri: ''}} />
          <Text style={styles.text}>Hello world</Text>
        </View>
      </View>
    </SkeletonPlaceholder>
   </View>
  ));

  return <>{items}</>;

}
