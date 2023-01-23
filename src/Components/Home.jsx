import { useEffect, useState } from "react"
import Events from "./Events"
import Search from "./Search"
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
        <>
            <Search eventData={eventData} setEventData={setEventData}/> 
            <Events eventData={eventData} setEventData={setEventData}/>
        </>
    )
}

export default Home