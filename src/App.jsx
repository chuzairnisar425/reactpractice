import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setsetshowBtn] = useState(true);
  const [todo, settodo] = useState([
    {
      title: 'Uzair',
      desc: 'i am a software engineer'
    },
    {
      title: 'Daniyal',
      desc: 'i am a Flutter engineer'
    },
    {
      title: 'Ajab',
      desc: 'i am a cloud engineer'
    },
  ]);
  const Todo = ({ todo }) => {
    return (
      <>
      <div className='border border-1 m-4'>

        <div className="todo">{"hey " + todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </div>
      </>
    )
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {todo.map(todo => {
        
        return (
          <>
          <div key={todo.title} className='border border-1 m-4'>
    
            <div className="todo">{"hey " + todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
          </>
        )
      
})}
      <div className="card">
        {/* {showBtn && <button>i will be shown when condition is true </button>} */}
        {showBtn ? <button>Button is show</button> : <button>Button is not show</button>}
        <br />
        <button onClick={() => setsetshowBtn(!showBtn)}>
          Todo is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
