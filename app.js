// Starting point

const express = require("express");
const app = express();
const users = require("./routes/users");
const port = 3001 || process.env.PORT;

// connect with mongodb

app.use("/user", users);

app.listen(port, () => console.log(`Server is started on port ${port}`));
app.listen();
