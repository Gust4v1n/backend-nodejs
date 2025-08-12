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

    app.put('/api/produtos/:id', (req,res)=>{
        const id = parseInt(req.params.id, 10);
        const produto = produtos.find(p=> p.id ===id);
        if(isNaN(id)){
            return res.status(400).json({ mensagem: 'O ID fornecido não é um número valido'});
        }
        if (!produto){
            return res.status(404).json({mensagem:'produto não encotrado'});
        }
        const novoNome = req.body.nome;
        if (!novoNome || novoNome.trim() === ''){
            return res.status(400).json({mensagem:'O campo "nome" é obrigatório e não pode ser vazio'});
        }
        produto.nome =novoNome;
        res.json(produto);
    });

    app.delete('api/delete/:id', (req,res)=>{
        const id = parseInt(req, params.id);
        if(isNaN(id)){
            return res.status(400).json({ mensagem: 'O ID fornecido não é um número valido'});
        }
        const tamanhoOriginal = produtos.length;
        produtos = produtos.filter(p => p.id !==id);
        if(tamanhoOriginal === produtos.lenght)
        {
            return res.status(404).json({mensagem: 'Produto não encontrado'})
        }
        res.status(204).send();
    })

    //INICIA A LINDA PORTA(NO CASO A PORTA 1533)
    app.listen(1533, () => {
        console.log('Servidor rodando ')
    })
}


module.exports = startServer;