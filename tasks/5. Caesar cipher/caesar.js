export function encryptCaesar(inputString, key) {
  let string = inputString.split("");
  let arr = [];
  for (let index = 0; index < string.length; index++) {
    arr.push(
      String.fromCharCode(
        string[index].charCodeAt() + key <= 90
          ? string[index].charCodeAt() + key
          : ((string[index].charCodeAt() + key) % 90) + 64
      )
    );
  }
  return arr.join("");
}
