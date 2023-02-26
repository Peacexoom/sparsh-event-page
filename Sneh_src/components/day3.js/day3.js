import Card from "../Card"
import GComp from "../card/gComp"
import DayNo from "../dayNo"
import './day3.css'

const Day1=(props)=>{
    return(
        <div className="day3">
            <DayNo day_no='3' />

            <div className="day3_events">
            <br/>
            {
                props.events.map(event=>{
                    console.log(event.name);
                    return(

                    <div key={event.name}>
                    <GComp event={event}   styles={props.styles} />
                    </div>
                    )
                })
            }
            </div>

            
        </div>
    )
}

export default Day1