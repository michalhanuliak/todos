import React, {useState} from "react"
import BEMHelper from "react-bem-helper"
import {useDispatch} from "react-redux"

import {updateTask, deleteTask, changeTaskStatus} from "../actions/tasks"
import "./Task.scss"

var classes = new BEMHelper({
    name: 'task'
})

const Task = (props) => {
    const dispatch = useDispatch()
    const { taskInfo: {id, text, completed} } = props

    const [isEditable, setEditable] = useState(false)
    const [newText, setNewText] = useState(text)

    const handleKeyDown = e => {
        const {key} = e

        const removeFocus = () => {
            setEditable(false)
            e.target.blur();
            e.target.classList.remove("task__description--clicked");
        }

        if (key === "Enter") {
            dispatch(updateTask(newText, id))
            removeFocus()
        }

        if (key === "Escape"){
            setNewText(text)
            removeFocus()
        }

    }

    const handleDoubleClick = e => {
        setEditable(true)
        e.target.classList.add("task__description--clicked");
        e.target.setSelectionRange(e.target.value.length, e.target.value.length);
    }

    return (
        <form 
            onSubmit={e => e.preventDefault()}
            {...classes()} >

            <label className="b-contain">

            <input 
                {...classes("status")}
                type="checkbox" 
                name="complete" 
                value={completed} 
                checked={completed} 
                onChange={() => dispatch(changeTaskStatus(id))} />
                <div className="b-input"></div>
            </label>

            <input 
                {...classes('id')}
                type="text" 
                name="id" 
                value={id} 
                hidden 
                readOnly />

            <input 
                {...classes('description')}
                type="text" 
                name="description" 
                value={newText} 
                onDoubleClick={handleDoubleClick}
                onInput={ e => isEditable ? setNewText( e.target.value) : ""}
                onKeyDown={handleKeyDown}
                />

            <button 
                type="button"
                name="remove-task"
                onClick={() => dispatch(deleteTask(id))} {...classes("remove")}>
                <i className="far fa-trash-alt"></i>
            </button>

        </form>
    )
}

export default Task