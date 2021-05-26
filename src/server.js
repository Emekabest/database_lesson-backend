const express = require("express");
const data = require("./data.js");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(data.Workers_Data);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at localhost:${port}`);
});
