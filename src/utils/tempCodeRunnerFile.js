function sum(num) {
  if (num <= 1) {
    return 1;
  } else {
    console.log(arguments.callee);
    return num + sum(num - 1);
  }
}
sum(5);