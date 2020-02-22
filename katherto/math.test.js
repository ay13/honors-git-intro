import { math } from './math.js';

test('adds 5 + 10, multiplies by 7, subtracts 9', () => {
  expect(math(5, 10, 7, 9)).toBe(96)
})