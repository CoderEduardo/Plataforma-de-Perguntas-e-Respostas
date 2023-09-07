/***************************CONFIGURAÇÕES************************/
const express = require("express")
const app = express()
const PORTA = 8080
const bodyParser = require("body-parser")
const connection = require("./database/database")
connection.authenticate().then(() => console.log("Conexão feita com o banco de dados")).catch(erro => console.log(`Ocorreu um erro: ${erro}`))
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Resposta")
app.use(express.static("public")) //Indicando que todos arquivos estáticos estão na pasta public
app.set("view engine", 'ejs')      //Indicando que o motor gráfico vai ser o ejs  
app.use(bodyParser.urlencoded({ extended: false }))    //Permite que dados recebidos via formulários sejam lidos
app.use(bodyParser.json())  //Permite a leitura de arquivos json
/***************************************************************/

/*****************************Rotas********************************** */

app.get("/", (req, res) => {

    Pergunta.findAll({ raw: true, order: [['id', 'DESC']] }).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        })
    })
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
})

app.get("/pergunta/:id", (req, res) => {
    let id = req.params.id
    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) {
            Resposta.findAll({
                where: { perguntaId: pergunta.id },
                order:[['id','DESC']]
            }).then(respostas => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas:respostas
                })
            })
        }
    })

})

app.post("/responder", (req, res) => {

    let corpo = req.body.corpo
    let perguntaId = req.body.perguntaId

    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId)
    })

})

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`)
})