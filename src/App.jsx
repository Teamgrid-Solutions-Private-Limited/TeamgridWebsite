import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import WhyTeamgrid from './components/WhyTeamgrid'
import Technologies from './components/Technologies'
import Letstalk from './components/Letstalk'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <WhyTeamgrid />
      {/* <Technologies /> */}
      <Letstalk />
    </>
  )
}

export default App