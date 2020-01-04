const sub = require('./sub');

test('subs 3 + 1 to equal 2', () => {
  expect(sub(3, 1)).toBe(2);
});