import { StyleSheet } from "react-native";
import customTheme from '../../../styles/CustomTheme';

const rowsSkeletonStyles = StyleSheet.create({
    mainContainer: {
      backgroundColor: customTheme.colors.background,
      borderRadius: customTheme.borderRadius.md,
      height: 60,
      margin: customTheme.spacing.s,
      marginBottom: customTheme.spacing.m,
      shadowColor: customTheme.colors.dark,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 5,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: customTheme.borderRadius.xxl,
    },
    textContainer: {
      marginLeft: customTheme.spacing.m,
    },
    image: {
      width: 120,
      height: 20,
    },
    text: {
      marginTop: customTheme.spacing.s,
      fontSize: 14,
      lineHeight: 18,
    },
  });

  export default rowsSkeletonStyles;
