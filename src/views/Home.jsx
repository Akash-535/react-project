import React from 'react'
import { TestEmailJs } from '../components/home/TestEmailJs'
import TestAnimateCss from '../components/home/TestAnimateCss'
import TestTiltJs from '../components/home/TestTiltJs'
import TypeWriter from '../components/home/TypeWriter'
import Hooks from '../components/home/Hooks'
import Card from '../components/home/Card'
import BackToTop from '../components/common/BackToTop'
import Preloader from '../components/common/Preloader'
import FormValidation from '../components/home/FormValidation'
import CustomAccordion from '../components/home/CustomAccordion'
import PageButton from '../components/home/PageButton'
import TestSwiper from '../components/home/TestSwiper'
import CustomTabs from '../components/home/CustomTabs'
import TestForn from '../components/home/TestForn'

const Home = () => {
  return (
    <div>
      {/* <Preloader />
      <PageButton />
      <TypeWriter />
      <TestTiltJs />
      <Card />
      <BackToTop />
      <TestEmailJs />
      <Hooks />
      <FormValidation /> */}
      <CustomAccordion />
      {/* <CustomTabs /> */}
      {/* <TestSwiper />
      <TestForn /> */}
    </div>
  )
}

export default Home
