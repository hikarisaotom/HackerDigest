import React from 'react';
import { View, Text, Animated, TouchableHighlight } from 'react-native';
import { Article } from '../../../../domain/interfaces/article';
import ArticleRowStyle from './ArticleRow.style';
import customTheme from '../../../styles/CustomTheme';

interface VisibleItemProps {
  item: Article;
  onPress: (item: Article) => void;
  renderDetails?: (item: Article) => string;
}

const VisibleItem = ({ item, onPress, renderDetails }: VisibleItemProps) => {
  const styles = ArticleRowStyle;
  return (
    <Animated.View style={[styles.rowFront]}>
      <TouchableHighlight
        style={styles.rowFrontVisible}
        underlayColor={customTheme.colors.divider}
        onPress={() => onPress(item)}
      >
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
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
};

export default VisibleItem;
