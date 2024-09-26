console.log("Hola")

const taskInput = document.querySelector(".task__input")
const taskAdd = document.querySelector(".task__add")
const tasklist = document.querySelector(".task__list")


taskAdd.addEventListener("click", function(event){
    //se va ejecutar cuand hagamos clic en el boton "añadir tareas"
    /* Se puede crear elementos html*/
    //const button = document.createElement("button")
    //button.textContent = "HOLA, Soy un boton"
    //document.body.appendChild(button)
    if(taskInput.value.trim() === "") // trim = funcion que quita los espacios lado izq y der
    {
        alert("El campo requerido, ingresa una tarea")
        return
    }
    const li = document.createElement("li")
    
    let checkbox = document.createElement("input") // para crear un elemento den html
    checkbox.setAttribute("type","checkbox") // agregar un atributo
    li.appendChild(checkbox) // agregar nuevos elementos de html pero en la parte de abajo

    let span = document.createElement("span")
    span.textContent = taskInput.value
    li.appendChild(span)

    const button = document.createElement("button")
    button.textContent = "Borrar"
    li.appendChild(button)


    //li.textContent = taskInput.value
    
    tasklist.appendChild(li)

    taskInput.value = ""

})

tasklist.addEventListener("click", function(event){
    //console.log("click tasklist")
    //console.log(event.target) // click en el boton

    const target = event.target

    if(target.tagName === "BUTTON"){// SIEMPRE SERÁ EN MAYUSCULA
        target.parentElement.remove()

    } 

    if(target.tagName === "INPUT" && target.type ==="checkbox"){// SIEMPRE SERÁ EN MAYUSCULA
        //target.parentElement.style = "color: red;"
        console.log(target.classList.toggle("checked"))
    } 
})