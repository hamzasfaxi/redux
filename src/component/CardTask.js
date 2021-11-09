import React from 'react'
import { connect } from "react-redux";
import { togglecomplete } from "../Redux/Constants/action-type";

import EditTask from './EditTask'




const CardTask = ({ task, togglecomplete }) => {
  return (
    <p>
      <h3>{task.isDone? <span style={{color: "green"}}>{task.text}</span> : <span style={{color: "red"}}>{task.text}</span> }</h3> <EditTask task={task} />
       <button onClick={()=>togglecomplete(task.id)} >{task.isDone ? "Is Done" : "Not Done"}</button>
    </p>
  );
};

export default connect(null, {togglecomplete})(CardTask);
