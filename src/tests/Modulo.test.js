import modulo from "../components/Modulo";

test('modulo 7 and 3', () => {
  expect(modulo(7, 3)).toBe(1);
});

test('modulo 10 and 3 ', () => {
  expect(modulo(10, 3)).toBe(1);
});