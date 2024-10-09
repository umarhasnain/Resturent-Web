import React from 'react'
import Header from './Components/Header'
import Filter from './Components/Common/Filter'
import HeroSection from './Components/HeroSection'
import Card from './Components/Common/Card'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Filter/>
      <HeroSection/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App
