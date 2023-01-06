import multiplication from "../components/Multiplication";

test("Multiplication 9 9", () => {
    expect(multiplication(9,9)).toEqual(81);

    }

);

test("Multiplication 3 4", () => {
    expect(multiplication(3,4)).toEqual(12);

    }

);