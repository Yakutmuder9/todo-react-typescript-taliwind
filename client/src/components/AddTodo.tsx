import { ChangeEvent, FormEvent } from "react"


export type Todo = {
    id: string
    task: string
    isCompleted: boolean
}

export type TodoProps = {
    todo: Todo
    handleCheckTodo: (id: string) => void
    handleDeleteTodo: (id: string) => void
}

export type AddTodoProps = {
    task: string
    handleSubmitTodo: (e: FormEvent) => void
    handleChange: (e: ChangeEvent) => void
}

export const AddTodo = ({
    handleSubmitTodo,
    task,
    handleChange,
}: AddTodoProps) => (
    <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
        <input
            type="text"
            name="task"
            value={task}
            className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
            onChange={handleChange}
        />
        <button type="submit" arial-label="Add Todo" className="bg-blue-600 text-lime-50 px-3 rounded">
            Add Task
        </button>
    </form>
)