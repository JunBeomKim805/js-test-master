export function isPalindrome(inputString) {
  let rever = inputString.split("").reverse().join("");
  if (inputString === rever) return true;
  else return false;
}
