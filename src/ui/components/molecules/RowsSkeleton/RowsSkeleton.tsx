// import React from 'react';
// import { Skeleton } from 'moti/skeleton'
// import { Text } from 'react-native-gesture-handler';
// import { MotiView } from 'moti'

// const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />

// interface RowsSkeletonProps {
//     loading: boolean;
// }
// const RowsSkeleton = ({loading}:RowsSkeletonProps) => {
//     const skeletonArray = new Array(7).fill(0);
//     return (
//         <Skeleton.Group show={loading}>
//       <Skeleton>
//       <Text>{' '}</Text>
//       </Skeleton>
//       <Skeleton>
//         <Text>{' '}</Text>
//       </Skeleton>
//     </Skeleton.Group>
//     );
// // };

// export default RowsSkeleton;

import React, { useReducer } from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'
import customTheme from '../../../styles/CustomTheme'
import { Text } from 'react-native-gesture-handler'
import NewsItem from '../NewsItem/NewsItem'

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />
interface RowsSkeletonProps {
    loading: boolean;
}

export default function RowsSkeleton({loading}:RowsSkeletonProps) {
  const [dark, toggle] = useReducer((s) => !s, true)

  const colorMode = 'light';

  return (
    <Pressable onPress={toggle} style={styles.container}>
      <MotiView
        transition={{
          type: 'spring',
        }}
        style={[styles.container, styles.padded]}
        animate={{ backgroundColor:  customTheme.colors.light }}
      >
        <Skeleton colorMode={colorMode} width={'100%'} />
        <Spacer height={4} />
        <Skeleton colorMode={colorMode} width={250} />
      </MotiView>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  padded: {
    padding: 16,
  },
});
