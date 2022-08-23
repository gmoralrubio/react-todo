import { FaTrashAlt } from 'react-icons/fa'
import { ACTIONS } from './../App'
import { ToggleBtn } from './ToggleBtn'

export default function Todo({ todo, dispatch }) {
  const handleToggle = () => {
    dispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: {
        id: todo.id,
      },
    })
  }

  const handleDelete = () => {
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: {
        id: todo.id,
      },
    })
  }

  return (
    <div
      className={`max rounded-md p-4 shadow-sm
      ${todo.complete ? 'bg-green-50' : 'bg-red-50'}`}
    >
      <h2 className="mb-4 font-bold text-black">{todo.name}</h2>
      <div className="flex items-center justify-end gap-4 border-t border-gray-400 pt-4">
        <ToggleBtn onToggle={handleToggle} />
        <FaTrashAlt
          onClick={handleDelete}
          style={{ color: '#ff0000', cursor: 'pointer' }}
          size={22}
        />
      </div>
    </div>
  )
}
