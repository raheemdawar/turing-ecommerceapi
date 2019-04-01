const express=require('express');
const router=express.Router();
const Categories=require('../models/category');
const Product_category=require('../models/product_category');

/** Get All Categories */
router.get('/',(req,res)=>
{
   
    Categories.findAll().
then(recs=>{
    res.status(200).send(recs);

}).catch(err=>{
    res.status(400).send(new Error(err));
})
});


/** Get Category by Category id */
router.get('/:category_id ',(req,res)=>{
    
let category_id =req.params.category_id ;
if(category_id ==null)
{
    res.status(400).send('category_id  is required');
}
Categories.findByPk(category_id ).then(fillteredData=>{
    res.status(200).send(fillteredData);
}).catch(err=>{
   
    res.status(404).send('Catogry not found');
});


});


/** Get Categories of a Product */
router.get('/inProduct/:product_id ',(req,res)=>{
    
    let product_id =req.params.product_id ;
    if(product_id ==null)
    {
        res.status(400).send('product_id  is required');
    }
    Product_category.findAll({
        limit: 1,
        where: {
            product_id: product_id
        }
      }).then(fillteredData=>{

        Categories.findByPk(fillteredData.category_id)
        .then(fillredCategory=>{
            res.status(200).send(fillredCategory);
        })
        .catch(err=>{
            res.status(404).send('Category not found'); 
        })
      
    }).catch(err=>{
       
        res.status(404).send('Product not found');
    });
    
    
    });


    
/** Get Categories of a Department */
    router.get('/inDepartment/:department_id ',(req,res)=>{
    
        let department_id =req.params.department_id ;
        if(department_id ==null)
        {
            res.status(400).send('department_id  is required');
        }
        Categories.findAll({
      
            where: {
                department_id: department_id 
            }
          }).then(fillteredData=>{
    
            res.status(200).send(fillteredData);
          
        }).catch(err=>{
           
            res.status(404).send('Category not found');
        });
        
        
        });
module.exports=router;