import { StyleSheet } from 'react-native';
import customTheme from '../../../styles/CustomTheme';

const ArticleRowStyle = StyleSheet.create({
  rowFront: {
    backgroundColor: customTheme.colors.background,
    borderRadius: customTheme.borderRadius.sm,
    height: 80,
    margin: customTheme.spacing.s,
    marginBottom: customTheme.spacing.xs,
    shadowColor: customTheme.colors.buttons,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  rowFrontVisible: {
    backgroundColor: customTheme.colors.background,
    borderRadius: customTheme.borderRadius.sm,
    height: 80,
    paddingHorizontal: customTheme.spacing.m,
    paddingVertical: customTheme.spacing.s,
    marginBottom: customTheme.spacing.m,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: customTheme.fontSizes.m,
    fontWeight: 'bold',
    color: customTheme.colors.textPrimary,
    marginBottom: customTheme.spacing.xs,
  },
  details: {
    fontSize: customTheme.fontSizes.s,
    color: customTheme.colors.textSecondary,
  },
});

export default ArticleRowStyle;
