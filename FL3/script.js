function promiseFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Efter tre sekunder kan denna text levereras');
    }, 3000);
  });
}
