const User = require("../models/User.js");

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
    const userCreated = await User.create({ fullName, email, password });
    res.status(200).json({ msg: userCreated });
    // 3. Hash Password: 🔒 Securely hash the password.

    // 4. Create User: 📝 Create a new user with hashed password.

    // 5. Save to DB: 💾 Save user data to the database.

    // 6. Respond: ✅ Respond with "Registration Successful" or handle errors.
  } catch (error) {
    res.status(400).send({ msg: "Internal Server Error" });
  }
};

module.exports = { home, register };
