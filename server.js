const express = require('express');
const app = express();

function startServer(){

    //PERMITIR RECEBER DADOS(no caso json)
    app.use(express.json())

    let produtos = [
        {id: 1, nome: "Mouse"},
        {id: 2, nome: "Teclado"}
    ];

    //REDIRECIONAMENTO ROTA PRINCIPAL
    app.get('/', (req, res) =>{
        res.send('ola, esse servidor e zika demaiso')
    })

    //REDIRECIONAMENTO ROTA **SOBRE**
    app.get('/sobre', (req, res) =>{
        res.send('pagina sobre')

    })

    //REDIRECIONAMENTO ROTA **PRODUTO**
    app.get('/produtos', (req,res) =>{
       res.send('pagina produto')
    })

    //REDIRECIONAMENTO ROTA *API/PRODUTOS*
    app.get('/api/produtos', (req,res) =>{
        res.json(produtos)
    })

    //POST API/PRODUTOS
    app.post('/api/produtos', (req,res) =>{
        const novoProduto = {
            id:produtos.length + 1,
            nome:req.body.nome
        }
        produtos.push(novoProduto)
        res.status(201).json(novoProduto)

    })

    //INICIA A LINDA PORTA(NO CASO A PORTA 1533)
    app.listen(1533, () => {
        console.log('Servidor rodando ')
    })
}


module.exports = startServer;