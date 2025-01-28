import customTheme from '../../src/ui/styles/CustomTheme';


describe('customTheme', () => {

  test('should have the correct color values', () => {
    expect(customTheme.colors.primary).toBe('#3498db');
    expect(customTheme.colors.secondary).toBe('#2ecc71');
    expect(customTheme.colors.danger).toBe('#e74c3c');
    expect(customTheme.colors.warning).toBe('#f1c40f');
    expect(customTheme.colors.info).toBe('#8e44ad');
    expect(customTheme.colors.light).toBe('#ecf0f1');
    expect(customTheme.colors.dark).toBe('#2c3e50');
    expect(customTheme.colors.background).toBe('#ffffff');
    expect(customTheme.colors.textPrimary).toBe('#2c3e50');
    expect(customTheme.colors.textSecondary).toBe('#7f8c8d');
  });

  test('should have the correct spacing values', () => {
    expect(customTheme.spacing.xs).toBe(4);
    expect(customTheme.spacing.s).toBe(8);
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
