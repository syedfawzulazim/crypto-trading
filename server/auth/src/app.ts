import express from "express";
import "express-async-errors";
import cors from "cors";
import cookieSession from "cookie-session";

import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

import {
  currentUserRouter,
  signinRouter,
  signupRouter,
  signoutRouter,
} from "./routes";

const app = express();
app.set("trust proxy", true);

app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.all("*", () => {
  throw new NotFoundError("Route Not Found");
});

app.use(errorHandler);

export { app };
