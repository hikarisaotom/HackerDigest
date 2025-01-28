import { StyleSheet } from 'react-native';
import customTheme from '../../styles/CustomTheme';

const ArticlesScreenStyles = StyleSheet.create({
    scrollView: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      padding: customTheme.spacing.l,
      backgroundColor: customTheme.colors.background,
    },
  });

  export default ArticlesScreenStyles;
