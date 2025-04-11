import React, { useState } from "react";

const Tasks=()=>{

    const [inputValue, setInputValue] = useState("hola")

    const [task, setTask]= useState ([])

    const addTask=()=>{
        const copyArray =[...task]
        copyArray.push(inputValue)
        setTask(copyArray)
        setInputValue("")
    }


    return (

        <>
            <h1>TodoList</h1>
            <input type="text" placeholder="Add a task" onChange={e=> setInputValue(e.target.value)} value={inputValue}/>
            <button onClick={addTask} >Add</button>
            <ul>
                {task.map((textTask, index)=>(
                    <li key={index}>{textTask}</li>
                ))}

            </ul>

        </>

    )

}

export default Tasks 