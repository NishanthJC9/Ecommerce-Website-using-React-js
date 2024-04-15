import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewColections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import { Navbar } from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Shopping = () => {
  return (
    <div>
      
        <Hero />
        <Popular></Popular>
        <Offer />
        <NewColections />
        <NewsLetter />
        
    </div>
  )
}

export default Shopping