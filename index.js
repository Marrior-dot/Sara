const express = require('express')
const app = express()
const {WebhookClient} = require('dialogflow-fulfillment')
app.use(express.json())

app.get('/', (req,res) => {
    res.send("Server is working")
})

app.post('/webhook', (req,res) => { 
   // res.send(200);
    // pega o agent da resposta
    let agent = new WebhookClient({request:req, response:res})

    // criar um intentMap para guardar os intents
    let intentMap = new Map()

    // adicionar
    intentMap.set('Default Welcome Intent', Responseintent)
    
    agent.handleRequest(intentMap)
    
})

function Responseintent(agent){
    agent.add("Hello i'm a webhook")
}

app.listen(3000, () => {
    console.log("Server is working")
})
