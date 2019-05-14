import React from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap"

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <header>
        <Container>
          <Navbar expand="md">
            <NavbarBrand href="/">Daedalus Staking</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    About Us
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    Our Pool
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    Tech Support
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="btn btn-success">
                    Start Staking
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}
