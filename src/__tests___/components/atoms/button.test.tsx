import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/atoms';

describe('Button', () => {
  it('should render button', () => {
    render(<Button label="Label" />);
    expect(screen.getByRole('button', { name: 'Label' })).toBeDefined();
  });
});
