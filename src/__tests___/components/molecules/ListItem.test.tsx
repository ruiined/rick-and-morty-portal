import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ListItem } from '@/components/molecules/ListItem';

describe('ListItem', () => {
  it('should render the label and value', () => {
    const label = 'Test Label';
    const value = 'Test Value';
    render(<ListItem label={label} value={value} />);
    const listItemElement = screen.getByTestId('list-item');
    expect(listItemElement).toBeDefined();
    expect(listItemElement).toHaveProperty('textContent', `${label}: ${value}`);
  });
});
