const express=require("express")
const path=require("path")
const app=express()
const hbs=require("hbs")
const staticpath=path.join(__dirname,"../public")
app.use(express.static(staticpath))
const partialpath=path.join(__dirname,"../template/partial")
const viewpath=path.join(__dirname,"../template/views")
app.set("view engine","hbs")
app.set("views",viewpath)
hbs.registerPartials(partialpath)
app.get("",((req,res)=>{
    res.render("index.hbs",{
        name:"weather app"
    })
}))
app.get("/about",((req,res)=>{

    res.render("about.hbs")
}))
app.get("/weather",((req,res)=>{
    res.render("weather.hbs")

}))
app.get("*",((req,res)=>{
    res.render("404.hbs")
}))
app.listen(8000)