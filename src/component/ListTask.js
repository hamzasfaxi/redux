import React from 'react'
import {useSelector} from "react-redux"
import CardTask from './CardTask'

const ListTask = () => {
 const task = useSelector(state => state.task)
    return (
        <div>{task.map(el=>  <CardTask task={el}/> )
            }
        </div>
    )
}

export default ListTask