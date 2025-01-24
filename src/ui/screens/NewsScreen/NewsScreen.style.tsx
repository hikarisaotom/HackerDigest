import { StyleSheet } from 'react-native';
import customTheme from '../../styles/CustomTheme';

const newsScreenStyles = StyleSheet.create({
    scrollView: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      padding: customTheme.spacing.l,
    },
    container: {
      // backgroundColor: customTheme.colors.light,
      backgroundColor: customTheme.colors.danger,
      flex: 1,
    },
  });

  export default newsScreenStyles;
