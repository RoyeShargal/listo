import React from 'react';
import { StyledNavbar, StyledLinkTab } from './styles';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLinkTab directTo="home" name="Home" />
    </StyledNavbar>
  );
};

export default Navbar;
