const express = require("express");
const app = express();

const PORT = 3000;
const hostName = "localhost";

app.listen(PORT, () => {
  console.log(`Server listening on http://${hostName}:${PORT}`);
});
