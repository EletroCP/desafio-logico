import {
    calculationTable,
    primeNumbers
} from '../script';

describe('Função de calculo de tabuada do 1 ao 10', () => {
    it('O valor de entrada deve ser um número', () => {
        expect(() => calculationTable(NaN)).toThrow(Error);
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

describe('Função que retorna todos os números primos de 1 até N', () => {
    it('Retorna um erro caso a entrada não sejá um número', () => {
        expect(() => primeNumbers(NaN)).toThrow(Error);
        expect(() => primeNumbers(NaN)).toThrow('O valor de entrada deve ser um número');
    });

    it.each([
        [11, [2, 3, 5, 7, 11]],
        [30, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]],
        [100, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]]
    ])('Deve retornar um array com a lista de números primos de 1 até %i', (input, expected) => {
        expect(primeNumbers(input)).toEqual(expected);
    });
});