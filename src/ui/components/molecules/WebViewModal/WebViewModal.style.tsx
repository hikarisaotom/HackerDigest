import { StyleSheet } from 'react-native';
import customTheme from '../../../styles/CustomTheme'; // Adjust the path if needed

const { colors, spacing, fontSizes, borderRadius } = customTheme;

const WebViewModalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    height: spacing.xxl,
    backgroundColor: colors.light,
    justifyContent: 'flex-end',
    alignContent: 'flex-start',
    paddingHorizontal: spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary,
  },
  closeButton: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: fontSizes.s,
    textAlign: 'left',
  },
  webview: {
    flex: 1,
  },
  errorText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: fontSizes.l,
    color: colors.danger,
  },
});

export default WebViewModalStyles;
