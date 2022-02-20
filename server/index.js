import express from "express";
import bodyParser from "body-parser";
import database from "./config/db.js";

const app = express();

database();

app.use(bodyParser.json());

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
