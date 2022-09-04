const express = require("express");
const SupplyAllyServerRouter = require("./router");

const PORT = process.env.SERVER_PORT || 8080;
// const PORT = 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Supplyally server!" });
});

app.get("/api", (req, res) => {
  res.json({ message: "Welcome Supplyally API server!" });
});

app.use("", SupplyAllyServerRouter);

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

server.on("error", console.error);
