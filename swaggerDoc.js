const swaggerUi=require('swagger-ui-express');
const swaggerJsdoc=require('swagger-jsdoc');
const options={
swaggerDefinition:{

   info :{
   version:'1.0.0',
    title:'EloCraft Api',
    description:'Testing swagger',
   },
   basePath:'localhost:3000',

},
apis:['./routes/endpoints.js'],

};
const specs=swaggerJsdoc(options);
const testFunction=(app)=>
{
    app.use('/docs',swaggerUi.serve,swaggerUi.setup(specs));
}
module.exports=testFunction;