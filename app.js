const readline = require("readline");
const { generateMeta } = require("./controllers/openaiController");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("YouTube Video Title: \n", (title) => console.log(title));
rl.question("YouTube Video Title: \n", generateMeta);
