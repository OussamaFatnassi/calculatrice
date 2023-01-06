import subtract from "./Substraction";
import add from "./Sum";
function divide(x, y) {
    let result = 0;
  
    while (x >= y) {
      x = subtract(x, y);
      result = add(result, 1);
    }
  
    return result;
  }

  export default divide;