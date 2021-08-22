const express = require("express");
const app = express();
//Mysql for database
var mysql = require("mysql")
//for translation
const translate = require('@vitalets/google-translate-api');
//For parsing the form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 8080;
//template engine and static folder
app.set('view engine', 'ejs');
app.use(express.static("public"));
//database connection.
const conn =mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"translator",
})
conn.connect((err)=>{
  if(err) throw err;
  console.log("Connected..!!")
})

app.get('/',(req,res) => {
  let sql ="select * from translations"
    let query =conn.query(sql,(err,result)=>{
        if (err) throw err;
        res.render('home',{"result":result,title:"Translator",translated:""})
    })
   
})

app.post('/',function(req,res){
  var itext=req.body.itext
  var lang=req.body.language

  console.log(itext)

  translate(req.body.itext, {to:lang}).then(response => {
   
    res.render('home',{title:"Translator",translated:response.text})
    let sql ="insert into translations(itext,language,response) value(?,?,?)";
    let query = conn.query(sql,[itext,lang,response.text],(err,result)=>{
       if(err) throw err;
       console.log("inserted");
    })  
  }).catch(err => {
    console.error(err);
  });

})

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});