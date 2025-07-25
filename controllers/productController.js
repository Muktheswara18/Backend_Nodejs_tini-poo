
const Product = require('../models/Product');
const Firm = require('../models/Firm')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Store in uploads folder
},
filename: function (req, file, cb) {
    cb(null, Date.now() + Path.extname(file.originalname)); // Unique file name
}
});

const upload = multer( {storage: storage});

const addProduct = async(req,res)=>{
    try {
        const {productName, price,category,bestSeller,description}=req.body;
        const image = req.file ? req.file.filename:undefined;

        const firmId = req.params.firmId;
        const firm = await Firm.findById(firmId);
        if(!firm){
            return res.status(404).json({error:"no firm found"});
        }
        const product = new Product({
            productName, price,category,bestSeller,description,image,firm:firm._id
        })

        const savedProduct = await product.save();

        firm.products.push(savedProduct);

        await firm.save()

        res.status(200).json(savedProduct)

    } catch (error) {
        console.error(error)
        res.status(500).json({error:"internal sever error"})
    }
}

const getProductByFirm = async(req,res)=>{
    try{
        const firmId =req.params.firmId;
        const firm =await Firm.findById(firmId);
        if(!firm){
            return res.status(404).json({error:"no firm found"});
        }

        const restaurentName = firm.firmName;
        const products = await Product.find({firm:firmId});
        res.status(200).json({restaurentName,products});
    }
    catch(error){
          console.error(error)
        res.status(500).json({error:"internal sever error"})
    }
}

const deleteProductById = async(req,res)=>{
    try {
        const productId = req.params.productId;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if(!deletedProduct){
            return res.status(404).json({error:"no product found"})
        }
    } catch (error) {
         console.error(error)
        res.status(500).json({error:"internal sever error"})
    }
}

module.exports ={ addProduct:[upload.single('image'),addProduct],getProductByFirm,deleteProductById};