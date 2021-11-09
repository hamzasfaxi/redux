import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addtask} from '../Redux/Constants/action-type'

const AddTask = ({addtask}) => {
  const [text , setText] = useState("")

  const handleSave =() => {
    const newtask ={
      text : text ,
      id : Math.random(),
      isDone : false
    }
    addtask(newtask)
    setText('')
  }
  return (
    <div>
      <input type="text" placeholder="enter your new task" value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={handleSave}>Add</button>
    </div>
  )
}

export default connect(null , {addtask}) (AddTask)








