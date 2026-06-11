const express = require("express");
const dotenv = require("dotenv");
const indexRouter = require("./routes/indexRouter");
const app = express();
dotenv.config();

app.use("/", indexRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`the server is listening on http://localhost:${PORT}/`);
});
