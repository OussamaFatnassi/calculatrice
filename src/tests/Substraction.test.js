import subtraction from "../components/Substraction";


test('subtraction of 3', () => {
    expect(subtraction(3, 2)).toBe(1);
  });
  
  test('subtraction of 5', () => {
    expect(subtraction(5, 3)).toBe(2);
  });
  