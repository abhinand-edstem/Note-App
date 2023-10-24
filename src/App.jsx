import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import FullView from './Components/FullView'
import Notes from './Components/Notes'

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/view" element={<FullView />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
