import Add from "../components/Sum";

test("Sum 4 and 6", () => {
    expect(Add(4, 6)).toEqual(10);

    }

);

test("Sum 46 and 54", () => {

    expect(Add(46, 54)).toEqual(100);

    }

);