
const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const mogoUrl= 'mongodb+srv://rixant:Rishant@cluster0.qutd2.mongodb.net/test?retryWrites=true&w=majority';
const PORT = 3000;


mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


mongoose.connection.on('connected', () => {
    console.log('MongoDB successfully connected')
});


mongoose.connection.on('error', (err) => {
    console.log('Error', err)
});


app.use(bodyParser.json())


app.get("/welcome", function(req, res){
    res.send("Welcome to my app server");
});


app.post('/', (req, res) => {
    console.log(req.body),
    res.send('hello')
})


app.listen(PORT, function(){
    console.log("Server running at "+PORT);

})