import { useState, useEffect } from 'react'
import Home from './Components/Home'
import Header from './Components/Header'
import Login from './Components/Login'
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
      <Header loginData={loginData} setLoginData={setLoginData}/>
      <Login loginData={loginData} setLoginData={setLoginData}/>
      <Home loginData={loginData} setLoginData={setLoginData}/>
    </div>
  )
}

export default App
