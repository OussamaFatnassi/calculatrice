import add from "./Sum";

function multiplication(a, b) {
    let res = 0;
    for (let i = 0; i < b; i++) {
      res = add(res, a);
    }
    return res;
  }
  
export default multiplication;