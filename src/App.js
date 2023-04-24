import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { AboutUsPage } from './pages/AboutUsPage'
import { BookASession } from './pages/BookASession'
import { CareersPage } from './pages/CareersPage'
import { ContactVirtualGatherings } from './pages/ContactVirtualGatherings'
import { FriendsOfVirtualGatherings } from './pages/FriendsOfVirtualGatheringsPage'
import { LearnMorePage } from './pages/LearnMorePage'
import { ResourcesPage } from './pages/ResourcesPage'
import { ShoppingCart } from './pages/ShoppingCart'
import { WhatWeOfferPage } from './pages/WhatWeOfferPage'
import Header from './components/ui/Header'
import Theme from './components/ui/Theme'
import Footer from './components/ui/Footer'
import LandingPage from './components/ui/LandingPage'

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
      <Routes>
        <Route path="/" element=<LandingPage /> />
        <Route path="/signup" element=<Signup /> />
        <Route path="/login" element=<Login /> />
        <Route path="/book-a-session" element=<BookASession /> />
        <Route
          path="/purchase-a-session-or-a-bundle"
          element=<ShoppingCart />
        />
        <Route path="/about-virtual-gatherings" element=<AboutUsPage /> />
        <Route path="/learn-more" element=<LearnMorePage /> />
        <Route path="/online-meetings" element=<WhatWeOfferPage /> />
        <Route
          path="/games-information-resources-for-patients-living-with-dementia-and-alzheimers"
          element=<ResourcesPage />
        />
        <Route
          path="/friends-working-with-patients-living-with-dementia-and-alzheimers"
          element=<FriendsOfVirtualGatherings />
        />
        <Route
          path="/contact-virtual-gatherings"
          element=<ContactVirtualGatherings />
        />
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
