const fib = num => {
  if (num < 0) {
    throw new Error();
  }

  if (typeof num === "string") {
    throw new Error();
  }

  if (num == 0) {
    return 0;
  }

  if (num == 1) {
    return 1;
  }

  if (num >= 2) {
    return fib(num - 1) + fib(num - 2);
  }
};

export default fib;
