import { StyleSheet } from 'react-native';
import customTheme from '../../../styles/CustomTheme';
const newsTitleStyle = StyleSheet.create({

    header: {
        fontSize: customTheme.fontSizes.s,
        fontWeight: 'bold',
        marginBottom: customTheme.spacing.xs,
        color: customTheme.colors.dark,
    },
});

export default newsTitleStyle;
