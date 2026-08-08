//console.log("inicio")
//setTimeout(() => {
    //console.log ("buscando alumnos...");
//},3000)

//console.log("fin")

//function saludar(){
//console.log("hola")
//}

//function ejecutar (funcion){
    //funcion()
//}

//ejecutar(saludar)

//setTimeout(() => {
    //console.log("Buscando docentes...")
//}, 2000);

//setTimeout(() => {
    //console.log("Buscando Materias")
//}, 4000);

//Promises y Async

//function obteneralumnos(){
//setTimeout(() => {
    //return["Ana","juan","rosa"]
//}, 3000);
//} 

//obteneralumnos()

//function obtenerAlumnos (){
   // return new Promise ((resolve)=>{
       // setTimeout(() => {
          //  resolve(["Ana","juan","pedro"])
           // console.log("Ya tengo el arreglo")
       // }, 3000);
   // })
//}

//obtenerAlumnos().then(alumnos=>{
    //console.log(alumnos)
//})

//async function iniciar() {
    //const alumnos=await obtenerAlumnos()
   //console.log(alumnos)
//}

//iniciar()

//login(usuario).then((usuario)=>{
   // return obtenercursos(usuario.id)
//})

//.then ((cursos)=>{
   // return obtenerNotas(cursos)
//})

//.then((Notas)=>{
//console.log(Notas)
//})

//async function mostrarnotas() {
    //const usuario =await login (usuario)
    //const cursos = await obtenercursos(usuario.id)
   // const notas = await obtenernotas(cursos)
    //console.log(notas)
    //.catch((error)=>{
        //console.log(error)
    //})
//}

//function obtenerClima(){
    //return new promise((resolve)=>{
        //setTimeout(() => {
            //resolve("22º-soleado")
        //},2000);
    //})
//}

//con .then

//obtenerClima().then ((clima)=>{
    //console.log(clima)
//});

//async function mostrarClima(){
    //console.log(clima)
//}
//mostrarClima()

//function consultarsaldo(){
    //return new Promise((resolve)=>{
        //setTimeout(() => {
           // resolve(125000)
       // }, 3000);
   //})
//}

//async function mostrarsaldo() {
   // const saldo= await consultarsaldo()
    //console.log("su saldo es:$",$(saldo))
    
//}
//mostrarsaldo()

//async function iniciarsesion() {
   // return new Promise((resolve)=>{
       // setTimeout(() => {
           // resolve("Bienvenido,Irina")
        //}, 2000);
    //})
    
//}

//async function mostrarsesion() {
    //const sesion =await iniciarsesion()
    //console.log(sesion)
    
//}
//mostrarsesion()

//function obtenerusuario(){
    //return new promise ((resolve)=>{
        //setTimeout(() => {
           // resolve({
                //id:1,
                //nombre:"marina",
               // edad:25

            //})
        //}, 3000);
    //})
//}

//async function mostrarusuario() {
    //console.log("consultando usuario...")
   // const usuario=await obtenerusuario()
    //console.log(usuario)
    
//}

//mostrarusuario()