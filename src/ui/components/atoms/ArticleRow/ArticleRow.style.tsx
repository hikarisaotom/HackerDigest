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
    // paddingHorizontal: customTheme.spacing.m,
    paddingVertical: customTheme.spacing.s,
    marginBottom: customTheme.spacing.m,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
  },
  title: {
    fontSize: customTheme.fontSizes.m,
    textAlign:'auto',
    fontWeight: 'bold',
    color: customTheme.colors.textPrimary,
    marginBottom: customTheme.spacing.xs,
  },
  details: {
    fontSize: customTheme.fontSizes.s,
    color: customTheme.colors.textSecondary,
  },

  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' },
  column: { flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '80%' },
  image: { width: 80, height: 80 },
});

export default ArticleRowStyle;
