// require("dotenv").config();
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const orderRoute = require("./router/order-router");
const serviceRoute = require("./router/service-route");
const adminRoute = require("./router/admin-router");
// const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// const corsOptions = {
//   origin: "http://localhost:3000",
//   methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//   credentials: true,
// };
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connect");
} catch (error) {
  console.log("error", error);
}

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "Fruntend", "build")));
  res.sendFile(path.resolve(__dirname, "Fruntend", "build", "index.html"));
});

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/form", orderRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);

// connectDb().then(() => {
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
// });
