import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { List } from '@/components/molecules/List';

describe('List', () => {
  it('should render the list component', () => {
    const items = [
      ['Item 1', 'Value 1'],
      ['Item 2', 'Value 2'],
    ];
    render(<List items={items} />);

    const listItemElements = screen.getAllByTestId('list-item');
    expect(listItemElements).toHaveLength(items.length);
    expect(listItemElements).toBeDefined();
  });
});
