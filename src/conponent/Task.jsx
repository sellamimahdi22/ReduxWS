import React from 'react'
import { useDispatch } from 'react-redux'
import { complete, Del} from '../redux/actions'
import EditTask from './EditTask'

const Task = ({ task ,filter}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <h3 id={task.isDone ? "done" : ""}> {task.Action}</h3>
            <button onClick={() => dispatch(Del(task.id))}>Delete</button>
          <button  onClick={()=> dispatch(complete(task.id) )}>  {" "}
            {task.isDone ? "Undo" : "Complete"}{" "} </button>
            <EditTask oldtask={task}/>

        </div>
    )
}

export default Task
