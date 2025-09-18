// importa o framework 
const express = require("express")

//importa middleware de terceiros
const cors = require('cors');
const router = require('./router');

// 2 criar uma instância da aplicação

const app = express();

// midleware embutido ou integradonp
app.use(express.json());

// ?param1==valor1&param2=valor2...
app.use(express.urlencoded({ extended: false}));

// middleware de aplicação
app.use((req, res, next)=>{
    console.log("passei pelo middleware de app");
    next();
})

// middleware de roteamento
const router = express.Router();
router.get('/', (req, res) => {
    res.send("listar as tarefas");

});
router.post('/', (req, res) => {
res.status(201).send("Tarefa criada com sucesso");
});

router.put('/:id', (req, res) => {
    const { id } = req.params; //desestruturando o objeto params
    if (id == 1) return res.send("Tarefa atualizada");
    res.status(404).send("Tarefa não encontrada");

});
router.delete('/:id', (req, res) => {
    const { id } = req.params; //desestruturando o objeto params
    if (id == 1) return res.status(204).end(); // sem conteudo
    res.status(404).send("Tarefa não encontrada");
    throw error("Tarefa não encontrada");

});

app.use('/tarefas', router)

// criar um midleware de roteamento
app.get('/', (req, res)=> {
    res.send("Olá");
});

// midleware de erro 
app.use(( err, req, res, next)=> {
    res.status(500).send(err.message);
});

// 3 iniciar a aplicação em uma porta

app.listen(3000, () => {
    console.log("app está on!")
});