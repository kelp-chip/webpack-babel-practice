const express = require("express");
const app = express();
const path = require("path");

const port = 3003;

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
