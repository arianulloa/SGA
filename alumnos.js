//const alumnos=[
//{id:1,
 //nombre:"ana"
//},
//{id:2,
 //nombre:"jose"
//}
//]
//function obteneralumnos(){
   // return new Promise ((resolve)=>{
       // setTimeout(() => {
           // resolve(alumnos)
        //}, 2000);
    //})
//}

//async function iniciar() {
   // const datos = await obteneralumnos
    //console.log(datos) 
//}
//iniciar()

console.log(typeof alumnos)

localStorage.setItem("alumnos",JSON.stringify(alumnos))
const datos= localStorage.getItem("alumnos")
console.log(typeof datos)
console.log(datos)
const alumnosrecuperados= JSON.parse(datos)
console.log(typeof alumnosrecuperados)
console.table(alumnosrecuperados)

const docentes=[{
    id:1,
    nombre: "carlos perez",
    materia: "Programacion IV"
},
{
  id:2,
  nombre:"rosa gonzalez",
  materia:"Base de datos"
},
{
    id:3,
    nombre:"maria lopez",
    materia:"laboratorio"
}]
localStorage.setItem("Docentes",JSON.stringify(docentes))

const datos= localStorage.getItem("docentes")
const docentesrecuperados=JSON.parse("datos")
console.log(docentesrecuperados)
console.table(docentesrecuperados)

for(const docente of docentesrecuperados){
    console.log(docentes.nombre,"-",docentes.materia)
}
const alumnos=localStorage.getItem("alumnos")
const alumnosrecu=JSON.parse(alumnos)
console.log (alumnosrecu)

for(const al of alumnosrecu){
    console.log(al.id,"_",al.name,"-",al.email)
}
const Materias=[{
    id:1,
    nombre:"Programacion IV"
},
{
    id:2,
    nombre:"Base de datos II"

}]
localStorage.setItem("materias",JSON,stringify(Materias))
materiasrecu.push({"id":2,"nombre":"Matematica"})
for (let of materiasrecu){
    console.log(let.id,"-",let.nombre)
}

const formulario= document.querySelector("#formAulmo")
formulario.addEventListener("submit",function(event){
    event.preventDefault();
   const nombre=document.querySelector("#nombre").value
   const carrera=document.querySelector("#carrera").value
   const correo=document.querySelector("#correo").value
   const alumnos={
    id: Date.now(),
    nombre: nombre,
    carrera: carrera,
    correo: correo
   }
})

function obtenerAlumnos(){
    const datos=localStorage.getItem("alumnos")
    if (datos){
        return JSON.parse(datos)
    }
    return
}

const listaAlumnos=document.querySelector("#listaAlumnos")
function mostraralumnos(alumnos){
    listaAlumnos.innerHTML=""
    for (const alumno of alumnos){
        listaAlumnos.innerHTML+=`<li>
        ${alumno.nombre}-
        ${alumno.carrera}-
        ${alumno.correo}</li>`;
    }
    const alumnos = obtenerAlumnos()
    alumnos.push(alumnos)
    localStorage.setItem("alumnos",JSON.stringify(alumnos))
    mostraralumnos(alumnos)
    formulario.request()
    
}
