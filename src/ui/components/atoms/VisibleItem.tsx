import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableHighlight } from 'react-native';
import { Article } from '../../../domain/interfaces/article';

interface VisibleItemProps {
  item: Article;
  onPress: (item: Article) => void;
  renderDetails?: (item: Article) => string;
}

const VisibleItem: React.FC<VisibleItemProps> = ({ item, onPress, renderDetails }) => {
  return (
    <Animated.View style={[styles.rowFront]}>
      <TouchableHighlight
        style={styles.rowFrontVisible}
        underlayColor={'#aaa'}
        onPress={() => onPress(item)}
      >
        <View>
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

const styles = StyleSheet.create({
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
