function a(params) {
  return function (params2) {
    return params + params2;
  };
}
let b = a;

b = b(1);

b = b(2);

console.log(b); // 3
