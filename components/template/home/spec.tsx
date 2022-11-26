import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeTemplate from '.';

describe('<HomeTemplate />', () => {
    describe('should render the component', () => {
        it('with default date', () => {
            render(<HomeTemplate />);

            expect(screen.getByText(/daily journal/i)).toBeDefined();
        });
    });
});
