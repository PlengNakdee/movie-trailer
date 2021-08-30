export function random() {
    const nums = new Set();
  while(nums.size !== 13) {
    nums.add(Math.floor(Math.random() * 13) + 1);
  }
  return [...nums];
  }