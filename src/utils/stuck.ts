export const stuck = () => {
  const memoryHog = [];
  while (true) {
    console.log("Hello World");
    memoryHog.push(new Array(1000000).fill("*")); // 模拟内存占用
  }
};
