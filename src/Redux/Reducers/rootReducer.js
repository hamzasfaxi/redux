import { ADDTASK, TOGGLECOMPLETE, EDDITTASK } from "../Action/action";



const initialState ={
    task : [
        {
             id: 1,
             text:'watch Game of thrones',
             isDone : false
        },
        {
            id : 2,
            text: 'play formula 1 league',
            isDone : false
        },
        {
            id : 3,
            text:'learn react JS',
            isDone : false
        }
    ]
}




const rootReducer = (state = initialState , action) => {
   switch(action.type)
   {
       case ADDTASK : 
       return{
           ...state, task :[...state.task, action.payload]

       }

       case EDDITTASK : 
       return{
           ...state, task : state.task.map(el=>el.id===action.payload.id? action.payload : el)

       }

       case TOGGLECOMPLETE:
           return{
             ...state , task : state.task.map(el=>el.id===action.payload?{...el, isDone : !el.isDone}: el)

           }


    default : 
    return state
   }
}

export default rootReducer
