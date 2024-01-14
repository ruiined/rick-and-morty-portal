import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Grid } from '@/components/molecules';

describe('Grid', () => {
  it('should render grid children', () => {
    render(
      <Grid>
        <div data-testid="child">Child Component</div>
      </Grid>,
    );
    expect(screen.getByTestId('child')).toBeDefined();
  });
});
