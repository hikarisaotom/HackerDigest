import React from 'react';
import { View, Text, Animated, TouchableHighlight, Image } from 'react-native';
import { Article } from '../../../../domain/interfaces/article';
import ArticleRowStyle from './ArticleRow.style';
import customTheme from '../../../styles/CustomTheme';
import LottieView from 'lottie-react-native';
import { user } from '../../../assets';

interface ArticleRowProps {
  item: Article;
  onPress: (item: Article) => void;
  renderDetails?: (item: Article) => string;
}

const ArticleRow = ({ item, onPress, renderDetails }: ArticleRowProps) => {
  const styles = ArticleRowStyle;
  return (
    <Animated.View style={[styles.rowFront]}>
      <TouchableHighlight
        style={styles.rowFrontVisible}
        underlayColor={customTheme.colors.divider}
        onPress={() => onPress(item)}
      >
        <View style={styles.content}>
          <View style={styles.row}>
            <LottieView source ={user} autoPlay loop={false}  speed ={0.1} style={styles.image} />
            <View style={styles.column}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
              {renderDetails && (
                <Text style={styles.details} numberOfLines={1}>
                  {renderDetails(item)}
                </Text>
              )}
            </View>
          </View>


        </View>
      </TouchableHighlight>
    </Animated.View>
  );
};

export default ArticleRow;
