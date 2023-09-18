import { TaskList } from "./components/TaskList"
export const Principal = () =>{
    const task =[
        {id:1, text:"Tender la cama", completed:"SI", state:"Terminado"},        
        {id:2, text:"Lavarse los dientes", completed:"SI", state:"Terminado"},
        {id:3, text:"Ducharse", completed:"SI", state:"Terminado"},
        {id:4, text:"Tomar desayuno", completed:"SI", state:"Terminado"},
        {id:5, text:"Ver noticias", completed:"SI", state:"Terminado"},
        {id:6, text:"Daily en el trabajo", completed:"SI", state:"Terminado"},
        {id:7, text:"Atender ticked 01", completed:"NO", state:"En Proceso"},
        {id:8, text:"Atender ticked 02", completed:"NO", state:"En Proceso"},
        {id:9, text:"Almorzar", completed:"NO", state:"No iniciado"},
        {id:10, text:"Lavarse los dientes", completed:"NO", state:"No iniciado"},
        {id:11, text:"Atender ticked 03", completed:"NO", state:"No iniciado"},
        {id:12, text:"Daily del fin del dia", completed:"NO", state:"No iniciado"},
        {id:13, text:"Cenar", completed:"NO", state:"No iniciado"},
        {id:14, text:"Lavarse los dientes", completed:"NO", state:"No iniciado"},
        {id:15, text:"Asistir a clases", completed:"NO", state:"No iniciado"},
        {id:16, text:"Ducharse", completed:"NO", state:"No iniciado"},
        {id:17, text:"Hacer dormir al pequeño", completed:"NO", state:"No iniciado"},
        {id:18, text:"Revisar pendientes", completed:"NO", state:"No iniciado"},
        {id:19, text:"Dormir", completed:"NO", state:"No iniciado"}
    ];



    return(        
            <TaskList task ={task}/>        
    )

}