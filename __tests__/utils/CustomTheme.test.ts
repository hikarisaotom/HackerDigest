import customTheme from '../../src/ui/styles/CustomTheme';

describe('customTheme', () => {

  test('should have the correct color values', () => {
    expect(customTheme.colors.primary).toBe('#007bff');
    expect(customTheme.colors.secondary).toBe('#28a745');
    expect(customTheme.colors.danger).toBe('#dc3545');
    expect(customTheme.colors.warning).toBe('#f59e0b');
    expect(customTheme.colors.info).toBe('#17a2b8');
    expect(customTheme.colors.light).toBe('#f8f9fa');
    expect(customTheme.colors.dark).toBe('#343a40');
    expect(customTheme.colors.background).toBe('#ffffff');
    expect(customTheme.colors.textPrimary).toBe('#343a40');
    expect(customTheme.colors.textSecondary).toBe('#495057');
    expect(customTheme.colors.border).toBe('#ced4da');
    expect(customTheme.colors.divider).toBe('#dee2e6');
    expect(customTheme.colors.buttons).toBe('#6750a4');
    expect(customTheme.colors.complementary).toBe('#a46770');
    expect(customTheme.colors.analogousDeepLavender).toBe('#5e3e7e');
    expect(customTheme.colors.analogousLavender).toBe('#7f67b4');
    expect(customTheme.colors.contrastingWhite).toBe('#ffffff');
    expect(customTheme.colors.contrastingLightGray).toBe('#f8f9fa');
    expect(customTheme.colors.accentGreen).toBe('#28a745');
    expect(customTheme.colors.accentGoldenYellow).toBe('#f59e0b');
    expect(customTheme.colors.neutralCharcoalGray).toBe('#343a40');
    expect(customTheme.colors.neutralLightGray).toBe('#ced4da');
  });

  test('should have the correct spacing values', () => {
    expect(customTheme.spacing.xs).toBe(4);
    expect(customTheme.spacing.xsm).toBe(5);
    expect(customTheme.spacing.s).toBe(8);
    expect(customTheme.spacing.sm).toBe(10);
    expect(customTheme.spacing.m).toBe(16);
    expect(customTheme.spacing.l).toBe(24);
    expect(customTheme.spacing.xl).toBe(32);
    expect(customTheme.spacing.xxl).toBe(48);
  });

  test('should have the correct font size values', () => {
    expect(customTheme.fontSizes.xs).toBe(12);
    expect(customTheme.fontSizes.s).toBe(14);
    expect(customTheme.fontSizes.m).toBe(16);
    expect(customTheme.fontSizes.l).toBe(20);
    expect(customTheme.fontSizes.xl).toBe(24);
    expect(customTheme.fontSizes.xxl).toBe(32);
  });

  test('should have the correct border radius values', () => {
    expect(customTheme.borderRadius.none).toBe(0);
    expect(customTheme.borderRadius.sm).toBe(4);
    expect(customTheme.borderRadius.md).toBe(8);
    expect(customTheme.borderRadius.lg).toBe(16);
    expect(customTheme.borderRadius.xl).toBe(24);
    expect(customTheme.borderRadius.xxl).toBe(50);
  });

  test('should have the correct breakpoint values', () => {
    expect(customTheme.breakpoints.xs).toBe(480);
    expect(customTheme.breakpoints.sm).toBe(768);
    expect(customTheme.breakpoints.md).toBe(1024);
    expect(customTheme.breakpoints.lg).toBe(1280);
    expect(customTheme.breakpoints.xl).toBe(1440);
  });

});
