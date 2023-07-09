import cors from "cors";
import express from "express";
import "module-alias";
import "module-alias/register";
import "reflect-metadata";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use(routes);

app.listen(4000, () => console.log("Server is running"));
