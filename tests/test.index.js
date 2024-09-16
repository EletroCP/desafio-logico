import { 
    convertTemperature,
    bmiCalculation, 
    concatString,
    calcAreaRectangle,
    evenOrOdd
}from '../script';


describe('Função de converção de Celsius e Fahrenheit', () => {
    it('Se falha ao informar um tipo incorreto de medida', () => {
        expect(convertTemperature('banana', 14)).toBeInstanceOf(Error);
        expect(convertTemperature('banana', 14).message).toBe('Tipo de temperatura inválido.');
    });

    it('Se falha caso o valor da temperatura não seja um numero', () => {
        expect(convertTemperature('celcius', '14')).toBeInstanceOf(Error);
        expect(convertTemperature('celcius', '14').message).toBe('Insira um número válido.');
    });

    it('Se converte corretamente de celsius para fahrenheit', () => {
        expect(convertTemperature('celcius', 25)).expect(77);       
    });

    it('Se converte corretamente de fahrenheit para celcius', () => {
        expect(convertTemperature('fahrenheit', 41)).expect(5)
    });
});

describe('Função de calculo de IMC', () => {
    it.each([
      ['80', 1.63, 'Os valores devem ser um número'],
      [80, '1.63', 'Os valores devem ser um número'],
      ['80', '1.63', 'Os valores devem ser um número'],
    ])('Falha ao informar um tipo incorreto de valor', (peso, altura, errMsg) => {
      expect(() => bmiCalculation(peso, altura)).toThrow(Error);
      expect(() => bmiCalculation(peso, altura)).toThrow(errMsg);
    });

    it.each([
        [50, 1.80, 'Abaixo do peso normal'],
        [70, 1.80, 'Normal'],
        [85, 1.80, 'Sobrepeso'],
        [95, 1.80, 'Obesidade grau I'],
        [110, 1.80, 'Obesidade grau II'],
        [125, 1.80, 'Obesidade grau III'],
        [140, 1.80, 'Obesidade grau III'],
      ])('Deve retornar o tipo de obesidade com base no peso e altura', (peso, altura, result) => {
        expect(bmiCalculation(peso, altura)).toBe(result);
      });

    });
    
describe('Função de concatenação de strings', () => {
    it.each([
        ['Carlos', 25, 'Brasilia', 'Olá! Sou Carlos tenho 25 anos e moro em Brasilia'],
        ['Mateus', 36, 'Maceió', 'Olá! Sou Mateus tenho 36 anos e moro em Maceió'],
        ['Breno', 26, 'Curitiba', 'Olá! Sou Breno tenho 26 anos e moro em Curitiba']
    ])('Deve retornar de forma correta a string concatenada', (nome, idade, cidade, result) => {
        expect(concatString(nome, idade, cidade)).toEqual(result);
    });
});

describe('Função de calculo de área de um retangulo', () => {
    it.each([
        ['15', 16, 'Os valores devem ser números'],
        [15, '16', 'Os valores devem ser números'],
        ['15', '16', 'Os valores devem ser números'],
    ])('Deve retornar uma menssagem de erro', (width, heigth, errMsg) => {
        expect(calcAreaRectangle(width, heigth)).toThrow(Error);
        expect(calcAreaRectangle(width, heigth)).toThrow(errMsg);
    });

    it.each([
        [15, 16, 240],
        [10, 10, 100],
        [7, 20, 140],
    ])('Deve retornar a multiplicação dos valores', (width, heigth, result) => {
        expect(calcAreaRectangle(width, heigth)).toBe(result);
    });
});

describe('Deve dizer se um número é divisivel por 2', () => {
    it('Falha ao informar um tipo incorreto de valor', () => {
        expect(() => evenOrOdd(NaN)).toThrow(Error);
        expect(() => evenOrOdd('#')).toThrow('O valor informado deve ser um número');
    });

    it.each([
        [2, 'Par'],
        [20, 'Par'],
        [54, 'Par'],
        [7, 'Impar'],
        [19, 'Impar'],
        [21, 'Impar'],
    ])('Retorna de o numero é divisivel por 2', (number, result) => {
        expect(() => evenOrOdd(number)).toBe(result);
    });
});