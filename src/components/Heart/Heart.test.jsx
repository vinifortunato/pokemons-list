import { render, screen } from '@testing-library/react';
import Heart from './Heart';
import userEvent from '@testing-library/user-event';

describe('<Heart />', () => {
  it('should render correctly', () => {
    render(<Heart />);
    expect(screen.getByTestId('heart')).toBeInTheDocument();
  });

	it ('should render correctly when selected', () => {
		render(<Heart selected />);
		expect(screen.getByTestId('heart')).toBeInTheDocument();
		expect(screen.getByTestId('heart')).toHaveClass('heart-selected');
	});

	it ('should call onClick correctly', async () => {
		const mockedCallback = jest.fn();
		render(<Heart onClick={mockedCallback} />);
		expect(screen.getByTestId('heart')).toBeInTheDocument();
		await userEvent.click(screen.getByTestId('heart'));
		expect(mockedCallback).toBeCalledTimes(1);
	});
});
