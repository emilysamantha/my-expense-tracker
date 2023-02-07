// Dependencies
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const path = require("path");
const transactions = require("./routes/transactions");

// Initialize app
const app = express();

// DOTENV
dotenv.config({ path: "./config/config.env" });

// Connect to MOngoDB
connectDB();

app.use(express.json());
app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// PORT
const PORT = process.envPORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
