function checkPositive(number) {
  if (number > 0) {
    return 0;
  }
  console.warn('hello');
  return false;
}
checkPositive('10');
