const fib = n => {
  if (n < 0) {
    throw new Error();
  }

  if (typeof n === "string") {
    throw new Error();
  }

  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  if (n >= 2) {
    return fib(n - 1) + fib(n - 2);
  }
};

export default fib;
