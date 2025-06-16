const express = require("express")
const dotEnv= require("dotenv");
const mongoose = require('mongoose');
const vendorRoutes= require('./routes/vendorRoutes');
const Firmroutes = require('./routes/firmRoutes');
const prodcutRoutes = require('./routes/productRoutes')
const path = require('path')

const bodyParser = require('body-parser');
const productRoutes = require("./routes/productRoutes");

const app = express()
const PORT =4000;

dotEnv.config()

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongoDB connecggted"))
.catch((error)=>console.log(error))

    app.use(bodyParser.json());
    app.use('/vendor',vendorRoutes);
    app.use('/firm',Firmroutes);
    app.use('/product',productRoutes);
    app.use('/uploads',express.static('uploads'));

        
    app.listen(PORT,()=>{
        console.log(`server stareted and running at ${PORT}`);
    });
    app.use('/home',(req,res)=>{
        res.send("<h1> welcome")
    })