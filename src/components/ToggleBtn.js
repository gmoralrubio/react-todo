import { useState } from 'react'
import { Switch } from '@headlessui/react'

export function ToggleBtn({ onToggle }) {
  const [isCompleted, setIsCompleted] = useState(false)

  const toggleHandler = () => {
    setIsCompleted(prev => !prev)
    onToggle(isCompleted)
  }

  return (
    <Switch
      checked={isCompleted}
      onChange={toggleHandler}
      className={`${
        isCompleted ? 'bg-sky-500' : 'bg-gray-400'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          isCompleted ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white`}
      />
    </Switch>
  )
}
