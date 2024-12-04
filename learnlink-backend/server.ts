import express, { json } from "express";
const app = express();

import { config } from "dotenv";
import { databaseConnect } from "./src/db";

config();
app.use(json());

const PORT = process.env.PORT;
const api = process.env.API;

import userRouter from "./src/routes/userRoutes";

app.use(`${api}users`, userRouter);

databaseConnect();

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
