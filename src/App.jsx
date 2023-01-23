import { useState, useEffect } from 'react'
import Home from './Components/Home'
import Header from './Components/Header'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
    const [loginData, setLoginData] = useState({
        id: null, 
        username: null 
    })
    useEffect(()=> {
        const request = async() => {
            let req = await fetch ('jhj')
            let res = await req.json()
            console.log(res)
            if (req.ok){
                setLoginData({id: res.id, username: res.username})
            }
        }
        request()
    }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Header loginData={loginData} setLoginData={setLoginData}/>
        <Routes>
          <Route path={'/'} element={<Home loginData={loginData} setLoginData={setLoginData}/>}/>
          <Route path={'/login'} element={<Login loginData={loginData} setLoginData={setLoginData}/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
