const age = 45;
let userName = "Giovanni";

export default function foo() {
  console.log("Hello from module");
}

export { age, userName };

console.log("Hello from module.js");
