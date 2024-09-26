const taskInput = document.querySelector(".task__input")
const taskClear = document.querySelector(".task__clear")
const taskList = document.querySelector(".task_list")

let tasks =[
    {
        title: "Estudiar JavaScript",
        completed: true
    },
    {
        title: "Salir al receso a las 9:00 p.m.",
        completed: false
    },
    {
        title: "Realizar el reto del fin de semana",
        completed: false
    }

]


taskInput.addEventListener("keydown", function(event){

    const value = event.target.value

    if(event.key === "Enter"){
        console.log("nueva tarea", value)

        tasks.push({
            title: value,
            completed: false
        })

        console.log(tasks)
        // event.target.value =" " // es lo miso que el de abajo
        taskInput.value =""
    }

})