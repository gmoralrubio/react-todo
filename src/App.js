import { v4 as uuidv4 } from 'uuid'
import { useReducer, useRef, useState } from 'react'

import Todo from './components/Todo'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
}

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)] // obtenemos el name del payload

    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })

    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)

    default:
      return todos
  }
}

const newTodo = name => {
  return {
    id: uuidv4(),
    name,
    complete: false,
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')
  const [isValid, setIsValid] = useState(true)
  const inputRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()

    if (name.trim().length !== 0) {
      setIsValid(true)
      dispatch({
        type: ACTIONS.ADD_TODO,
        // le pasamos el name a reducer() via payload
        payload: {
          name: name,
        },
      })
      setName('')
    } else {
      setIsValid(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Todos</h1>
      </div>

      <div className="mb-10 rounded-xl bg-orange-100 p-4">
        <form onSubmit={handleSubmit}>
          <div className="relative flex flex-row items-center gap-6">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              ref={inputRef}
              className={`w-full rounded-md
              ${isValid ? '' : 'border-0 ring-2 ring-rose-300'}`}
            />
            <button
              type="submit"
              className="flex w-fit items-center justify-center rounded-full bg-rose-700 py-2 px-6 font-bold text-white"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      {todos.length !== 0 && (
        <div className="grid grid-cols-2 gap-4 rounded-xl bg-blue-100 p-4">
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              dispatch={dispatch}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
