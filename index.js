/***************************CONFIGURAÇÕES************************/
const express = require("express")
const app = express()
const PORTA = 8080
const bodyParser = require("body-parser")

app.use(express.static("public")) //Indicando que todos arquivos estáticos estão na pasta public
app.set("view engine",'ejs')      //Indicando que o motor gráfico vai ser o ejs  
app.use(bodyParser.urlencoded({extended:false}))    //Permite que dados recebidos via formulários sejam lidos
app.use(bodyParser.json())  //Permite a leitura de arquivos json
/***************************************************************/

/*****************************Rotas********************************** */

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta ${PORTA}`)
})