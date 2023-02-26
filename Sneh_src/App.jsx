import React, { useRef, useState } from 'react'
import Card from './components/Card'
import GComp from './components/card/gComp'
import Day1 from './components/day1.js/day1'
import Day2 from './components/day2.js/day2'
import Day3 from './components/day3.js/day3'
import NavBar from './components/Header/navbar'
import Search from './components/SearchBar/searchbar'
// import SearchBar from './components/SearchBar/searchbar'
import LabTabs from './components/tab'

const App = () => {

  const Dummy_event_day1=[
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'cyan'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'red'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'pink'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'green'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'teal'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'purple'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'yellow'
    }
  ]

  const Dummy_event_day2=[
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'rgb(236,222,110)'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    }
  ]

  const Dummy_event_day3=[
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    },
    {
      name: 'navratri',
      date: '01-01-2001',
      shadowColor: 'orange'
    }
  ]

  const styles=[
    {
        height: '263px',
        width: '283px',
        margin: '20px 20px',
        margin2:'20px 20px',
        tag:1
    }
  ]

  const [eventsD1,setEventsD1]=useState(Dummy_event_day1);
  const [eventsD2,setEventsD2]=useState(Dummy_event_day2);
  const [eventsD3,setEventsD3]=useState(Dummy_event_day3);

  const ref=useRef(null);

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({behavior:'smooth'})
  };

  const onSearchHandler=(value)=>{
    console.log(value);
     setEventsD1(Dummy_event_day1.filter(event=>
        event.name.includes(value)
      ))
    
      setEventsD2(Dummy_event_day2.filter(event=>
        event.name.includes(value)
      ))

      setEventsD3(Dummy_event_day3.filter(event=>
        event.name.includes(value)
      ))
  }

  return (
    <div className="App">
      <div style={{display:'flex',zIndex:0, marginTop:'0' }}>
      <NavBar/>
      </div>
      <div style={{ display:'flex',zIndex:100 ,position:'fixed',marginTop:'75px',height:'40px' }} >
      
      <LabTabs onScroll={handleClick}/>
      <Search onSearchHandler={onSearchHandler}/>
      </div>
     {/* <button onClick={handleClick} style={{'height': '20px', 'width':'20px'}}/> */}
     <div id='d1'>
    <Day1  events={eventsD1} styles={styles[0]}/>
    </div>

    <div id='d2'>
    <Day2  events={eventsD2} styles={styles[0]}/>
    </div>

    <div id='d3'>
    <Day3   events={eventsD3} styles={styles[0]}/>
    </div>
      {/* <GComp styles={styles[0]}/> */}
    </div>
  )
}

export default App
