import userModel from "../models/userModel.js";

import { hashPassword } from "./../helpers/authHelper.js";

export const registerController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};
