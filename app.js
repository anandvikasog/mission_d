const express = require("express");
const cors = require("cors");
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.json({
    status: true,
    message: "Let's create best dating app",
  });
});

app.get("/home", (req, res) => {
  res.json({
    status: true,
    message: "Welcome to dating app",
  });
});

app.listen(PORT, () => console.log(`Server is active on ${PORT}`));
