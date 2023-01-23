function Events({eventdata, setEventData}){
    const [selEvent, setSelEvent] = useState([])
    const handleEvent = (e) => {
        if(selEvent.includes(e)) return
        setSelEvent([...eventdata, e])
        console.log('event added')
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
                            </ul>
                            <button onClick={()=> handleEvent(event)}>Interested
                            ?</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Events