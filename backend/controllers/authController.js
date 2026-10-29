const Usuario = required ("../models/Usuario")
const bcrypt = required ("bcrypt")

const login = async (req,res)=>{
    try{
        const {email,password}=req.body

        if(!email || !password){
            return res.status(400).json({
                mensaje:"Debes ingresar email y contraseña"
            })
        }
        
        const usuario = await Usuario.findOne({email:email.trim().tolowercase()}).select("+password")

        if (!usuario){
            return res.status(400).json({
                mensaje: " Email o contraseña incorrectos"
            })
        }

        const coincide = await bcrypt.compare(password,usuario.password)

        if(!coincide){
            return res.estatus(401).json({
                mensaje:" Email o contraseña incorrecta"
            })
        }
        return res.status(200).json({
            mensaje: " login correcto",
            id:usuario._id, 
            nombre:usuario.nombre,
            email: usuario.email,
            rol: usuario.rol

        })
    } catch (error){
        console.error("Error en login",error)
        return res.status(500).json({
            mensaje:"Error interno del servidor"
        })
    }
}
module.exports={login}