import express from "express";
import cors from "cors";
import dotenv from "dotenv"

const app = express();
app.use(express.json());
app.use(cors());


app.listen(3001, () => {
  console.log("server is running");
});
