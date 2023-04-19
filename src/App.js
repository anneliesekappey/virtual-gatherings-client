import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import { HomePage } from './pages/HomePage'
import { AboutUsPage } from './pages/AboutUsPage'
import { BookASession } from './pages/BookASession'
import { CareersPage } from './pages/CareersPage'
import { ContactVirtualGatherings } from './pages/ContactVirtualGatherings'
import { FriendsOfVirtualGatherings } from './pages/FriendsOfVirtualGatheringsPage'
import { LearnMorePage } from './pages/LearnMorePage'
import { ResourcesPage } from './pages/ResourcesPage'
import { ShoppingCart } from './pages/ShoppingCart'
import { WhatWeOfferPage } from './pages/WhatWeOfferPage'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signup" element=<Signup /> />
        <Route path="/login" element=<Login /> />
        <Route path="/" element=<HomePage /> />
        <Route path="/about-virtual-gatherings" element=<AboutUsPage /> />
        <Route path="/book-a-session" element=<BookASession /> />
        <Route path="/work-with-virtual-gatherings" element=<CareersPage /> />
        <Route
          path="/contact-virtual-gatherings"
          element=<ContactVirtualGatherings />
        />
        <Route
          path="/friends-working-with-patients-living-with-dementia-and-alzheimers"
          element=<FriendsOfVirtualGatherings />
        />
        <Route path="/learn-more" element=<LearnMorePage /> />
        <Route
          path="/games-information-resources-for-patients-living-with-dementia-and-alzheimers"
          element=<ResourcesPage />
        />
        <Route
          path="/purchase-a-session-or-a-bundle"
          element=<ShoppingCart />
        />
        <Route path="/online-meetings" element=<WhatWeOfferPage /> />
      </Routes>
    </div>
  )
}

export default App
