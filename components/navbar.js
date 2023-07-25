"use client"

import { Navbar } from "flowbite-react";

const Nav = () => {
  return (

<Navbar
  fluid={true}
  className="custom-navbar"
>
  <Navbar.Brand href="https://flowbite.com/">
    <span className="text-yellow-300 self-center whitespace-nowrap text-xl font-semibold">
      Marjorie Kehil
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link className="text-white hover:text-yellow-300" href="#section1">
      Accueil
    </Navbar.Link>
    <Navbar.Link className="text-white hover:text-yellow-300" href="#section2">
      A propos
    </Navbar.Link>
    <Navbar.Link className="text-white hover:text-yellow-300" href="#section3">
      Compétences
    </Navbar.Link>
    <Navbar.Link className="text-white hover:text-yellow-300" href="#section4">
      Portfolio
    </Navbar.Link>
    <Navbar.Link className="text-white hover:text-yellow-300" href="#section5">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
)
}
export default Nav;