import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import CareersPage from './pages/CareersPage'
import FriendsOfVirtualGatherings from './pages/FriendsOfVirtualGatherings'
import ResourcesPage from './pages/ResourcesPage'
import Header from './components/ui/Header'
import Theme from './components/ui/Theme'
import Footer from './components/ui/Footer'
import LandingPage from './components/ui/LandingPage'
import AboutUs from './components/ui/AboutUs'
import Services from './components/ui/Services'
import LearnMore from './components/ui/LearnMore'
import Contact from './components/ui/Contact'
import ShoppingCart from './pages/ShoppingCart'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)

  return (
    <ThemeProvider theme={Theme}>
      <Header
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element=<LandingPage /> />
        <Route path="/signup" element=<Signup /> />
        <Route path="/login" element=<Login /> />
        <Route path="/book-a-session" element=<ShoppingCart /> />
        <Route path="/about-virtual-gatherings" element=<AboutUs /> />
        <Route path="/learn-more" element=<LearnMore /> />
        <Route path="/online-meetings" element=<Services /> />
        <Route
          path="/games-information-resources-for-patients-living-with-dementia-and-alzheimers"
          element=<ResourcesPage />
        />
        <Route
          path="/friends-working-with-patients-living-with-dementia-and-alzheimers"
          element=<FriendsOfVirtualGatherings />
        />
        <Route path="/contact-virtual-gatherings" element=<Contact /> />
        <Route path="/work-with-virtual-gatherings" element=<CareersPage /> />
      </Routes>
      <Footer
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </ThemeProvider>
  )
}

export default App
