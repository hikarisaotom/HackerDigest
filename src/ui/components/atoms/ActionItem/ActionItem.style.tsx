import { StyleSheet } from 'react-native';
import customTheme from '../../../styles/CustomTheme';

const ActionItemStyle = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: customTheme.colors.background,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: customTheme.spacing.m,
    margin: customTheme.spacing.s,
    marginBottom: customTheme.spacing.xs,
    borderRadius: customTheme.borderRadius.sm,
    height: 80,
    shadowColor: customTheme.colors.buttons,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: customTheme.spacing.l,
  },
  backRightBtnLeft: {
    backgroundColor: customTheme.colors.accentGoldenYellow,
    right: 75,
    borderRadius: customTheme.borderRadius.none,
  },
  backRightBtnRight: {
    backgroundColor: customTheme.colors.complementary,
    right: 0,
    borderTopRightRadius: customTheme.borderRadius.none,
    borderBottomRightRadius: customTheme.borderRadius.sm,
  },
});

export default ActionItemStyle;
