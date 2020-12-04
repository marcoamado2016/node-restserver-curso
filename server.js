const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const config=require('./config/config');
app.use(bodyParser.urlencoded({extended:false}))//Son midelwors
app.get('/',(req,res)=>{
    res.send('Hola mundo')
})

app.get('/usuario/:apellido',(req,res)=>{
     
    let nombre=req.headers.nombre;
    let apellido=req.params.apellido
  
    res.type('json');
    res.status(200);
    res.send({
        "nombre":nombre,
        "apellido":apellido,
        "sexo":"Masculino"

    }).end();

});

app.post('/usuario',(req,res)=>{
    res.json({
        "nombre":"Marco",
        "apellido":"Amado"
    });
  
  });
  app.post('/usuarios',(req,res)=>{
    let body=req.body
    res.json({
            body
    });
  console.log(req.body.correo);
  });
  app.put('/usuario/:id',(req,res)=>{
      let id=req.params.id
    res.json({id});
  
  });  
  app.delete('/usuario',(req,res)=>{
    res.json('Usuario delete');
  
  }); 
app.listen(process.env.PORT,()=>{
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
})

//npm install body-parser
//var bodyParser=  require('body-parser')