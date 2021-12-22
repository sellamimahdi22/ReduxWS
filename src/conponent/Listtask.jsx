import React from 'react'
import { useSelector } from 'react-redux';
import Addtask from './Addtask';
import Task from './Task';
const Listtask = () => {
    const { tasks,filter } = useSelector(state => state)
    return (
        <div>
            <h2>TO DO APP</h2>
            <Addtask />
            {
            !filter?
            tasks.map((el, i) =>
                <Task task={el} key={i} />
                )
            : tasks.filter(task=>!task.isDone).map((el, i) =>
            <Task task={el} key={i} />
            )}

        </div>
    )
}
export default Listtask;