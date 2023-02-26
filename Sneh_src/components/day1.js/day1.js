import Card from "../Card"
import GComp from "../card/gComp"
import DayNo from "../dayNo"
import './day1.css'

const Day1=(props)=>{
    return(
        <div className="day1">
            <DayNo day_no='1' />

            <div className="day1_events">
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