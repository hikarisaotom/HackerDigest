import { StyleSheet } from 'react-native';
import customTheme from '../../styles/CustomTheme';


const SettingsScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: customTheme.spacing.m,
        backgroundColor: customTheme.colors.light,
    },
    header: {
        fontSize: customTheme.fontSizes.xl,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: customTheme.spacing.l,
        color: customTheme.colors.dark,
    },
    sectionContainer: {
        marginBottom: customTheme.spacing.l,
    },
    sectionTitle: {
        fontSize: customTheme.fontSizes.l,
        fontWeight: '600',
        marginBottom: customTheme.spacing.m,
        color: customTheme.colors.textSecondary,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: customTheme.colors.border,
        borderWidth: 1,
        paddingLeft: customTheme.spacing.s,
        borderRadius: customTheme.borderRadius.sm,
        backgroundColor: customTheme.colors.background,
        fontSize: customTheme.fontSizes.m,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: customTheme.spacing.s,
    },
    toggleLabel: {
        fontSize: customTheme.fontSizes.m,
        color: customTheme.colors.textSecondary,
    },
    divider: {
        marginVertical: customTheme.spacing.m,
        backgroundColor: customTheme.colors.divider,
        height: 1,
    },
    buttonContainer: {
        marginTop: customTheme.spacing.l,
    },
    button: {
        marginBottom: customTheme.spacing.m,
        borderRadius: customTheme.borderRadius.sm,
    },
    buttonText: {
        fontSize: customTheme.fontSizes.m,
        color: customTheme.colors.background,
    },
    buttonTextOutlined: {
        fontSize: customTheme.fontSizes.m,
        color: customTheme.colors.primary,
    },
});

export default SettingsScreenStyles;