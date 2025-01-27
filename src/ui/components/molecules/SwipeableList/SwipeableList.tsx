import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { RefreshControl } from 'react-native-gesture-handler';
import { Article } from '../../../../domain/interfaces/article';
import VisibleItem from '../../atoms/VisibleItem';
import HiddenItem from '../../atoms/HiddenItem';

export interface Actions {
  name?: string;
  computedName?: (item: Article) => string;
  action: (item: Article) => void;
}

type SwipeableListProps = {
  data: Article[];
  firstAction?: Actions;
  secondAction?: Actions;
  onRefresh?: () => void;
  onPress: (item: Article) => void;
  refreshing?: boolean;
};

const SwipeableList = ({
  data,
  firstAction,
  secondAction,
  onRefresh = () => {},
  refreshing = false,
  onPress = () => {},
}:SwipeableListProps) => {
  const [keyRow, setKeyRow] = useState('0');
  const renderDetails = (item: Article) => {
    return item.author + ' - ' + item.date;
  };
  return (
    <View style={styles.container} testID="swipeable-list">
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
            keyRow ={keyRow}
            rowMap={rowMap}
            key={data.item.item.id+"-"+data.item.item.title}
            firstAction={firstAction}
            secondAction={secondAction}
          />
        )}
        leftOpenValue={0}
        rightOpenValue={firstAction && secondAction ? -150 : -75}
        disableRightSwipe={true}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onRowOpen={(rowKey, rowMap) => {
          setKeyRow(rowKey);
      }}
      closeOnRowPress={true}
      closeOnRowBeginSwipe={true}
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
