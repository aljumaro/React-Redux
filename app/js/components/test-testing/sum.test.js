import sum from './sum';

test('add 1 + 2 to be equals to 3', () => expect(sum(1, 2)).toBe(3) );

test('add 1 + 2 not equals to 4', () => expect(sum(1, 2)).not.toBe(4) );

test('object equality matcher', () => {
	let src = {
		a: 2,
		b: 'text'
	};

	expect(src).toEqual({a: 2, b: 'text'});
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex', 
  'trash bags', 
  'paper towels', 
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

const compileAndroidCode =  function() {
  throw new ConfigError('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
});