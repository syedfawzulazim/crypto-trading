import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

import {
  currentUserRouter,
  signinRouter,
  signupRouter,
  signoutRouter,
} from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!");
});
