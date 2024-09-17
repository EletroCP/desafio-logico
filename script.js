export const convertTemperature = (type, temperature) => {
    const value = parseFloat(temperature);
    const typeLowerCase = type.toLowerCase();

    if (isNaN(value)) {
        throw new Error('Insira um número válido.');
    }

    if (typeLowerCase !== 'celcius' && typeLowerCase !== 'fahrenheit') {
        throw new Error('Tipo de temperatura inválido.');
    }

    if (typeLowerCase === 'celcius') {
        const toFahrenheit = (value * 1.8) + 32;
        return toFahrenheit;
    }

    const toCelcius = (value - 32) / 1.8;
    return toCelcius;
};