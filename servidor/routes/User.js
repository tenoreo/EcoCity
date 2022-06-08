const {Router}=require('express');
//const fetch = require("node-fetch");
const router=Router();
const nodemailer=require('nodemailer');
const admin=require('firebase-admin');

const db=admin.firestore();

router.get('/verificarContrasena',async(req,res)=>{
    const {correo,contrasena}=req.body;
    try {
        const document= await db.collection('User').where('contrasena','==',contrasena).where('correo','==',correo).get();
        return document.empty?res.send({'response':false}):res.send({'response':true});
    } catch (error) {
        return res.send(error.message);
    }
});

router.post('/crearUsuario',async(req,res)=>{
    const {nombre,apellido1,apellido2,telefono,correo,contrasena}=req.body;
    const codigoVerificacion=crearCodigoVerificacion();
    try {
        await db.collection('User').doc().create({
            nombre:nombre,
            apellido1:apellido1,
            apellido2:apellido2,
            telefono:telefono,
            correo:correo,
            contrasena:contrasena,
            codigoVerificacion:codigoVerificacion
        });
        return res.send("Usuario Creado");
    } catch (error) {
        return res.send(error.message);
    }
})

router.put('/cambiarContrasena',async(req,res)=>{
    try {
        
    } catch (error) {
        return res.send(error.message);
    }
})

const crearCodigoVerificacion=()=>{
    let codigo='';
    for(i=0;i<6;i++){
        let verificar=getRandomIntInclusive(0,9);
        codigo+=verificar.toString();
    }
    return codigo;
}

const getRandomIntInclusive=(min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports=router;