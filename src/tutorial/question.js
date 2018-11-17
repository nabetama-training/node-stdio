import readline from "readline";
import { createInterface } from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// question and reply
rl.question("What your name?", reply => {
  console.log(reply);
  rl.close();
});
