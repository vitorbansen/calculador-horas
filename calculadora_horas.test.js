const calculateHoursWorked = require('./calculadora_horas');

describe('Horas Trabalhadas', () => {
    test('calcula horas corretamente quando o horário de término é antes do de início', () => {
        expect(calculateHoursWorked('18:30', '07:30')).toBe(13.0);
    });

    test('calcula horas corretamente com tempo de intervalo quando o horário de término é antes do de início', () => {
        expect(calculateHoursWorked('18:30', '07:30', '00:30')).toBe(12.5);
    });

    test('calcula horas corretamente no mesmo dia', () => {
        expect(calculateHoursWorked('10:00', '16:00')).toBe(6.0);
    });

    test('calcula horas corretamente no mesmo dia com tempo de intervalo', () => {
        expect(calculateHoursWorked('10:00', '16:00', '01:00')).toBe(5.0);
    });

    test('calcula horas corretamente com o formato H:mm', () => {
        expect(calculateHoursWorked('8:15', '15:45')).toBe(7.5);
        expect(calculateHoursWorked('8:15', '15:45', '00:45')).toBe(6.5);
    });

    test('calcula horas corretamente com o formato HHmm', () => {
        expect(calculateHoursWorked('0815', '1545')).toBe(7.5);
        expect(calculateHoursWorked('0815', '1545', '0030')).toBe(6.0);
    });

    test('lança erro para formato de horário inválido', () => {
        expect(() => calculateHoursWorked('8.30', '15.30')).toThrow('Formato inválido. Use HH:mm, H:mm ou HHmm');
    });
});
