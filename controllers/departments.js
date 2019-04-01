const express=require('express');
const router=express.Router();
const Departments=require('../models/department');

/** Get All Departmets */
router.get('/',(req,res)=>
{
   
    Departments.findAll().
then(recs=>{
    res.status(200).send(recs);

}).catch(err=>{
    res.status(400).send(new Error(err));
})
});


/** Get Departmet by department id */
router.get('/:department_id',(req,res)=>{
    
let department_id=req.params.department_id;
if(department_id==null)
{
    res.status(400).send('department_id is required');
}
Departments.findByPk(department_id).then(fillteredData=>{
    res.status(200).send(fillteredData);
}).catch(err=>{
   
    res.status(404).send('Department not found');
});


});

module.exports=router;