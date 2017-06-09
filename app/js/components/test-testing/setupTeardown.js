let cityDB = [];

const initilizeCityDB = () => cityDB = ['London', 'Viena', 'Madrid']
const clearCityDB = () => cityDB = []

const isCity = (test) => cityDB.indexOf(test) > -1

export {initilizeCityDB, clearCityDB, isCity}