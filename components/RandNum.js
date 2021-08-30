export function random(num) {
    const nums = new Set();
  while(nums.size !== num) {
    nums.add(Math.floor(Math.random() * num) + 1);
  }
  return [...nums];
  }