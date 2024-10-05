import React from 'react'
import Header from './Components/Header'
import Filter from './Components/Common/Filter'
import HeroSection from './Components/HeroSection'
import Card from './Components/Common/Card'

const App = () => {
  return (
    <div>
      <Header/>
      <Filter/>
      <HeroSection/>
      <Card/>
    </div>
  )
}

export default App
