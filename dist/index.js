const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  console.log("getting stuff with babel");
  res.send({ message: "Hello babel test!!!!" });
});

app.listen(3000, () => console.log("Listening on port 3000"));