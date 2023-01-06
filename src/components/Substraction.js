import add from "./Sum";
function subtract(x, y) {
    let res = 0;
    let sign = 1;
  
    if (x < y) {
      const temp = x;
      x = y;
      y = temp;
      sign = -1;
    }
  
    for (let i = 0; i < x - y; i++) {
      res = add(res, sign);
    }
  
    return res;
  }

  export default subtract;