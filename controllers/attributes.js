const express=require('express');
const router=express.Router();
const Attributes=require('../models/attribute');
const Attribute_values=require('../models/attribute_value');
const Product_attributes=require('../models/product_attribute');


/** Get All Attributes */
router.get('/',(req,res)=>
{
   
    Attributes.findAll().
then(recs=>{
    res.status(200).send(recs);

}).catch(err=>{
    res.status(400).send(new Error(err));
})
})

/** Get Attribute List by attribute_id  */

router.get('/:attribute_id ',(req,res)=>{
    
let attribute_id =req.params.attribute_id ;
if(attribute_id ==null)
{
    res.status(400).send('attribute_id  is required');
}
Attributes.findByPk(attribute_id ).then(fillteredData=>{
    res.status(200).send(fillteredData);
}).catch(err=>{
   
    res.status(404).send('Attributes not found');
});


});

/** Get Vlaues Attribute from Attribute */
router.get('/values/:attribute_id ',(req,res)=>{
    
    let attribute_id =req.params.attribute_id ;
    if(attribute_id ==null)
    {
        res.status(400).send('attribute_id  is required');
    }
    Attribute_values.findAll({
      
        where: {
            attribute_id: attribute_id 
        }
      }).then(fillteredData=>{

        res.status(200).send(fillteredData);
      
    }).catch(err=>{
       
        res.status(404).send('Attribute Values not found');
    });
    
    
    });

    /** Get All Attributes with Product ID */
    router.get('/inProducts/:product_id ',(req,res)=>{
    
        let product_id =req.params.product_id ;
        if(product_id ==null)
        {
            res.status(400).send('product_id  is required');
        }
        Product_attributes.findAll({
      
            where: {
                product_id: product_id 
            }
          }).then(fillteredData=>
            {
            Attributes.findByPk(fillteredData.attribute_value_id)
            .then(fillredCategory=>{
                res.status(200).send(fillredCategory);
            })
            .catch(err=>{
                res.status(404).send('Attributes not found'); 
            })

            

            res.status(200).send(fillteredData);
          
        }).catch(err=>{
           
            res.status(404).send('Product Value not found');
        });
        
        
        });
module.exports=router;