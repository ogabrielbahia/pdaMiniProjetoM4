# API de Filmes Afro

Esta é uma API para gerenciar uma lista de filmes, incluindo operações básicas de CRUD (Criar, Ler, Atualizar e Deletar). A API foi desenvolvida usando Node.js com Express e fornece rotas para manipular informações sobre filmes voltados a autoestima preta .

## Estrutura do Projeto

O projeto contém os seguintes arquivos principais:

- **`app.js`**: Configuração do servidor Express.
- **`models/filme.models.js`**: Modelo para a entidade Filme.
- **`controllers/filme.controller.js`**: Controladores que definem as operações CRUD para filmes.
- **`routes/filme.routes.js`**: Rotas da API para acessar as operações CRUD.

## Endpoints da API

### 1. Criar um Filme

- **Método**: `POST`
- **URL**: `/filmes`
- **Corpo da Requisição**:
  ```json
  {
    "titulo": "Nome do Filme",
    "genero": "Gênero do Filme",
    "ano": 2024,
    "descricao": "Descrição do Filme"
  }
