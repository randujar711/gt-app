import { useState } from "react"

function SelEvent({selEvent, setSelEvent}){
    const [confirmEvent, setConfirmEvent] = useState([])
    const handleSelEvent = (e) => {
        if(selEvent.number <= 0 || confirmEvent.includes(e)) return console.log('cant confirm')
        setConfirmEvent([...selEvent, e])
        console.log('event confirmed')
    }
    return(
        <div>
            {
                eventdata.map((event)=> {
                    return(
                        <div>
                            <h2>event data</h2>
                            <ul>
                                <li>{event.title}</li>
                                <li>{event.date}</li>
                                <li>{event.location}</li>
                                <li>{event.about}</li>
                            </ul>
                            <div>
                                <h2>{event.number}</h2>
                            </div>
                            <button onClick={()=> handleSelEvent(event)}>Join</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SelEvent