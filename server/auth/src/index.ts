import express from "express";
import "express-async-errors";
import cors from "cors";
import mongoose from "mongoose";

import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

import {
  currentUserRouter,
  signinRouter,
  signupRouter,
  signoutRouter,
} from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.all("*", () => {
  throw new NotFoundError("Route Not Found");
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("DB");
  } catch (error) {
    console.log(error);
  }
  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!11");
  });
};

start();
