import React from 'react';
import { Text, Animated, TouchableOpacity } from 'react-native';
import { Article } from '../../../../domain/interfaces/article';
import { RowMap } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from '../../molecules/SwipeableList/SwipeableList';
import ActionItemStyle from './ActionItem.style';

interface HiddenItemProps {
  item: Article;
  keyRow: string;
  rowMap: RowMap<{
    key: string;
    item: Article;
  }>;
  key: string;
  firstAction?: Actions;
  secondAction?: Actions;
}

const ActionItem = ({ item, keyRow, rowMap, key, firstAction, secondAction }: HiddenItemProps) => {
  const styles = ActionItemStyle;
  return (
    <Animated.View style={[styles.rowBack]}>
      {firstAction && (
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft,  {backgroundColor: firstAction.color(item)}]}
          onPress={() => {
            rowMap[keyRow]?.closeRow();
            firstAction.action(item);
          }}
        >
          <Text style={{ color: '#fff' }}>
            <Icon
              name={firstAction.name ?? (firstAction.computedName ? firstAction.computedName(item) : 'home')}
              size={30}
              color="#fff"
            />
          </Text>
        </TouchableOpacity>
      )}
      {secondAction && (
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight, {backgroundColor: secondAction.color(item)}]}
          onPress={() => {
            rowMap[keyRow]?.closeRow();
            secondAction.action(item);
          }}
        >
          <Text style={{ color: '#fff' }}>
            <Icon
              name={secondAction.name ?? (secondAction.computedName ? secondAction.computedName(item) : 'home')}
              size={30}
              color="#fff"
            />
          </Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default ActionItem;
