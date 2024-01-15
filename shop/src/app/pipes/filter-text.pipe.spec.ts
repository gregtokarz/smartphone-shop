import { FilterTextPipe } from './filter-text.pipe';

describe('FilterTextPipe', () => {
    let pipe: FilterTextPipe;

    beforeEach(() => {
        pipe = new FilterTextPipe();
    });

    it('Powinien zostac stworzony komponent FilterTextPipe', () => {
        expect(pipe).toBeTruthy();
    });

    it('Powinna zostać zwrócona pusta tablica jeśli wartość jest null', () => {
        // Arrange
        const value = null;
        const filterText = 'test';

        // Act
        // @ts-ignore
        const result = pipe.transform(value, filterText);

        // Assert
        expect(result).toEqual([]);
    });

    it('Powinna zostać zwracana oryginalna tablica jeśli zmienna filterText jest null', () => {
        // Arrange
        const value = [{ text: 'Test 1' }, { text: 'Test 2' }];
        const filterText = null;

        // Act
        const result = pipe.transform(value, filterText);

        // Assert
        expect(result).toEqual(value);
    });

    it('powinien przefiltrować tablicę na bazie zmiennej filterText', () => {
        // Arrange
        const value = [
            { text: 'Apple' },
            { text: 'Banana' },
            { text: 'Orange' },
            { text: 'Grape' },
        ];
        const filterText = 'Ban';

        // Act
        const result = pipe.transform(value, filterText);

        // Assert
        expect(result).toEqual([{ text: 'Banana' }]);
    });

    it('Powinien uwzględniać wielkość liter', () => {
        // Arrange
        const value = [
            { text: 'apple' },
            { text: 'Banana' },
            { text: 'orange' },
            { text: 'Grape' },
        ];
        const filterText = 'Or';

        // Act
        const result = pipe.transform(value, filterText);

        // Assert
        expect(result).toEqual([{ text: 'orange' }]);
    });

    it('Powinien zwrócić pustą tablicę jeśli zmienna nie pasuje do wartości tablicy', () => {
        // Arrange
        const value = [
            { text: 'Apple' },
            { text: 'Banana' },
            { text: 'Orange' },
            { text: 'Grape' },
        ];
        const filterText = 'Watermelon';

        // Act
        const result = pipe.transform(value, filterText);

        // Assert
        expect(result).toEqual([]);
    });
});
