import add from "./Sum";
function SmallNumberSum(a, b) {     
    if(typeof a !== "number" || typeof b !== "number") {
        a = parseInt(a);
        b = parseInt(b);
    }
    if(a > 9 || b > 9 || a < 0 || b < 0) {
        throw new Error("Invalid input");
    }
    //check if a and b are numbers

    return add(a,b);
}


export default SmallNumberSum;
