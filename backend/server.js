const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const cors = require("cors");

app.use(cors());

dotenv.config();

const userRoute = require("./routes/userRoute");

app.use(express.json());

mongoose.connect(process.env.URI)
.then(()=>{
    console.log("connected");
    app.listen(process.env.PORT || 4000 , (err)=>{
        if(err)
        console.log("error occured");
        else
        console.log("running successfully at ", process.env.PORT);
    });

}).catch((error)=>{
    console.log("Error connection");
}   
)

app.use("/", userRoute);



