const path = require("path");
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

app.use("/api", require("./routes/contactRoutes"));

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server Running on ${PORT}`);
  await connectDB();
});