require("dotenv").config();
const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/apiRoutes");
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Now live at http://localhost:${port}/`);
});

app.get("/", (req, res) => {
  res.json({
    routes: [
      {
        url: "/api/champions",
        queries: [
          {
            cost: {
              min: 1,
              max: 5,
              required: false,
            },
            hasClass: {
              required: false,
            },
            hasOrigin: {
              required: false,
            },
          },
        ],
      },
      {
        url: "/api/classes",
      },
      {
        url: "/api/origins",
      },
      {
        url: "/api/items",
      },
      {
        url: "/api/traits",
      },
    ],
  });
});

app.use((err, req, res, next) => {
  const { message = "Something went wrong.", statusCode = 500 } = err;
  res.status(statusCode).json({
    code: statusCode,
    message,
  });
});
