import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../components/AddTodo";
import { AddTodo } from "./AddTodo"
import { Row } from "./Row"

const sampleData = [
    {
        id: "0",
        title: "Task 1",
        task: "Do task 1",
        isCompleted: false,
    },
    {
        id: "1",
        title: "Task 2",
        task: "Do task 2",
        isCompleted: false,
    },
    {
        id: "2",
        title: "Task 2",
        task: "Do task 3",
        isCompleted: false,
    },
]

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>(sampleData);
    const [task, setTask] = useState('');
    const todosLength = todos.length;
    const isTodos = todos.length > 0;
    const remainTodos = todos.filter((todo) => !todo.isCompleted).length

    const handleCheckTodo = (id: String) => {
        const updateTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                }
            }
            return todo
        })
        setTodos(updateTodos)
    }

    const handleDeleteTodo = (id: string) => {
        const updateTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updateTodos)
    }

    const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo]
        setTodos(updatedTodos)
        setTask("")
    }

    const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement
        setTask(value)
    }

    const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault()

        const todo = {
            id: uuidv4(),
            task: task,
            isCompleted: false,
        }
        task && handleAddTodo(todo)
    }


    return (
        <section className="w-10/12 lg:w-1/2 ma-w-2xl flex flex-col items-center">
            <AddTodo
                handleChange={handleChange}
                handleSubmitTodo={handleSubmitTodo}
                task={task}
            />
            <div className="h-10">
                {todos.map((todo) =>
                    <Row
                        key={todo.id}
                        todo={todo}
                        handleDeleteTodo={handleDeleteTodo}
                        handleCheckTodo={handleCheckTodo}
                    />)}

                {!isTodos && (
                    <p className="mb-5 mt-3 text-xl text-orange-600 uppercase">
                        Please add a task!
                    </p>
                )}
                {isTodos && (
                    <p className="my-3">
                        [{remainTodos} of {todosLength}] todos remaining
                    </p>
                )}
            </div>
        </section>
    )
}

export default Todos
