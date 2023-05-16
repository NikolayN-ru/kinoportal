import { render, screen } from '@testing-library/react';
import ButtonMore from './index';

describe('ButtonMore', () => {
  it('renders button with title', () => {
    const title = 'Load more';
    render(<ButtonMore title={title} />);
    const button = screen.getByRole('button', { name: title });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(title);
  });
});
