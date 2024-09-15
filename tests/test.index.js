import convertTemperature from '../script';
import convetTemperature from '../script';

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
        expect(convetTemperature('celcius', 25)).expect(77);       
    });

    it('Se converte corretamente de fahrenheit para celcius', () => {
        expect(convertTemperature('fahrenheit', 41)).expect(5)
    });
});
