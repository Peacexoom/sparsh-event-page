import { useState } from 'react';
import { useEffect } from 'react';
import Images from './images';

const GComp=(props)=>{



    const [matches,setMatches]=useState(
        window.matchMedia("(min-width: 1075px)").matches
    )

    useEffect(() => {
        window
        .matchMedia("(min-width: 1075px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

    return(
        <div style={{
            height:props.styles.height,    
            width:props.styles.width,
            // border:"2px solid black",
            margin:matches ? props.styles.margin : props.styles.margin2,
            boxShadow: `0px 0px 10px 3px ${props.event.shadowColor}`
            
            
            
        }
        }>
            <Images tag={props.styles.tag} color={props.event.shadowColor}/>
        </div>
    )
}

export default GComp