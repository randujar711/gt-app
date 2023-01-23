import { useEffect, useState } from "react"
import Events from "./Events"
import Search from "./Search"
import { Link } from 'react-router-dom'

function Home({loginData, setLoginData}) {
    const [eventData, setEventData] = useState([])
    useEffect(() => {
        const request= async() => {
            let req = await fetch('kufk')
            let res = await req.json()
            console.log(res)
        }
        request()
    }, [])
    return (
        <div>  
            <Link to={"/login"}>go to login</Link>
            <Search eventData={eventData} setEventData={setEventData}/> 
            <Events eventData={eventData} setEventData={setEventData}/>
        </div>
    )
}

export default Home