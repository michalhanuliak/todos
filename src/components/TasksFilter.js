import React from "react"
import {useDispatch} from "react-redux"
import BEMHelper from "react-bem-helper"

import {setFilterStatus} from "../actions/filter"
import "./TasksFilter.scss"

var classes = new BEMHelper({
    name: "filter"
})

const TasksFilter = () => {
    const dispatch = useDispatch()
    
    return (
        <div 
            {...classes()} 
            onChange={(e) => dispatch(setFilterStatus(e.target.value))}
        >
            <input {...classes("input")} id="all" type="radio" name="taskFilter" value="all" />
            <label {...classes("label")} htmlFor="all"> All </label>

            <input {...classes("input")} id="completed" type="radio" name="taskFilter" value="completed" />
            <label {...classes("label")} htmlFor="completed"> Completed </label>

            <input {...classes("input")} id="uncompleted" type="radio" name="taskFilter" value="uncompleted" />
            <label {...classes("label")} htmlFor="uncompleted"> Uncompleted </label>
        </div>
    )
}

export default TasksFilter