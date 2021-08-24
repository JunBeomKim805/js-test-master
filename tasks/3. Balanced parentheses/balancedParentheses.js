export function areParenthesesBalanced(inputString) {
  let a = 0;
  let b = 0;
  let divide = inputString.split("");
  for (let index = 0; index < divide.length; index++) {
    if (divide[index] === "(") a++;
    else if (divide[index] === ")") b++;
  }
  if (a === b && divide[1] != divide[divide.length - 1]) return true;
  else if (a === 0 && b === 0) return true;
  else return false;
}
