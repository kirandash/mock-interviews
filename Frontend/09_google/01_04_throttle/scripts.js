const throttle = (fn, delay) => {
  let timer;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
};

const add = (a, b) => console.log(a + b);

const throttledTimer = throttle(add, 3000);
throttledTimer(1, 2); // This will work
throttledTimer(1, 2); // Will be blocked
setTimeout(() => {
  throttledTimer(3, 4); // Will be blocked
}, 2000);
setTimeout(() => {
  throttledTimer(3, 5); // Will work
}, 4000);
