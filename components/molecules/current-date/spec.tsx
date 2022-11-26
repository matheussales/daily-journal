import React from 'react';
import { render, screen } from '@testing-library/react';
import CurrentDate from '.';

describe('<CurrentDate />', () => {
    beforeAll(() => {
        jest.useFakeTimers().setSystemTime(new Date('11/26/2022'));
    });

    describe('should render the component', () => {
        it('with default date', () => {
            render(<CurrentDate />);

            expect(screen.getByText('26')).toBeDefined();
            expect(screen.getByText('Nov')).toBeDefined();
            expect(screen.getByText('2022')).toBeDefined();
        });

        it('with new Date', () => {
            render(<CurrentDate date={new Date('10/10/2023')} />);

            expect(screen.getByText('10')).toBeDefined();
            expect(screen.getByText('Oct')).toBeDefined();
            expect(screen.getByText('2023')).toBeDefined();
        });
    });
});
