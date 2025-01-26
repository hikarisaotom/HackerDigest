import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { RefreshControl } from 'react-native-gesture-handler';
import { Article } from '../../../../domain/interfaces/article';
import VisibleItem from '../../atoms/VisibleItem';
import HiddenItem from '../../atoms/HiddenItem';

interface Actions {
  name: string;
  action: (item: Article) => void;
}

type SwipeableListProps = {
  data: Article[];
  renderTitle: (item: Article) => string;
  renderDetails?: (item: Article) => string;
  firstAction?: Actions;
  secondAction?: Actions;
  onRefresh?: () => void;
  onPress: (item: Article) => void;
  refreshing?: boolean;
};

const SwipeableList = ({
  data,
  renderDetails,
  firstAction,
  secondAction,
  onRefresh = () => {},
  refreshing = false,
  onPress = () => {},
}:SwipeableListProps) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SwipeListView
        data={data.map((item, index) => ({
          key: index+'',
          item,
        }))}
        renderItem={({ item }) => (
          <VisibleItem
            item={item.item}
            onPress={onPress}
            renderDetails={renderDetails}
          />
        )}
        renderHiddenItem={(data, rowMap) => (
          <HiddenItem
            item={data.item.item}
            rowMap={rowMap}
            key={data.item.key}
            firstAction={firstAction}
            secondAction={secondAction}
          />
        )}
        leftOpenValue={0}
        rightOpenValue={firstAction && secondAction ? -150 : -75}
        disableRightSwipe={true}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onRowOpen={(rowKey, rowMap) => {
          setTimeout(() => {
              rowMap[rowKey].closeRow()
              console.log('[!@#]Row opened ', rowKey)
          }, 3000)
      }}
      />
    </View>
  );
};

export default SwipeableList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
});
