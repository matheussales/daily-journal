import { render, screen } from '@testing-library/react';
import HomeTemplate from '.';

describe('<HomeTemplate />', () => {
    it('should render the component', () => {
        render(<HomeTemplate />);

        expect(screen.getByText(/daily journal/i)).toBeDefined();
    });
});
