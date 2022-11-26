import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('<Header />', () => {
    it('should render the component', () => {
        render(<Header title="Daily Journal" />);

        expect(screen.getByText(/daily journal/i)).toBeDefined();
    });
});
