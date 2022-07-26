try {
  const a = {};
  a.some = 5;
  console.log(a);
  // will throw error
  a = { b: 2 };
  console.log(a);
} catch (e) {
  // caught error will come here but won't stop code execution afterwards
  console.log(e);
}

let x = {};
x.some = 5;
console.log(x);

x = { b: 2 };
console.log(x);
