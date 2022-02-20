const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/apiRoutes");
const app = express();
const port = 8080;

app.use(cors());

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Now live at http://localhost:${port}/`);
});

app.use((err, req, res, next) => {
  const { message = "Something went wrong.", statusCode = 500 } = err;
  res.status(statusCode).json({
    code: statusCode,
    message,
  });
});
