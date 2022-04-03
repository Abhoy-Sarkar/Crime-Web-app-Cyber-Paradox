const express= require("express")
const bodyParser= require("body-parser")
const https=require("https")
const app=express()
const { response } = require("express")
app.use(express.static(__dirname));
app.use (bodyParser.urlencoded({extended: true}))
app.set('view engine','ejs');


app.get ("/",function(req,res){
    res.sendFile(__dirname+"/try.html")
})
app.post("/",function(req,res){
    const key= "cf6ed141ea2ef0156520898573e62eb8"
    const city=req.body.CityName
    const radius=req.body.Radius
    const time=req.body.time
    console.log(req.body)
    const url= "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units=metric&appid=" + key
    
    https.get(url,function(response){
        console.log(response.statusCode+" ,"+ query );
    
    response.on("data",function(data){
        weatherData=JSON.parse(data)
        lat=weatherData.coord.lat
        lon=weatherData.coord.lon
        res.render("index",{})
    })
})
})
app.get ("/compose",function(req,res){
    res.sendFile(__dirname+"/compose.html")
})

app.post("/compose",function(req,res){
    const email=req.body.email
    const det=req.body.Det
    const connum=req.body.Contact
    const loc=req.body.loc
    res.redirect("/");
})

app.get("/Result",function(req,res){
    res.sendFile(__dirname+"/Result.html")
})
app.post("/Result",function(req,res){
    res.sendFile(__dirname+"/Result.html")
})





app.listen(3000, function(){
    console.log("The server is running on port 3000")
})
        