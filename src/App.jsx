import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Route ,Routes} from 'react-router-dom'
import Dashboard from './pages/dasboard/dasboard'
import Layout from './conponents/Layout/layout'
import Calendar from './pages/calendar/calender'
import BoardPage from './pages/Board/BoardPage'
import DataGrid from './pages/DataGrid/datagrid'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="#dashboard">
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path="calendar" element={<Calendar/>}/>
          <Route path="board" element={<BoardPage/>}/>
          <Route path="users" element={<DataGrid/>}/>
        </Route>
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
