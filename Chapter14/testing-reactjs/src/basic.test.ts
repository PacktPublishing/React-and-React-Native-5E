import { expect, test } from 'vitest';
import { squared } from './basic';

test('Squared', () => {
  expect(squared(2)).toBe(4);
  expect(squared(3)).toBe(9);
  expect(squared(4)).toBe(16);
});
