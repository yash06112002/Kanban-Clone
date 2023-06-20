import './App.css'
import Sidebar from './components/Main Components/Sidebar'
import Page from './components/Main Components/Page'

function App() {
  return (
    <div className='flex w-screen font-sans divide-x'>
      <Sidebar />
      <Page />
    </div>
  )
}

export default App
