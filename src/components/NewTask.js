import React, {useState} from "react"
import BEMHelper from "react-bem-helper"
import {useDispatch} from "react-redux"

import {createTask, startFetching} from "../actions/tasks"
import "./NewTask.scss"

var classes = new BEMHelper({
    name: 'new-task'
})

const NewTask = () => {
    const dispatch = useDispatch()
    const [newTaskName, setNewTaskName] = useState("")

    const handleChange = (e) => {
        setNewTaskName(e.target.value)
    }

    return (
        <form 
            {...classes()}
            onSubmit={e => {
                e.preventDefault()
                dispatch(startFetching())
                dispatch(createTask(newTaskName))
                setNewTaskName("")
             }}>

            <input 
                 {...classes("input")}
                name="newTaskName" 
                value={newTaskName} 
                onChange={handleChange}/>

            <button 
                {...classes("button")}
                name="add-task">
                <i className="fas fa-plus"></i>
            </button>
            
        </form>
    )
}

export default NewTask