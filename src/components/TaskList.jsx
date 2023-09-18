import DataTable from 'react-data-table-component';
export const TaskList = ({task}) =>{
    console.log(task);

    const columnas =[
        {
            name: 'ID',
            selector: 'id',
            sortable:true
        },
        {
            name: 'TAREA',
            selector: 'text',
            sortable:true
        },
        {
            name: 'COMPLETADO',
            selector: 'completed',
            sortable:true,
            center:true
        },
        {
            name: 'ESTADO',
            selector: 'state',
            sortable:true
        }
    ];

    const paginacionOpciones={
        rowsPerPageText:'Filas por pagina',
        rangeSeparatorText: 'de',
        selectAllRowsItem:true,
        selectAllRowsItemText:'Todos'
    }


    return(            
        <div className='table-responsive'>
            <DataTable 
            columns={columnas}
            data={task}
            title="Lista de tareas"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight='600px'
            />   
        </div>       
    )

}