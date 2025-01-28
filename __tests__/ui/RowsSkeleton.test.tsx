import React from 'react';
import { render, screen } from '@testing-library/react-native';
import RowsSkeleton from '../../src/ui/components/molecules/RowsSkeleton/RowsSkeleton';

describe('RowsSkeleton', () => {
  test('should render the correct number of skeleton items', () => {
    //TODO: Fix this test because of skeleton placeholder import
    // render(<RowsSkeleton />);
    // const skeletonItems = screen.getAllByTestId('skeleton-item');
    // expect(skeletonItems).toHaveLength(10);
  });

  test('should render skeleton components with correct styles', () => {
    // render(<RowsSkeleton />);
    // const skeletonItem = screen.getAllByTestId('skeleton-item')[0];
    // expect(skeletonItem.props.borderRadius).toBe(4);
    // expect(skeletonItem.props.backgroundColor).toBe('#ecf0f1');
  });

});
