// Generic functions
function identity<T>(arg: T): T {
    return arg;
}

// Constraints in generic functions
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

const myArray = [1, 2, 3];
const myArrayLength = loggingIdentity(myArray); // Logs: 3
console.log(myArrayLength); // Output: [1, 2, 3]

const myString = "Hello, World!";
const myidenty = identity<string>(myString); // Output: "Hello, World!"
