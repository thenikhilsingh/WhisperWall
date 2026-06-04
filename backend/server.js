const express = require("express");
const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`the server is listening on `);
});
