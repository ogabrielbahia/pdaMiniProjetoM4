import Pessoa from "../models/pessoa.models.js";

let listaPessoas = [];

export const criandoPessoa = (nome, idade, cpf) => {
    let pessoa = new Pessoa(nome, idade, cpf);
    listaPessoas.push(pessoa);
}

export const buscarTodos = () => {
    return listaPessoas;
}

export const buscarPorNome = (nome) => {
 
    return listaCarro.filter(({ nome })=> nome == nome);
}   