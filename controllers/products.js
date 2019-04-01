const express=require('express');
const router=express.Router();
const Products=require('../models/product');
const Product_category=require('../models/product_category');


/** Get All Products */
router.get('/',(req,res)=>
{
   
    Products.findAll().
then(recs=>{
    res.status(200).send(recs);

}).catch(err=>{
    res.status(400).send(new Error(err));
})
});

/** Get Product  by product_id */
router.get('/:product_id ',(req,res)=>{
    
let product_id =req.params.product_id ;
if(product_id ==null)
{
    res.status(400).send('product_id  is required');
}
Products.findByPk(product_id ).then(fillteredData=>{
    res.status(200).send(fillteredData);
}).catch(err=>{
   
    res.status(404).send('Product not found');
});


});


/** Get a list of Products of Categories */
router.get('/inCategory/:category_id ',(req,res)=>{
    
    let category_id =req.params.category_id ;
    if(category_id ==null)
    {
        res.status(400).send('category_id  is required');
    }

    Product_category.findAll({
        include: [{
            model:Products, 
            attributes: ['product_id', 'name', 'description', 'price', 'discounted_price', 'thumbnail'], 
            through: { where: { category_id: category_id  } }
        }]
    }).then(fillteredData=>{

        res.status(200).send(fillteredData);
      
    }).catch(err=>{
       
        res.status(404).send('Products not found');
    });
    
    
    });

module.exports=router;