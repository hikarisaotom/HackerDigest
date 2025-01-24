import React from 'react';
import newsItemStyle from './NewsItem.style';
import NewsTitle from '../../atoms/NewsTitle/NewsTitle';
import NewsDescription from '../../atoms/NewsDescription/NewsDescription';
import { Text, View } from 'react-native';
interface NewsItemProps {
    title: String;
    autor: String;
    creationDate: String;
}
const NewsItem = ({ title, autor, creationDate }: NewsItemProps) => {
    let style = newsItemStyle;
    return (
        <View style= {style.container}>
            <NewsTitle title={title} />
            <View style={style.descriptionRow}>
                <NewsDescription description={autor} />
                <Text> - </Text>
                <NewsDescription description={creationDate} />
            </View>
        </View>
    );
};

export default NewsItem;
