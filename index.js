const express = require('express');

const server = express();

server.use(express.json());

//Iniciando a variavel vazia e que possivelmente será alterada
let contagemReq = 0;
let projects = [];


function requSolicitada(req, res, next){
  contagemReq++;

  console.log(`Foi feita ${contagemReq} requisições`);

  return next();
}

server.use(requSolicitada);



//Verificado se o id existe
function alreadyExistId (req,res,next){
  const {id} = req.body;

  const project = projects.find(i => i.id === id)

  if(project){
    return res.status(400).json({error: 'Id already exist'});
  }

  return next();
}



//Middleware
//Fazendo a verificação se Aquele id existe 
function checkId (req, res, next){
  const {id} = req.params;

  const project = projects.find(p => p.id === id)

  if(!project){
    return res.status(400).json({error: 'Id not found'});
  }

  req.id = id;
  return next();
}


//Rota para criar o id e o projeto
server.post('/projects', alreadyExistId  , (req,res) => {
  const {id, title} = req.body;

  const project = {id,title,task:[]}

  projects.push(project);

  return res.json(project);
});

//Retornando todo os projetos
server.get('/projects', (req,res) => {
  return res.json(projects);
})

//Alterando o titulo
server.put('/projects/:id', checkId , (req, res) => {

  const {id} = req.params;
  const {title} = req.body;

  //A aqui é utilizado o find somente para achar o index
  //Não foi utilizado o map pois ele só iria percorrer a variavel
  const project = projects.find(project => project.id === id);

  //Ele está selecionando title dentro de projeto
  //Pedindo a alteração do title informado no body
  project.title = title;

  return res.json(projects)
});

//O Delete é identico ao PUT pois eles seguem a mesma logica
// A Diferença é que ele só vai deletar o ID encontrado

server.delete('/projects/:id', checkId , (req,res) => {

  const {id} = req.params;

  const project = projects.findIndex(project => project.id === id);

  projects.splice(project, 1);

  return res.json({ messagem: `O id ${req.id} foi deletado`});

});


server.post('/projects/:id/task', alreadyExistId ,checkId ,(req, res) => {
  const {id} = req.params;
  const {title} = req.body;

  const project = projects.find(project => project.id === id);

  project.task.push(title);

  return res.json(projects);

});


server.listen(3000);