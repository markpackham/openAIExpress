// const readline = require("readline");
const express = require("express");
const {
  generateMeta,
  generateImage,
} = require("./controllers/openaiController");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("YouTube Video Title: \n", (title) => console.log(title));
// rl.question("YouTube Video Title: \n", generateMeta);

const app = express();
app.listen(4000, () => console.log("Listening to requests on port 4000"));

// middleware
app.use(express.json());
app.use(express.static("public"));

// routes
app.post("/openai/meta", generateMeta);
app.post("/openai/image", generateImage);
