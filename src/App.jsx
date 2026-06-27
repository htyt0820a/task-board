import { useState, useEffect } from 'react'
import './App.css'

const STORAGE_KEY = 'task-board-tasks'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
    } catch {
      return []
    }
  })
  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    const text = input.trim()
    if (!text) return
    setTasks(prev => [...prev, { id: Date.now(), text, done: false }])
    setInput('')
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="board">
      <h1 className="title">タスクボード</h1>

      <div className="input-row">
        <input
          className="task-input"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="タスクを入力して Enter または追加ボタンを押してください"
        />
        <button className="add-btn" onClick={addTask}>追加</button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty">タスクがありません</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={`task-item${task.done ? ' done' : ''}`}>
              <input
                className="checkbox"
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span className="task-text">{task.text}</span>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>削除</button>
            </li>
          ))}
        </ul>
      )}

      <p className="summary">
        {tasks.filter(t => t.done).length} / {tasks.length} 件完了
      </p>
    </div>
  )
}
