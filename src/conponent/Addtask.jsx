import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, Filter } from '../redux/actions';

const Addtask = () => {
    const {tasks} = useSelector(state => state)
    const compltask = tasks.filter(el=>el.isDone).length;
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handlechange = (e) => setText(e.target.value);
    const handlesubmit = (e) => {
        e.preventDefault();
        const newtask={
            id:Math.random(),
            Action:text,
            isDone:false,
        }
    dispatch(add(newtask))
    setText('')
    }
    
    return (
        <div>
            <h2> Total Tasks {tasks.length}</h2>
            <h2> completed Tasks {compltask}</h2>
            <form onSubmit={handlesubmit} >
                <input type="text" value={text} onChange={handlechange} />
                <button type="submit"> Add</button>
            </form>
            <button onClick={() => dispatch(Filter())}>Filter </button>
        </div>
    )
}

export default Addtask;
