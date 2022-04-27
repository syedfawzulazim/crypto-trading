import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { body } from "express-validator";

import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/user";
import { validationRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 10 })
      .withMessage("Password must be between 4 and 20"),
  ],
  validationRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existinguser = await User.findOne({ email });

    if (existinguser) {
      console.log("User exist");
      throw new BadRequestError("Email is taken");
    }

    const user = User.build({ email, password });
    await user.save();

    //Genterate JWT
    const userJWT = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    //Store it on session object
    req.session = {
      jwt: userJWT,
    };

    res.status(201).send(user);
  }
);

export default router;
