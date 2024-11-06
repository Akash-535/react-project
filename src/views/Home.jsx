import React from 'react'
import { TestEmailJs } from '../components/home/TestEmailJs'
import TestAnimateCss from '../components/home/TestAnimateCss'
import TestTiltJs from '../components/home/TestTiltJs'
import TypeWriter from '../components/home/TypeWriter'
import Hooks from '../components/home/Hooks'
import Card from '../components/home/Card'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <div>
      <TestEmailJs />
      <TestAnimateCss />
      <TypeWriter />
      <TestTiltJs />
      <Hooks />
      <Card />
      <Footer />
    </div>
  )
}

export default Home
