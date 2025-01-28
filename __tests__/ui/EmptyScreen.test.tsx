import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import EmptyScreen from '../../src/ui/screens/EmptyScreen/EmptyScreen';
test('renders EmptyScreen with the correct message and Lottie animation', async () => {
  render(<EmptyScreen />);

  const title = await screen.getByTestId('lottie-title');
  expect(title).toBeTruthy();
  const description = await screen.getByTestId('lottie-description');
  expect(description).toBeTruthy();
  const lottieComponent = screen.getByTestId('lottie-section');
  expect(lottieComponent).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});
