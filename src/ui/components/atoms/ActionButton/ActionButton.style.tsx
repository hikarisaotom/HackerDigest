import { StyleSheet } from 'react-native';
import customTheme from '../../../styles/CustomTheme';
const actionButtonStyle = StyleSheet.create({

    rowBack: {
        alignItems: 'center',
        backgroundColor: customTheme.colors.light,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: customTheme.spacing.m,
        margin: customTheme.spacing.s,
        marginBottom: customTheme.spacing.m,
        borderRadius: customTheme.borderRadius.md,
      },
      backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: customTheme.spacing.s,
      },
      backRightBtnRight: {
        backgroundColor: customTheme.colors.danger,
        right: 0,
        borderTopRightRadius: customTheme.borderRadius.md,
        borderBottomRightRadius: customTheme.borderRadius.md,
      },
      backTextWhite: {
        color: customTheme.colors.textPrimary,
      },
});

export default actionButtonStyle;
