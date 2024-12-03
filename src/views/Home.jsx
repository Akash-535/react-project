import React from 'react'
import { TestEmailJs } from '../components/home/TestEmailJs'
import TestAnimateCss from '../components/home/TestAnimateCss'
import TestTiltJs from '../components/home/TestTiltJs'
import TypeWriter from '../components/home/TypeWriter'
import Hooks from '../components/home/Hooks'
import Card from '../components/home/Card'
import Footer from '../components/common/Footer'
import BackToTop from '../components/common/BackToTop'
import Preloader from '../components/common/Preloader'
import FormValidation from '../components/home/FormValidation'
import CustomAccordion from '../components/home/CustomAccordion'
import Gsap from '../components/second/Gsap'

const Home = () => {
  return (
    <div>
      <Preloader />
      {/* <TestAnimateCss /> */}
      <TypeWriter />
      <TestTiltJs />
      <Card />
      <Footer />
      <BackToTop />
      <TestEmailJs />
      <Hooks />
      <FormValidation />
      <CustomAccordion />

    </div>
  )
}

export default Home
