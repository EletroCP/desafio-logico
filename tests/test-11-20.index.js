import {
    calculationTable
} from '../script';

describe('Função de calculo de tabuada do 1 ao 10', () => {
    it('O valor de entrada deve ser um número', () => {
        expect(calculationTable(NaN)).toThrow(Error);
        expect(() => calculationTable(NaN)).toThrow('O valor de entrada deve ser um número');
    });

    it.each([
        [1, [1,2,3,4,5,6,7,8,9,10]],
        [2, [2,4,6,8,10,12,14,16,18,20]],
        [3, [3,6,9,12,15,18,21,24,27,30]]
    ])('Espera o retorno de um array, com os valores da peração', (input, expected) => {
        expect(calculationTable(input)).toEqual(expected);
    });
});