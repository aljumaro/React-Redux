import other from './other'

test('other also has test', () => expect(other(1, 2, 3)).toBe(2));
test('other also has test', () => expect(other(0, 2, 3)).toBe(3));
