const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

// iniciando o app
const app = express()

//permitir que a aplicação recepa dados no formato de json
app.use(express.json())

//permintir que outros dominios  acesse 
app.use(cors())

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true})

requireDir('./src/models')

//Rotas
app.use('/api', require('./src/routes'))

app.listen(3001)


//abrir o robo3t acessar '/usr/local/bin/robo3t/bin$' comando './robo3t'