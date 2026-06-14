const express = require("express");
const dotenv = require("dotenv");
const indexRouter = require("./routes/indexRouter");
const authRouter = require("./routes/authRouter");
const connectDB = require("./config/db.js");
const cors = require("cors");
const messageRouter = require("./routes/messageRouter.js");
const joinClubRouter = require("./routes/joinClubRouter.js");
const app = express();
dotenv.config();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  }),
);
app.use(express.json()); //this middleware allows json data to be transfer or recieve
app.use("/", indexRouter);
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/join-club", joinClubRouter);

const PORT = process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`the server is listening on http://localhost:${PORT}/`);
  });
});
