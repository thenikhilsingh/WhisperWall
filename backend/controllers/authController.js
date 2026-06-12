const User = require("../models/User.js");
// const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to auth home");
  } catch (error) {
    console.log(error);
  }
};

//Registeration Logic
const register = async (req, res) => {
  try {
    // 1. Get Registration Data: 📥 Retrieve user data (username, email, password).
    const { fullName, email, password } = req.body;

    // 2. Check Email Existence: 📋 Check if the email is already registered.
    const userExist = await User.findOne({ email: email }); // email in collection of db : email in body
    if (userExist) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // 3. Hash Password: 🔒 Securely hash the password. //we did this step in user model using "pre" method
    // const saltRound = 10;
    // const hash_password = bcrypt.hash(password, saltRound);

    // 4. Create User: 📝 Create a new user with hashed password.
    const userCreated = await User.create({
      fullName,
      email,
      // password: hash_password,
      password,
    });
    res.status(201).json({
      msg: "Registeration Successfull!",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = { home, register };
