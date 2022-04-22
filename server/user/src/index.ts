import express from "express";

const app = express();

app.use(express.json());

let a: number = 7;

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
