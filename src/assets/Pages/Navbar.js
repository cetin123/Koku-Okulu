import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import "../css/Navbar.css";
import { Button, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Login from './Login.js';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();

    const navigateTo = () => history.push('/Login');
    const signup = () => history.push('/Signup');
      

    return (
        
         
            <Navbar color="black" light expand="md">
           
                <NavbarBrand href="/">Anasayfa</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <div className="norbutton">
                    <Nav className="navbutton" navbar>
                        <NavItem>
                            <NavLink href="/BizKimiz/">Biz Kimiz ?</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Keşfet/">Keşfet</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Login/">Koku Uzmanlığı</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                             </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                    </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                     </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                    </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavbarText>Simple Text</NavbarText> 
                             </Nav>
                             </div>
                             
                
                             <NavItem>
                        <div className="anibutton">
                            <Button animated onClick={navigateTo} > 
                                <Button.Content visible>Giriş</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='sign-in' />
                                </Button.Content>
                            </Button>
                            <Button animated onClick={signup} > 
                                <Button.Content visible>Kaydol</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='signup' />
                                </Button.Content>
                            </Button>
                        </div>
                    </NavItem>
                </Collapse>
            </Navbar>
        
    );
}

export default Example;