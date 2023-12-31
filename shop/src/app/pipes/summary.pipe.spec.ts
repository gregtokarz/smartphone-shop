import { SummaryPipe } from './summary.pipe';

describe('SummaryPipe', () => {
    let pipe: SummaryPipe;

    beforeEach(() => {
        pipe = new SummaryPipe();
    });

    it('Powinien stworzyć Summary Pipe', () => {
        expect(pipe).toBeTruthy();
    });

    it('powinien zwrócić null jesli wartoś jest niezdefiniowana', () => {
        const result = pipe.transform(undefined, 10);
        expect(result).toBeNull();
    });


    it('Powinien zwrócić null jeśli wartosć jest pustym stringiem', () => {
        const result = pipe.transform('', 10);
        expect(result).toBeNull();
    });

});
