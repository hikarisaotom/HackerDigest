import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import rowItemStyle from './RowItem.style';
import NewsItem from '../NewsItem/NewsItem';
interface RowItemProps {
    title: String;
    autor: String;
    creationDate: String;
    onPressCell: () => void;
}
const RowItem = ({ title, autor, creationDate, onPressCell }: RowItemProps) => {
    let style = rowItemStyle;
    return (
        <View style={style.rowFront}>
            <TouchableHighlight
                onPress={onPressCell}
                style={style.rowFrontVisible}
                underlayColor={'#AAA'}>
                <NewsItem
                    title={title}
                    autor={autor}
                    creationDate={creationDate}
                />
            </TouchableHighlight>
        </View>
    );
};

export default RowItem;
