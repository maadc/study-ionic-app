import { Sort } from '../app/list/sort';
import { ListPage } from '../app/list/list.page';

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

describe('Ausstellerverzeichnis', () => {

  describe('array manipulation', () => {
    it('Alphabetic: multidimensional array', () => {
      const input = [
        { Name: 'alpa', },
        { Name: 'alpha' },
        { Name: 'beta' },
        { Name: 'betha' }
      ];
      const outcome = [
        ['A',
          [
            { Name: 'alpa' }, { Name: 'alpha' }
          ]
        ],
        ['B',
          [
            { Name: 'beta' }, { Name: 'betha' }
          ]
        ],
      ];

      expect(ListPage.addingAlphabeticLetters(input)).toEqual(outcome);
    });

    it('Alphabetic: multidimensional array with more attributes', () => {
      const input = [
        { Name: 'alpa', Produkte: 'a', Kategorie: 'b', Halle: 'Halle C' },
        { Name: 'beta', Produkte: 'd', Kategorie: 'e', Halle: 'Halle F' },
      ];
      const outcome = [
        ['A',
          [
            { Name: 'alpa', Produkte: 'a', Kategorie: 'b', Halle: 'Halle C' }
          ]
        ],
        ['B',
          [
            { Name: 'beta', Produkte: 'd', Kategorie: 'e', Halle: 'Halle F' }
          ]
        ],
      ];
      expect(ListPage.addingAlphabeticLetters(input)).toEqual(outcome);
    });
  });

  it('Halle: should create multidimensional array', () => {
    const input = [
      { Name: 'alpa', Produkte: 'a', Kategorie: 'b', Halle: 'Halle C' },
      { Name: 'alpha', Produkte: 'b', Kategorie: 'b', Halle: 'Halle C' },
      { Name: 'beta', Produkte: 'd', Kategorie: 'e', Halle: 'Halle F' },
    ];
    const outcome = [
      ['HALLE C',
        [
          { Name: 'alpa', Produkte: 'a', Kategorie: 'b', Halle: 'Halle C' },
          { Name: 'alpha', Produkte: 'b', Kategorie: 'b', Halle: 'Halle C' }
        ]
      ],
      ['HALLE F',
        [
          { Name: 'beta', Produkte: 'd', Kategorie: 'e', Halle: 'Halle F' }
        ]
      ],
    ];
    expect(ListPage.addingHalleLetters(input)).toEqual(outcome);
  });
});

describe('item json-array', () => {

  it('should sort (ABC) and add letter', () => {
    const input = [
      { Name: 'alpha' },
      { Name: 'gamma' },
      { Name: 'beta' }
    ];
    const outcome = [
      ['A', [{ Name: 'alpha' }]],
      ['B', [{ Name: 'beta' }]],
      ['G', [{ Name: 'gamma' }]]
    ];
    expect(ListPage.addingAlphabeticLetters(Sort.sortABC(input))).toEqual(outcome);
  });

  it('should sort (ABC) and add letter, even numbers', () => {
    const input = [
      { Name: '1A' },
      { Name: 'Ga54' },
      { Name: 'beta' }
    ];
    const outcome = [
      ['1', [{ Name: '1A' }]],
      ['B', [{ Name: 'beta' }]],
      ['G', [{ Name: 'Ga54' }]]
    ];
    expect(ListPage.addingAlphabeticLetters(Sort.sortABC(input))).toEqual(outcome);
  });
});
