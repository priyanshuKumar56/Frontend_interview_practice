// console.log(0.1 + 0.2 == 0.3);
// const ID = Symbol("id");
// const user = {
//   name: "John",
//   [ID]: 12345, // This won't conflict with any other 'id' property
// };

// // Symbols for internal object metadata
// const LENGTH = Symbol("length");
// class CustomArray {
//   constructor() {
//     this[LENGTH] = 0; // Hidden from normal enumeration
//   }
// }

// console.log(ID); // 12345

// const arr = new CustomArray();

// function premativeornot(input) {
//   if (typeof input === "string") {
//     console.log("This is a string", input);
//   } else if (typeof input === "number") {
//     console.log("This is a number", input);
//   } else if (typeof input === "boolean") {
//     console.log("This is a boolean", input);
//   } else if (typeof input === "undefined") {
//     console.log("This is undefined", input);
//   } else if (input === null) {
//     console.log("This is null", input);
//   } else if (typeof input === "object" || typeof input === "function") {
//     console.log("This is an object or function", input);
//   } else {
//     console.log("This is an object or function");
//   }
// }
// let get;
// premativeornot("Hello");
// premativeornot(42);
// premativeornot(true);
// premativeornot(get);

// premativeornot(null);
// premativeornot({ name: "John" });

// function differnullunidefind(input) {
//   if (input === null) {
//     console.log("This is null");
//   } else if (input === undefined) {
//     console.log("This is undefined");
//   } else {
//     console.log("This is neither null nor undefined");
//   }
// }

// function comparetwoimputcoerison(input1, input2) {
//   if (input1 == input2) {
//     console.log("The inputs are equal with type coercion", input1 == input2);
//   }
//   if (input1 === input2) {
//     console.log(
//       "The inputs are equal without type coercion",
//       input1 === input2
//     );
//   } else {
//     console.log("The inputs are not equal", input1, input2);
//   }
// }
// comparetwoimputcoerison(42, "42");
// comparetwoimputcoerison(0, false);
// comparetwoimputcoerison(null, undefined);

// function checktruthyandfalsy(input) {
//   if (input) {
//     console.log("This is a truthy value:", input);
//   } else {
//     console.log("This is a falsy value:", input);
//   }
// }

// function calculatorofcoresion(input1, input2, op) {
//   switch (op) {
//     case "+":
//       console.log("Addition:", input1 + input2);
//       break;
//     case "-":
//       console.log("Subtraction:", input1 - input2);
//       break;
//     case "*":
//       console.log("Multiplication:", input1 * input2);
//       break;
//     case "/":
//       if (input2 !== 0) {
//         console.log("Division:", input1 / input2);
//       } else {
//         console.log("Cannot divide by zero");
//       }
//       break;
//     case "%":
//       if (input2 !== 0) {
//         console.log("Modulus:", input1 % input2);
//       } else {
//         console.log("Cannot perform modulus by zero");
//       }
//       break;
//     case "**":
//       console.log("Exponentiation:", input1 ** input2);
//       break;
//     case "//":
//       if (input2 !== 0) {
//         console.log("Floor Division:", Math.floor(input1 / input2));
//       } else {
//         console.log("Cannot perform floor division by zero");
//       }
//       break;

//     default:
//       break;
//   }
// }

// calculatorofcoresion("10", 5, "+");
// calculatorofcoresion("10", 5, "-");
// calculatorofcoresion("10", 5, "*");
// calculatorofcoresion("10", 5, "/");
// calculatorofcoresion("10", 5, "%");
// calculatorofcoresion("10", 5, "**");

// function combinetwoarr(arr1, arr2) {
//   const combinedarrr = [...arr1, ...arr2];
//   console.log("Combined Array:", combinedarrr);
//   return combinedarrr;
// }
// combinetwoarr([1, 2, 3], [4, 5, 6]);

// function sumallper(...numbers) {
//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   console.log("Sum of all numbers:", sum);
//   return sum;
// }

// function extract({ a, ...arr }) {
//   console.log("Extracted value of a:", a);
//   console.log("Remaining properties:", arr);
//   return { a, ...arr };
// }
// extract({ a: 1, b: 2, c: 3, d: 4 });
// function extractarr([a, ...arr]) {
//   console.log("Extracted value of a:", a);
//   console.log("Remaining elements:", arr);
//   return { a, ...arr };
// }
// extractarr([1, 2, 3, 4, 5]);

// function sallowclone(arr) {
//   const shallowClone = [...arr];
//   console.log("Shallow Clone of Array:", shallowClone);
//   return shallowClone;
// }
function flatten(arr) {
  const flattened = arr.flat(Infinity);
  console.log("Flattened Array:", flattened);
  return flattened;
}
flatten([1, [2, [3, [4, [5]]]]]);
function filternumbur(arr) {
  const flilternum = arr.filter((num) => typeof num === "number");
  console.log("Filtered Numbers:", flilternum);
}
filternumbur([1, "a", 2, "b", 3, "c", 4, "d", 5]);
function Person(name) {
  this.name = name;
}

Person.prototype.school = "ABC School";

const student = new Person("Rahul");
const teacher = new Person("Mr. Sharma");

console.log(student.__proto__); // Rahul
console.log(student.school); // ABC School (inherited)
console.log(student.hasOwnProperty("school")); // false

function printeven(nums) {
  for (let i = 0; i < nums + 1; i++) {
    if (i % 2 === 0 && i != 0) {
      console.log(i);
    }
  }
}

printeven(6);
function sumdigit(num) {
  let i = 0;
  let sum = 0;
  while (i <= num) {
    sum = sum + i;
    i++;
  }
  console.log(sum);
}
sumdigit(5);
function reversestring(string) {
  let reverses = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverses += string[i];
  }
  console.log(reverses);
}
reversestring("hello");
function duplicatenum(arr) {
  let temp = [];
  for (let first of arr) {
    if (!temp.includes(first)) {
      temp.push(first);
    }
  }
  return temp;
}

console.log(duplicatenum([1, 2, 2, 2, 3, 4, 4, 5]));

function sumvalues(obj) {
  let sum = 0;
  for (const element in obj) {
    if (typeof obj[element] === "number") {
      sum += obj[element];
    } else {
      throw new Error("the value contain another type of data");
    }
  }
  return sum;
}
const ob = {
  cost: 30,
  hi: 38,
  i: 20,
};
console.log(sumvalues(ob));

const object = {
  h: 10,
  r: { ti: 30, jii: 38, kid: { lair: 39 } },
  aj: 57,
  ji: 29,
};
function nestedobjsum(object) {
  let totalsum = 0;
  for (const key in object) {
    if (typeof object[key] === "object" && object[key] !== null) {
      totalsum += nestedobjsum(object[key]);
    } else {
      totalsum += object[key];
    }
  }
  return totalsum;
}
console.log(nestedobjsum(object));
function checknegative(arr) {
  for (const element of arr) {
    if (element < 0) {
      throw new Error("arr have negative number");
    }
  }
}
checknegative([2, 4, 6, 5, -6, -2]);

class managetodo {
  constructor(task) {
    this.setingkey = "tasks";
    this.tasks = this.gettasks();
  }
  addtask(task) {
    this.tasks.push(task);
    this.savetask();
  }
  gettasks() {
    let value = localStorage.getItem(this.setingkey);
    return value ? JSON.parse(value) : [];
  }
  savetask() {
    localStorage.setItem(this.setingkey, JSON.stringify(this.tasks));
  }

  clearall() {
    localStorage.removeItem(this.setingkey);
  }
}

const obj = new managetodo();

obj.clearall();

function validator(userdetail) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    userdetail.email.trim().length === 0 ||
    !emailRegex.test(userdetail.email)
  ) {
    console.log("❌ Email is invalid or not provided.");
  } else if (userdetail.name.trim().length === 0) {
    console.log("❌ Username is required.");
  } else if (userdetail.password.trim().length < 6) {
    console.log("❌ Password must be at least 6 characters.");
  } else {
    console.log("✅ All fields are valid.");
  }
}

validator({
  email: "pritams38gmail.com",
  name: "fddddddddddd",
  password: "1234",
});

// function countnuber() {
//   let count = 1;
//   return function () {
//     return count++;
//   };
// }

// const closure = countnuber();
// console.log(closure());
// console.log(closure());

function createUser(user) {
  let userdetail = user;

  function getName() {
    return userdetail;
  }
  function setName(username) {
    userdetail = username;
  }
  return {
    getName,
    setName,
  };
}

const user = createUser("Priyanshu");
console.log(user.getName()); // Priyanshu
user.setName("Tanmay");
console.log(user.getName()); // Tanmay

function createBankAcc(intial) {
  let backbalnce = intial;

  return {
    Deposit: function (amount) {
      if (amount > 0) {
        backbalnce += amount;
      } else {
        throw new console.error("give a right amount");
      }
    },
    withdraw: function (amount) {
      if (amount > 0 && amount <= backbalnce) {
        backbalnce -= amount;
        return backbalnce;
      } else {
        throw new Error("back balance has not capable");
      }
    },
    getBalance: function () {
      return backbalnce;
    },
  };
}
const account = createBankAcc(1000);
console.log(account.getBalance()); // 1000
account.Deposit(500);
console.log(account.getBalance()); // 1500

account.withdraw(300);
account.withdraw(100);
console.log(account.getBalance()); // 1500

function createValidator(type) {
  const validators = {
    email: function (input) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    },
    phone: function (input) {
      return /^\d{10}$/.test(input.replace(/\D/g, ""));
    },
    password: function (input) {
      return input.length >= 8 && /[A-Z]/.test(input) && /[0-9]/.test(input);
    },
  };

  return function (input) {
    return validators[type] ? validators[type](input) : false;
  };
}

const emailValidator = createValidator("email");
const phoneValidator = createValidator("phone");
console.log(emailValidator);
console.log(emailValidator("test@example.com")); // true
console.log(phoneValidator("1234567890")); // true

// cuury fuction to normal function

function currytonormalfuc(f) {
  return function uncurry(...args) {
    let result = f;
    for (let i = 0; i < args.length; i++) {
      if (typeof result === "function") {
        result = result(args[i]);
        console.log(result);
      } else {
        throw new Error(
          "Too many arguments or function is not curried properly"
        );
      }
    }
    return result;
  };
}

function a(x) {
  return function (g) {
    return function (f) {
      return function (y) {
        return x + g + f + y;
      };
    };
  };
}
const curriedA = currytonormalfuc(a);
console.log(curriedA(1, 2, 3, 4));

// infinite currying function
function add(x) {
  return function (y) {
    if (y === undefined) {
      return x;
    } else {
      return add(x + y);
    }
  };
}

console.log(add(3)(4)(5)(6)()); // 18
function userlogin(user, pass) {
  return new Promise((res, rej) => {
    if (user === "john" && pass === "hi") {
      setTimeout(() => {
        console.log("user is logged in");
        res({ id: 1, user });
      }, 1000);
    } else {
      rej("user profile not found");
    }
  });
}
function getuserprofile(userid) {
  const usersprofile = [
    { id: 1, username: "john" },
    { id: 2, username: "mohan" },
    { id: 3, username: "rahul" },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userprofile = usersprofile.find((proid) => proid.id == userid);
      console.log("userprofile find");
      resolve(userprofile);
    }, 1000);
  });
}
function getuserpost(profileid) {
  const userpost = [
    { userproid: 1, postid: 1001, post: "how to become a dev" },
    { userproid: 1, postid: 1002, post: "recent senario of job market" },
    { userproid: 2, postid: 1003, post: "how to become a ai dev" },
  ];
  return new Promise((res, rej) => {
    setTimeout(() => {
      const allpostdetail = userpost.filter(
        (post) => post.userproid === profileid
      );
      console.log("post is fatched");
      res(allpostdetail);
    }, 1000);
  });
}

// userlogin("john", "hi")

//   .then((user) => getuserprofile(user.id))
//   .then((profile) => getuserpost(profile.id))
//   .then((post) => {
//     console.log(post);
//   });
const detail = async () => {
  const user = await userlogin("john", "hi");
  const profile = await getuserprofile(user.id);
  const post = await getuserpost(profile.id);
  console.log(post);
};
detail();

const toggleInput = document.querySelector(".toggleinput");
const hi = document.querySelector(".hi");
const element = document.getElementById("middle");

const ul = document.createElement("ul");
const items = ["Item 1", "Item 2", "Item 3"];

items.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `<p>${item}</p>`;
  ul.appendChild(li);
});
document.body.appendChild(ul);
element.replaceChildren();

const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.textContent = `Item ${i}`;
  fragment.appendChild(div);
}
document.body.appendChild(fragment); // Single reflow
