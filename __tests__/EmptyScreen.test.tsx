import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import EmptyScreen from '../src/ui/screens/EmptyScreen/EmptyScreen';

test('renders EmptyScreen with the correct message and Lottie animation', async () => {
  // Render the EmptyScreen component
  render(<EmptyScreen />);

  // Check if the message is displayed correctly
  const message = await screen.findByText("Ups!, you haven't added anything yet");
  expect(message).toBeTruthy(); // Check if the message is rendered

  // Check if the LottieSection is rendered
  const lottieComponent = screen.getByTestId('lottie-section');  // Assuming you set a testID for LottieSection
  expect(lottieComponent).toBeTruthy(); // Check if the LottieSection is in the component tree

  // Snapshot test to ensure UI doesn't change unexpectedly
  expect(screen.toJSON()).toMatchSnapshot();
});
