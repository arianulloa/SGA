const Mongoose = requiered ("mongoose")


const usuarioSchema = new Mongoose.Shema({
      nombre:{
        type: String,
        requiered: true,
      },
      email:{
         type: String,
         requiered: true,
         unique: true,
         lowercase: true,
         trim: true,
        },
      password:{
        type: String,
        requiered: true,
        select: false,
      },
      rol:{
        type: String,
        enum:["admin","usuario"],
        default: "usuario",
      }
    },{
        versionKey: false
    })
     
    const Usuario = Mongoose.model("Usuario",usuarioSchema)

    module.exports= Usuario