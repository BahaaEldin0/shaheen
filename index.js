const express = require('express');
const app = express();
const dfff = require('dialogflow-fulfillment')


app.get('/', (req, res)=>{
    res.send("We are here")
});

app.post('/',express.json() ,(req,res)=>{
    const agent = new dfff.WebhookClient({
        request: req,
        response : res
    });

    function demo(agent){
        
        agent.add("Sending Request from webhook server")
        agent.add('say yes')
        
        
        
    }
    function price(agent){
        const from = agent.parameters.from
        const to = agent.parameters.to
        const number = agent.parameters.number
        if (from) {
            pass
        } else {
            agent.add('From?')
        }
        if (to) {
            pass
        } else {
            agent.add('To?')
        }
        if (number) {
            pass
        } else {
            agent.add("Weight?")
        }

        console.log(from)
        console.log(to)
        console.log(number)
        agent.add('done')
    }
    var intentMap = new Map();
    intentMap.set("price", price)
    intentMap.set("demo", demo)
    agent.handleRequest(intentMap)
});

app.listen(3333, ()=>console.log("Server is live at 3333"))