let input= document.querySelector("input");
let boton = document.querySelector(".boton");
let ul = document.querySelector("ul");
let vacia = document.querySelector(".vacia");

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    let tareas=input.value;
    if(tareas!=""){
        let li = document.createElement("li");
    li.appendChild(borrar())
    let p = document.createElement("p");
    p.textContent+=tareas;
    li.appendChild(p);
    ul.appendChild(li);

    input.value=""
    vacia.style.display = "none";
    }
    
})

function borrar(){
    let botonBorrar=document.createElement("button");
    botonBorrar.textContent="X";
    botonBorrar.className="botonBorrar";
    botonBorrar.addEventListener("click", (e)=>{
        e.preventDefault()
        let item = e.target.parentElement;
        ul.remove(item)
    })
    return botonBorrar;
}