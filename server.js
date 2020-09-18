const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

/**
 * MONGOOSE
 */
mongoose.connect(`mongodb+srv://admin13:admin13@cluster0.qyhqh.mongodb.net/boards?retryWrites=true&w=majority
`);

/**
 * MODELS
 */
// const User = require("./database/models/User");
// const Change = require("./database/models/Change");
// const Storehouse = require("./database/models/Storehouse");

/**
 * SERVER SETUP
 */
const app = express();
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

/**
 * SQL SETUP
 */
// const sql = require("mssql");
/**
module.exports = config = {
  user: "sql_username",
  password: "sql_password",
  server: "instance_address",
  database: "PACKING"
};
 */
//const config = require("./database/config");

/**
 * Load index router
 */
// app.use(require("./database/controllers"));

const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
