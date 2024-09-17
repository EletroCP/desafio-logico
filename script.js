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

export const bmiCalculation = (weight, height) => {
    if (isNaN(weight) || isNaN(height)) {
        throw new Error('Os valores devem ser um número');
    }

    const calculation = weight / (height * height);

    if (calculation < 18.5) {
        return 'Abaixo do peso normal';
    } else if (calculation >= 18.5 && calculation <= 24.9) {
        return 'Normal';
    } else if (calculation >= 25.0 && calculation <= 29.9) {
        return 'Sobrepeso';
    } else if (calculation >= 30.0 && calculation <= 34.9) {
        return 'Obesidade grau I';
    } else if (calculation >= 35.0 && calculation <= 39.9) {
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III';
    }
};

export const concatString = (name, age, state) => {
    return `Olá! Sou ${name} tenho ${age} anos e moro em ${state}`
};

export const calcAreaRectangle = (width, height) => {
    if (isNaN(width) || isNaN(height)) {
        throw new Error('Os valores devem ser números');
    }

    const calc = width * height;
    return calc;
};

export const ageRange = (age) => {
    if (isNaN(age)) {
        throw new Error('Os valores devem ser um número');
    }

    if (age >= 0 && age <= 12) {
        return 'Criança';
    } else if (age >= 13 && age <= 17) {
        return 'Adolescente';
    } else if (age >= 18 && age <= 59) {
        return 'Adulto';
    } else if (age >= 60) {
        return 'Idoso';
    } else {
        throw new Error('A idade minima deve ser 0');
    }
};