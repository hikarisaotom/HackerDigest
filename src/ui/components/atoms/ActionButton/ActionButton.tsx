import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import actionButtonStyle from './ActionButton.style';
interface ActionButtonProps {
    onPressed: () => void;
}
const ActionButton = ({ onPressed }: ActionButtonProps) => {
    let style = actionButtonStyle;
    return (
        <View style={style.rowBack}>
            <TouchableOpacity
                style={[style.backRightBtn, style.backRightBtnRight]}
                onPress={onPressed}>
                <Text style={style.backTextWhite}>delete</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ActionButton;
