const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { urlencoded } = require('body-parser')

app.use(cors())
app.use(bodyParser(urlencoded({extended: false})))
app.use(bodyParser.json())

let db = {
    servicos: [
        {
            id: 1,
            name: 'Reboco',
            unid: 'm²',
            price: 35
        },
        {
            id: 2,
            name: 'Alvenaria',
            unid: 'm²',
            price: 40
        }
    ]
}

app.get('/servicos', (req, res) => {
    res.statusCode = 200
    res.json(db.servicos)
})

app.get('/servico/:id', (req, res) => {

    if(isNaN(req.params.id)) {
        res.statusCode(400) 
    } else {
        let id = req.params.id
        let servico = db.servicos.find(serv => serv.id == id)
 
        if(servico != undefined) {
            res.statusCode = 200
            res.send(servico)
        } else {
            res.sendStatus(404)
        }

    }

})



app.listen(3000, () => console.log('API RODANDO NORMALMENTE...'))