
import express from "express";
import { pessoaRouter } from "./routes/pessoa.routes.js";


const app = express()
const port = 4000

app.use(express.json());

app.use(pessoaRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})