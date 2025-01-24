import { StyleSheet } from 'react-native';
import customTheme from '../../../styles/CustomTheme';
const rowItemStyle = StyleSheet.create({
    rowFront: {
        backgroundColor: customTheme.colors.background,
        borderRadius: customTheme.borderRadius.md,
        height: 60,
        margin: customTheme.spacing.s,
        marginBottom: customTheme.spacing.m,
        shadowColor: customTheme.colors.dark,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      rowFrontVisible: {
        backgroundColor: customTheme.colors.background,
        borderRadius: customTheme.borderRadius.md,
        height: 60,
        padding: customTheme.spacing.s,
        marginBottom: customTheme.spacing.m,
      },
});

export default rowItemStyle;
