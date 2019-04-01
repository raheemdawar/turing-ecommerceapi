const categoriescontroller=require('../controllers/categories');
const departmentscontroller=require('../controllers/departments');
const attrubutescontroller=require('../controllers/attributes');
const productscontroller=require('../controllers/products');
const initendpoints=(app)=>
{
   

    /** App Starting Route */
    app.get('/', (req, res) => {
        res.send('API is Working');
    });

    /** Categories Route */
     app.use('/categories/',categoriescontroller);

    /** Departments Route */
     app.use('/departments/',departmentscontroller);

    /** Attributes Route */
     app.use('/attributes/',attrubutescontroller);

    /** Products Route */
     app.use('/products/',productscontroller);
}
module.exports=initendpoints;