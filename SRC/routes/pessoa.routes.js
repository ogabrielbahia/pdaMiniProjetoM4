import { Router } from "express";
import { buscarTodos, criandoPessoa } from "../controllers/pessoa.controller.js";


const pessoaRouter = Router();

pessoaRouter.get("/buscar", (req,res)=> { 
    let result = buscarTodos();
    res.json({result})
});


pessoaRouter.post("/pessoa", (req,res)=> {
    
    const { nome, idade, cpf } = req.body;
    criandoPessoa(nome, idade, cpf);
    res.json({message:" sucesso"})
});

export { pessoaRouter }