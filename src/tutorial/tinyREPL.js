import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "(っ+ω+)っ "
});

rl.prompt();

const w = line => {
  console.log(`${line}ｗ`);
};

rl.on("line", l => {
  w(l);
  rl.prompt();
}).on("close", () => {
  console.log("(^0^)/ bye!");
  process.exit();
});
