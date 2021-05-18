import express from 'express';
const app = express();

app.get("/welcome", function(req, res){
    res.send("Welcome to my app server");
})

const PORT = 8080;

app.listen(PORT, function(){
    console.log("Server running at "+PORT);

})