import Card from "../Card"
import GComp from "../card/gComp"
import DayNo from "../dayNo"
import './day2.css'

const Day2=(props)=>{
    return(
        <div className="day2">
            <DayNo day_no='2' />

            <div className="day2_events">
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

export default Day2