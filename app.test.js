const app = require('./coding_challenge');

test('search two numbers in an array [1, 9, 5, 0, 20, -4, 12, 16, 7] that when added together will give 12', () => {
  expect(app([1, 9, 5, 0, 20, -4, 12, 16, 7], 12)).toEqual([
    [0, 12],
    [-4, 16],
    [5, 7],
  ]);
});

test('search two numbers in an array [1, 9, 5, 0, 20, -4, 12, 16, 7] that when added together will give 6', () => {
  expect(app([2, 0, 4, -1, 6, 7], 6)).toEqual([
    [2, 4],
    [0, 6],
    [-1, 7],
  ]);
});
