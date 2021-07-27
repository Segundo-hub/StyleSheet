require("dotenv").config({ path: "./config.env" });
const express = require('express');
const MongoConection = require('./Model'); MongoConection()
const app = express();
const cors = require("cors");
const { Headers } = require("./Middlewares/Headers");
const port = process.env.PORT = 8080;

app.use(express.json())
app.use(cors());

app.use("/api/users", require('./Controllers/routes/user.routes'))
app.use("/api/tasks", require("./Controllers/routes/task.routes"));



app.listen(port, () => {
    const chalk = require('chalk')
    process.stdout.write("\u001b[2J\u001b[0;0H");
    console.log(
      chalk.magenta.bold(
        "\n" +
          chalk.bold.yellow.bgGreen("Listening on: ") +
          `
    -----------------------------
    |   ${chalk.underline(`http:/localhost:${port}`)}  |
    -----------------------------
    ` +
          "\n"
      )
    );
} )
