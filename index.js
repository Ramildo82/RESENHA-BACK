const express = require('express')
const config = require ('config')

/* Setar a porta do servidor */
const port = process.env.port || config.get("server.port")
/* Ovindo a porta do servidor */
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const listaCadastro =[]

/* Criando rota cadastro */
app.route('/login').get( (req, res) => {
    console.log("/Login realizado com sucesso")
    res.status(200).json(listaCadastro)
})

app.route ('/cadastro').post((req, res) => {    
    listaCadastro.push(req.body)
    res.status(200).send("Cadastro realizado com sucesso")
})

app.listen(port, () => {
    console.log("iniciando o servidor na porta ", port)
})

/* Só para informas o funcionamento */
console.log("Inicio do projeto")