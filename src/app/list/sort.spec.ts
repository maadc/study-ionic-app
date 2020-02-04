import { Sort } from './sort';

describe('sorting', () => {
    it('should sort the array A->B->C', () => {
        const input = [
            { Name: 'alpha' },
            { Name: 'gamma' },
            { Name: 'beta' }
        ];
        const outcome = [
            { Name: 'alpha' },
            { Name: 'beta' },
            { Name: 'gamma' }
        ];
        expect(Sort.sortABC(input)).toEqual(outcome);
    });

    it('should sort the array C->B->A', () => {
        const input = [
            { Name: 'alpha' },
            { Name: 'gamma' },
            { Name: 'beta' }
        ];
        const outcome = [
            { Name: 'gamma' },
            { Name: 'beta' },
            { Name: 'alpha' }
        ];
        expect(Sort.sortCBA(input)).toEqual(outcome);
    });

    it('should sort the attribute', () => {
        const input = [
            {
                Name: 'aaa',
                Halle: 'A'
            },
            {
                Name: 'abb',
                Halle: 'B'
            },
            {
                Name: 'acc',
                Halle: 'C'
            },
            {
                Name: 'abc',
                Halle: 'D'
            },
        ];
        const outcome = [
            {
                Name: 'aaa',
                Halle: 'A'
            },
            {
                Name: 'abb',
                Halle: 'B'
            },
            {
                Name: 'acc',
                Halle: 'C'
            },
            {
                Name: 'abc',
                Halle: 'D'
            },

        ];
        expect(Sort.sortHALLE(input)).toEqual(outcome);
    });

    it('should sort the attribute, otherway around', () => {
        const input = [
            {
                Name: 'aaa',
                Halle: 'A'
            },
            {
                Name: 'abb',
                Halle: 'B'
            },
            {
                Name: 'acc',
                Halle: 'C'
            },
            {
                Name: 'abc',
                Halle: 'D'
            },
        ];
        const outcome = [
            {
                Name: 'abc',
                Halle: 'D'
            },
            {
                Name: 'acc',
                Halle: 'C'
            },
            {
                Name: 'abb',
                Halle: 'B'
            },
            {
                Name: 'aaa',
                Halle: 'A'
            },

        ];
        expect(Sort.sortELLAH(input)).toEqual(outcome);
    });
});
