import {initilizeCityDB, clearCityDB, isCity} from './setupTeardown'

beforeAll(() => console.log('beforeAll'));

beforeEach(() => {
	console.log('beforeEach');
	initilizeCityDB();
});

afterEach(() => {
	console.log('afterEach');
	clearCityDB();
});

afterAll(() => console.log('afterAll'));

test('is city Vienna', () => expect(isCity('Vienna')).toBeFalsy());
test('is city London', () => expect(isCity('London')).toBeTruthy());