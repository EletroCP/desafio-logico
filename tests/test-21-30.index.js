import {
    ranNumbers
} from '../script';

describe('Retorna um array de numeros aleatorios', () => {
    it('Deve lançar um erro se a entrada não for um número positivo', () => {
        expect(() => ranNumbers(-5)).toThrow('O valor de entrada deve ser um número positivo');
        expect(() => ranNumbers(0)).toThrow('O valor de entrada deve ser um número positivo');
        expect(() => ranNumbers(NaN)).toThrow('O valor de entrada deve ser um número positivo');
    });

    it('Deve retornar um array', () => {
        expect(Array.isArray(ranNumbers(5))).toBe(true);
    });

    it('Deve retornar um array grande corretamente', () => {
        expect(ranNumbers(1000)).toHaveLength(1000);
    });

    it('Deve retornar um array de números aleatórios com o tamanho correto', () => {
        expect(ranNumbers(5)).toHaveLength(5);
    });
});