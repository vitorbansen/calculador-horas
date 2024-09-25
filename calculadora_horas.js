
const moment = require('moment');

function isValidTimeFormat(timeStr) {
    return moment(timeStr, ['HH:mm', 'H:mm', 'HHmm'], true).isValid();
}

function convertToMoment(timeStr) {
    if (!isValidTimeFormat(timeStr)) {
        throw new Error('Formato inválido. Use HH:mm, H:mm ou HHmm');
    }
    return moment(timeStr, ['HH:mm', 'H:mm', 'HHmm']);
}

function calculateWorkedHours(startTime, endTime, breakTime = '00:00') {
    const start = convertToMoment(startTime);
    const end = convertToMoment(endTime);
    const breakDuration = convertToMoment(breakTime);

    // Se o horário de término é antes do horário de início, assume que terminou no dia seguinte
    if (end.isBefore(start)) {
        end.add(1, 'day');
    }

    const totalHours = end.diff(start, 'hours', true);
    const breakHours = breakDuration.hours() + breakDuration.minutes() / 60;

    return totalHours - breakHours;
}

module.exports = calculateWorkedHours;
