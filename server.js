const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors")
const ejs = require("ejs")
const path = require("path")
const bodyParser=require("body-parser")




app.use(cors())


//ejs

const templatePath=path.join(__dirname,"./tempelates")

app.set("view engine", "ejs")
app.set("views",templatePath)



//middleware
app.use(express.json())
app.use(bodyParser.urlencoded( { extended: false} ))
app.use(express.static(path.join(__dirname,"./public")));


//routes
app.use("/",require("./routers/index.routes.js"))

//ports
const port=process.env.PORT||3000


app.listen(port,()=>{
console.log(`App is listening on ${port} port`);
})