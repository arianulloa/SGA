const Materia = require("../models/Materia") 

async function obtenerMaterias(req, res) { 
    try{
    const materias = await Materia.find()
    res.json(materias) 
    }catch(error){
        res.status(500).json({mensaje: "El servidor no pudo completar la solicitud"})
    }
}

async function obtenerMateria(req, res) {

    const materia = await Materia.findOne({ 
        codigo: req.params.codigo
    }) 
    if (!materia) { 
        return res.status(404).json({
            mensaje: "Materia no encontrada"
        })
    }
    res.json(materia)
   
}

async function crearMateria(req, res) {
    const { codigo, nombre, descripcion, cargahoraria, estado } = req.body 
    const estadoMinus =estado ? estado.trim().toLowerCase(): ""
    const estadoNuevo = estadoMinus === "activa" ? "Activa": estadoMinus === "inactiva" ? "Inactiva" : null
    
    if(!estadoNuevo){
        return res.status(400).json({mensaje: "El estado debe ser Activa o Inactiva"})
    }
    if (!codigo || !nombre || cargahoraria === undefined || cargahoraria === "" || !estado) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        })
    }
    if (typeof nombre !== "string") {
        return res.status(400).json({
            mensaje: "El nombre debe ser un texto"
        })
    }
    if (typeof codigo !== "string") {
        return res.status(400).json({
            mensaje: "El codigo debe ser un texto"
        })
    }
    if (typeof cargahoraria !== "number" || Number.isNaN(cargahoraria) || cargahoraria <= 0 || !Number.isInteger(cargahoraria)) {
        return res.status(400).json({
            mensaje: "La carga horaria debe ser un numero entero mayor a 0"
        })
    }
    
    const existe = await Materia.findOne({ 
        codigo
    })
    if (existe) { 
        return res.status(400).json({
            mensaje: "El codigo ya existe"
        })
    }

    const nuevaMateria = await Materia.create({ 
        codigo,
        nombre,
        descripcion,
        cargahoraria,
        estado: estadoNuevo
    })
    res.status(201).json(nuevaMateria) 
}

async function actualizarMateria(req, res) {
    const { nombre, descripcion, cargahoraria, estado } = req.body
    const estadoMinus = estado ? estado.trim().toLowerCase() : "";
    const estadoNuevo = estadoMinus === "activa" ? "Activa" : estadoMinus === "inactiva" ? "Inactiva" : null
    
    if(!estadoNuevo){
        return res.status(400).json({mensaje: "El estado debe ser Activa o Inactiva"})
    }
    if (typeof cargahoraria !== "number" || Number.isNaN(cargahoraria) || cargahoraria <= 0 || !Number.isInteger(cargahoraria)) {
        return res.status(400).json({
            mensaje: "La carga horaria debe ser un numero entero mayor a 0"
        })
    }
   

    
    const materia = await Materia.findOneAndUpdate( 
        { codigo: req.params.codigo }, 
        { nombre, descripcion, cargahoraria, estado: estadoNuevo }, 
        { returnDocument: "after" } 
    )
   
    if (!materia) {
        return res.status(404).json({
            mensaje: "La materia no fue encontrada"
        })
    }

    res.json(materia)
}

 async function eliminarMateria(req, res) {
    const materia = await Materia.findOneAndDelete( 
        { codigo: req.params.codigo} 
    )
    if (!materia) {
        return res.status(404).json({
            mensaje: "Materia no encontrada"
        })
    }

    res.json({ mensaje: "Materia eliminada correctamente" })
 }


 module.exports = {
    obtenerMaterias,
    obtenerMateria,
    crearMateria,
    actualizarMateria,
    eliminarMateria
 }