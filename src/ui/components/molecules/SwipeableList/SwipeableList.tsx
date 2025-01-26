import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Article } from '../../../../domain/interfaces/article';
import { RefreshControl } from 'react-native-gesture-handler';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Actions{
  name: string;
  action: (item: Article) => void;
}
type SwipeableListProps<T> = {
  data: Article[];
  renderTitle: (item: Article) => string;
  renderDetails?: (item: Article) => string;
  firstAction?: Actions,
  secondAction?: Actions,
  onRefresh?: () => void;
  onPress: (item: Article) => void;
  refreshing?: boolean;
};

function SwipeableList<T>({
  data,
  renderTitle,
  renderDetails,
  firstAction,
  secondAction,
  onRefresh = () => {},
  refreshing = false,
  onPress = () => {},
}: SwipeableListProps<T>) {
  const rowHeightAnimatedValue = new Animated.Value(60);

  const renderVisibleItem = (item: Article) => (
    <Animated.View style={[styles.rowFront, { height: rowHeightAnimatedValue }]}>
      <TouchableHighlight
        style={styles.rowFrontVisible}
        underlayColor={'#aaa'}
        onPress= {()=> {onPress(item);}}
      >
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {renderTitle(item)}
          </Text>
          {renderDetails && (
            <Text style={styles.details} numberOfLines={1}>
              {renderDetails(item)}
            </Text>
          )}
        </View>
      </TouchableHighlight>
    </Animated.View>
  );

  const renderHiddenItem = (item: Article, rowMap: { [key: string]: any }) => (
    <Animated.View style={[styles.rowBack, { height: rowHeightAnimatedValue }]}>
      {firstAction && (
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => firstAction?.action(item)}
        >
          {/* <MaterialCommunityIcons
            name="pencil-outline"
            size={25}
            style={styles.trash}
            color="#fff"
          /> */}
          <Text>{firstAction?.name}</Text>
        </TouchableOpacity>
      )}
      {secondAction && (
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => secondAction?.action(item)}
        >
          {/* <MaterialCommunityIcons
            name="trash-can-outline"
            size={25}
            color="#fff"
          /> */}
          <Text>{secondAction?.name}</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SwipeListView
        data={data.map((item, index) => ({
          key: `${index}`,
          item,
        }))}
        renderItem={(data) => renderVisibleItem(data.item.item)}
        renderHiddenItem={(data, rowMap) =>
          renderHiddenItem(data.item.item, rowMap)
        }
        leftOpenValue={0}
        rightOpenValue={firstAction && secondAction ? -150 : -75}
        disableRightSwipe={true}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}

export default SwipeableList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
});
