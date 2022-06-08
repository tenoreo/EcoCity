const express=require('express');
const bodyParser=require('body-parser');
const admin=require('firebase-admin');
const cors=require('cors');
const app=express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

admin.initializeApp({
    credential: admin.credential.cert('./firebase.json')
});
app.get('/',function(req,res){
    res.send("<h1>Hello World</h1>");
});
app.use(require('./routes/User'));

app.listen(process.env.PORT || 8888,function(){
    console.log('Servidor en linea',this.address().port, app.settings.env)
});