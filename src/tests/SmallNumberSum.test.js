import SmallNumberSum from "../components/SmallNumberSum";


test("SmallNumberSum 4 6", () => {

  expect(SmallNumberSum(4, 6)).toEqual(10);

});

test("SmallNumberSumError", () => {

  expect(()=>{
    SmallNumberSum(46, 54)
  }).toThrow("Invalid input");

});