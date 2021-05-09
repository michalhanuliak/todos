import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"

import {getTasks} from "../actions/tasks"
import Task from "./Task"
import "./TasksList.scss"

const TasksList = () => {
    const {filterStatus, tasks: {isLoading, tasks}} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTasks())
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    const displayTasks = () => { 
        if (filterStatus === "completed"){
            return tasks.reduce( (result, data) => data.completed ? result.concat(<Task key={data.id} taskInfo={data} />) : result, [] )
        }

        if (filterStatus === "uncompleted") {
            return tasks.reduce( (result, data) => !data.completed ? result.concat(<Task key={data.id} taskInfo={data} />) : result, []  )
        }    

        return tasks.map(data => <Task key={data.id} taskInfo={data} /> )
    }
    
    return (
        <div>
            {isLoading ? <div className="loader">Loading...</div> : displayTasks()}
        </div>
    )
}

export default TasksList