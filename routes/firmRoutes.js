
const express = require('express');
const firmController = require('../controllers/firmController'); // keep your original import
const verifyToken = require('../middlewares/verifyToken');       // keep your original import

const router = express.Router();



// your actual route
router.post('/add-firm', verifyToken, firmController.addFirm);
router.get('/uploads/:imageName',(req,res)=>{
  const imageName = req.params.imageName;
  res.headersSent('Content-Type','image/jpg')
  res.sendFile(path.join(__dirname,'..','uploads',imageName));
});


router.delete('/:firmId',firmController.deleteFirmById);

module.exports = router;
