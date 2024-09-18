const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
var nodemailer = require("nodemailer");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to our home page");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { username, lname, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "email already exist" });
    }

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      lname,
      email,
      phone,
      password,
    });
    // const data = req.body;
    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("Internal server error");
    next(500);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });

      // Send email after successful response
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      var mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Welcome to our website",
        text: password,
        html: `
          <div style="padding:10px;border-style: ridge">
            <p>Welcome to our website K&K Rough Diamond.</p>
            <h3>Login Verification Successful</h3>
            <ul>
              <li>Your UserId Is: ${email}</li>
              <li>Your Password Is: ${password}</li>
            </ul>
          </div>`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error("Error sending email:", error);
        }
      });
    } else {
      res.status(401).json({ message: "invalid email or password" });
    }

    // });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// to send user data - user logic
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route${error}`);
  }
};

module.exports = { home, register, login, user };
