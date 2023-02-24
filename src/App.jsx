import React from 'react'
import Card from './component/Card'
import Footer from './component/footer/Footer'
import NavBar from './component/navbar/Navbar'
const App = () => {
  return (
    <>
    <div className="bg-[#000000]">
    <NavBar/>
    <Card/>
    <Footer/>
    </div>
    </>
  )
}

export default App
