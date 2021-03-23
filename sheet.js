const express = require("express")
const app = express();
const rp = require("request-promise-native")
const dfff = require("dialogflow-fulfillment")

app.post("/",express.json(), function(req, res){
    dialogflow(req,res)
})

const dialogflow = (req,res) => {
    const agent = new dfff.WebhookClient({req,res})
    
    function demo(agent){
        const name = req.body.queryResult.parameters.Name
        const url = "https://sheetdb.io/api/v1/2f53mv3d1o35c/search?Name="+ name
        return rp.get(url).then(message =>{
            const body = JSON.parse(message)
            const grade = body[0].Grade
            agent.add("The person is in " + grade)
        })

    }
    let intentMap = new Map()
    intentMap.set("", demo)
    agent.handleRequest(intentMap)
}


app.listen(3000,function(){
    console.log("We are Live");
})