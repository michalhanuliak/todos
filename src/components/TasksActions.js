import React from "react"
import {useSelector, useDispatch} from "react-redux"
import BEMHelper from "react-bem-helper"

import {changeTaskStatus, deleteTask} from "../actions/tasks"
import "./TasksActions.scss"

var classes = new BEMHelper({
    name: "actions"
})

const TasksActions = () => {
    const { filterStatus, tasks: {tasks} } = useSelector(state => state)
    const dispatch = useDispatch()
    
    const completeVisible = () => {
        if (filterStatus !== "completed") {
            tasks.forEach( task => !task.completed ? dispatch(changeTaskStatus(task.id)) : "" )
        }
    }

    const removeCompleted = () => {
        tasks.forEach(task => task.completed ? dispatch(deleteTask(task.id)) : "")
    }

    const completedCount = tasks.filter(task => task.completed === true).length;

    return (
        <div {...classes()}>
            <p {...classes("count")} >{completedCount}</p>

            {
            completedCount > 0 ? 
            <button 
                {...classes("remove-completed")} 
                onClick={removeCompleted}> 
                Remove completed 
            </button> : ""
            }

            <button 
                {...classes("complete-all")}
                onClick={completeVisible}> 
                Complete all 
            </button>
        </div>
    )
}

export default TasksActions