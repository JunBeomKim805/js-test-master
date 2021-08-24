let start = [0, 1];
export function getFibonacciUntil(n) {
  for (let i = 1; i < n - 1; i++) {
    start.push(start[i] + start[i - 1]);
  }
  return start;
}
