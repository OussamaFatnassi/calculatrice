function add(x, y) {
  let result = x;

  if (y > 0) {
    for (let i = 0; i < y; i++) {
      result++;
    }
  }
  else if (y < 0) {
    for (let i = 0; i < -y; i++) {
      result--;
    }
  }

  return result;
}
export default add;