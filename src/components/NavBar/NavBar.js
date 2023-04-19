import React from 'react'
// import { Anchor } from "../commons";
// import imageLogo from '../images/dopamine.png'
import { StyledNavBar, NavItemLink } from './style'

const NavBar = ({ children }) => {
  return (
    <StyledNavBar>
      {/* <Anchor to="/">
        {/* <ImageLogo src={imageLogo} /> */}
      {/* </Anchor> */}
      <NavItemLink to="/login" fill>
        Log In
      </NavItemLink>

      <NavItemLink to="/signup" fill>
        Sign Up
      </NavItemLink>

      <NavItemLink to="/" fill>
        Home
      </NavItemLink>

      <NavItemLink to="/online-meetings" fill>
        Online Meetings
      </NavItemLink>

      <NavItemLink to="/about-virtual-gatherings" fill>
        About Us
      </NavItemLink>

      <NavItemLink to="/book-a-session" fill>
        Book A Session
      </NavItemLink>

      <NavItemLink to="/work-with-virtual-gatherings" fill>
        Careers
      </NavItemLink>

      <NavItemLink to="/contact-virtual-gatherings" fill>
        Contact Us
      </NavItemLink>

      <NavItemLink
        to="/friends-working-with-patients-living-with-dementia-and-alzheimers"
        fill
      >
        Friends of VG
      </NavItemLink>

      <NavItemLink to="/learn-more" fill>
        Learn More
      </NavItemLink>

      <NavItemLink
        to="/games-information-resources-for-patients-living-with-dementia-and-alzheimers"
        fill
      >
        Resources
      </NavItemLink>
      {/* <NavItemLink to="/">Challenges</NavItemLink>
      <NavItemLink to="/analysis"> My Weekly Analysis </NavItemLink> */}
    </StyledNavBar>
  )
}

export default NavBar
