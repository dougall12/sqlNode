import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import database from "./server/config/db.js";
import { ExpressHandlebars } from "express-handlebars";
import player from "./server/routes/player.js";

const app = express();

database();

app.use(bodyParser.json());

//ROUTES
app.use("/player", player);

//SERVER PORT
const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
