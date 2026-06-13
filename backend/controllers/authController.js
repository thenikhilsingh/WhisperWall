const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const { validationResult } = require("../validators/authValidator.js");

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to auth home");
  } catch (error) {
    console.log(error);
  }
};

//Registeration Logic
const register = async (req, res) => {
  //validations
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
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

//Login Logic
const login = async (req, res) => {
  //validations
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    //1. Get Login Data: 📥 Retrieve login data (email, password).
    const { email, password } = req.body;

    // 2. Check Email Existence: 📋 Check if the email is registered or not.
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    // 3. If User exists then Compare Password
    // const isPasswordValid = await bcrypt.compare(password, userExist.password);
    const isPasswordValid = await userExist.comparePassword(password);

    // 4. If password is correct then generate token
    if (isPasswordValid) {
      res.status(200).json({
        msg: "Login Successfull!",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password!" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

// To send User data - User Logic
const user = async (req, res) => {
  try {
    const userData = req.user; //userData is getting from authMiddleware
    res.status(200).json({ msg: userData });
  } catch (error) {
    console.log(`error from the user route: ${error}`);
  }
};

module.exports = { home, register, login, user };
