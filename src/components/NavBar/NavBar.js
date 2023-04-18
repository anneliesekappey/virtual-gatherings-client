import React from 'react'
// import { Anchor } from "../commons";
// import imageLogo from '../images/dopamine.png'
import { StyledNavBar, NavItemLink } from './style'

const NavBar = ({ children }) => {
  return (
    <StyledNavBar>
      {/* <Anchor to="/">
        {/* <ImageLogo src={imageLogo} /> */}
      {/* </Anchor> */} */
      <NavItemLink to="/login" fill>
        Log In
      </NavItemLink>
      <NavItemLink to="/signup" fill>
        Sign Up
      </NavItemLink>
      <NavItemLink to="/online-meetings"> Online Meetings </NavItemLink>
      {/* <NavItemLink to="/">Challenges</NavItemLink>
      <NavItemLink to="/analysis"> My Weekly Analysis </NavItemLink> */}
    </StyledNavBar>
  )
}

export default NavBar
