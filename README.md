<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos de nodeJS
</h3>


### INTRODUÇÃO SOBRE O PROJETO

Criar um projeto para armazenar outros projetos e suas tarefas.
Primeiro você criaria seu projeto dentro da sua empresa e após isso você poderia fazer a atualização
e também poderia dar tarefas novas para esse projeto.

### FERRAMENTAS UTILIZADAS
- EXPRESS
- YARN

### COMO RODAR O PROJETO
- Após baixar o projeto você irá no seu `terminal` e irá digitar `yarn`
  pois assim ele irá baixar todas as configurações do projeto.
- Para fazer o teste das rotas, dentro do terminal só digitar `yarn dev` e ele
  irá executar a atividade

  ### COMO DEVE FUNCIONAR

  - Quando você for cadastrar um projeto, deve ser enviado 
    o `id`, `projeto` e `task` no caso do 1 cadastro o 'task' pode sim ir vazio
    **Exemplo abaixo**

```js
   [
  {
    id: "1",
    title: "Novo projeto",
  }
];
```