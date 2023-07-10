import cors from "cors";
import express from "express";
import "module-alias";
import "module-alias/register";
import "reflect-metadata";

import "./database";
import { routes } from "./routes";

const app = express();

const corsOptions = {
  origin: "http://191.252.186.229/:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(routes);

app.listen(4000, () => console.log("Server is running"));
