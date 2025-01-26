import React from 'react';
import { Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Article } from '../../../domain/interfaces/article';
import { RowMap } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Ionicons';

interface HiddenItemProps {
  item: Article;
  rowMap: RowMap<{
    key: string;
    item: Article;
}>
  key: string;
  firstAction?: { name: string; action: (item: Article) => void };
  secondAction?: { name: string; action: (item: Article) => void };
}

const HiddenItem: React.FC<HiddenItemProps> = ({ item, rowMap, key, firstAction, secondAction }) => {
  return (
    <Animated.View style={[styles.rowBack]}>
      {firstAction && (
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => {
            firstAction.action(item);
            console.log('[!@#] key for closing', key);
            rowMap[key]?.closeRow();
          }}
        >
        
          <Text style={{ color: '#fff' }}>{firstAction.name} <Icon name="trash" size={30} color="#fff" /></Text>
        </TouchableOpacity>
      )}
      {secondAction && (
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => {
            secondAction.action(item);
            rowMap[key]?.closeRow();
          }}
        >
          <Text style={{ color: '#fff' }}>{secondAction.name}</Text>
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
