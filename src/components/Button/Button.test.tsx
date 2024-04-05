import { render } from '../../tests/test-utils';
import Button from './Button';
import '@testing-library/jest-dom'

test('renders the Button component', () => {
  const element = render(<Button />);
  const buttonElement: HTMLElement = element.getByText('Something');
  expect(buttonElement).toBeInTheDocument();
});
