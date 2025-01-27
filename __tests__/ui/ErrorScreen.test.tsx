import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import ErrorScreen from '../../src/ui/screens/ErrorScreen/ErrorScreen';

test('renders ErrorScreen with the correct message and Lottie animation', async () => {
  render(<ErrorScreen />);

  const message = await screen.findByText('Sorry, looks like we could not load the information');
  expect(message).toBeTruthy();

  const lottieComponent = screen.getByTestId('lottie-section');
  expect(lottieComponent).toBeTruthy();

  expect(screen.toJSON()).toMatchSnapshot();
});
