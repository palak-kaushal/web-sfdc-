const express =  require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const db = require("./server/config/db")
const route = require("./server/routes/route")
const {createAdmin} = require("./server/config/seed")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",route)
db()
createAdmin()


const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server is running at port number http://localhost:${port}`)
})