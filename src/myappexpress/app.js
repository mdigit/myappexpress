const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = process.env.PORT || 4041;

app.use('/', require('./routes/users'));

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
