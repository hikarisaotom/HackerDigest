import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import EmptyScreen from '../../src/ui/screens/EmptyScreen/EmptyScreen';

test('renders EmptyScreen with the correct message and Lottie animation', async () => {
  render(<EmptyScreen />);

  const message = await screen.findByText("Ups!, you haven't added anything yet");
  expect(message).toBeTruthy();
  const lottieComponent = screen.getByTestId('lottie-section');
  expect(lottieComponent).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});
