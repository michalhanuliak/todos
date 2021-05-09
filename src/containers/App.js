import React from "react"

import TasksFilter from "../components/TasksFilter"
import NewTask from "../components/NewTask"
import TasksActions from "../components/TasksActions"
import TasksList from "../components/TasksList"
import "./App.scss"

const App = () => {
    return (
        <main className="toDoList">
            <h1 className="toDoList__title">
                To Do List
            </h1>
            <NewTask />
            <TasksList />
            <TasksActions />
            <TasksFilter />
        </main>
    )
}

export default App