import React from 'react';
import { Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Article } from '../../../domain/interfaces/article';
import { RowMap } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from '../molecules/SwipeableList/SwipeableList';

interface HiddenItemProps {
  item: Article;
  keyRow: string;
  rowMap: RowMap<{
    key: string;
    item: Article;
}>
  key: string;
  firstAction?: Actions;
  secondAction?: Actions;
}

const HiddenItem = ({ item, keyRow,  rowMap, key, firstAction, secondAction }:HiddenItemProps) => {
  return (
    <Animated.View style={[styles.rowBack]}>
      {firstAction && (
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => {
            console.log('[!@#] key for closing', keyRow);
            rowMap[keyRow]?.closeRow();
            firstAction.action(item);
          }}
        >
          <Text style={{ color: '#fff' }}> <Icon name= {firstAction.name ?? ( firstAction.computedName ? firstAction.computedName(item) : 'home')} size={30} color="#fff" /></Text>
        </TouchableOpacity>
      )}
      {secondAction && (
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => {
            console.log('[!@#] key for closing', keyRow);
            rowMap[keyRow]?.closeRow();
            secondAction.action(item);
          }}
        >
          <Text style={{ color: '#fff' }}> <Icon name= {secondAction.name ?? ( secondAction.computedName ? secondAction.computedName(item) : 'home')} size={30} color="#fff" /></Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default HiddenItem;

const styles = StyleSheet.create({
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
});
