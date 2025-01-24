import React from 'react';
import { Text } from 'react-native';
import newsTitleStyle from './NewsTitle.style';
interface NewsTitleProps {
    title: String;
}
const NewsTitle = ({title}:NewsTitleProps) =>{
    let style = newsTitleStyle;
    return (
        <Text style ={style.header}> {title}</Text>
    );
};

export default NewsTitle;
