import subtraction from "./Substraction";
function modulo(dividend, divisor) {
  if (divisor === 0) return NaN;

  let remainder = dividend;

  while (remainder >= divisor) {
    remainder = subtraction(remainder, divisor);
  }

  return remainder;
}

export default modulo;