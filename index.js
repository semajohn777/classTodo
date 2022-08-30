require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express();
const port = process.env.PORT || 4000
const connectDb = require("./db/mydata");
const route = require("./routes/todoRoutes");


//middlewaled
app.use(express.urlencoded({extended : true}));
app.use(express.json())
app.use(cors())
app.use(route)
//app.use("/todu" route) this or line 12




connectDb(process.env.MONGO_URL)
.then(()=>{
        console.log(`data done connect`);
})




app.listen(port, ()=>{
    console.log(`server de work ${port}..`);
})