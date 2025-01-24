import React from 'react';
import { Text } from 'react-native';
import newsDescriptionStyle from './NewsDescription.style';
interface NewsDescriptionProps {
    description: String;
}
const NewsDescription = ({description}:NewsDescriptionProps) =>{
    let style = newsDescriptionStyle;
    return (
        <Text style ={style.description}> {description}</Text>
    );
};

export default NewsDescription;
