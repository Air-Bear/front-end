import React from "react";
import { Container, Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import { useHistory } from 'react-router-dom'
function NavBar(){

    //const [state, setter] = useState();
    const history = useHistory()
    
    const logout = e => {
		if(localStorage.getItem("token") || localStorage.getItem('ID')){ 
		localStorage.removeItem('token');
		localStorage.removeItem('ID')
		history.push("/login")
		// window.location.reload(true)
		}		
    };
    
    return(
		<Navbar color="dark" className="">
			<Nav style={{width:"100%"}}className="row">
					<NavbarBrand style={{color:"lime"}} >Spotify Song Suggester PRO</NavbarBrand>
					<Container className="themed-container" fluid="lg">
						<NavItem style={{color:"white"}}className="">
							<NavLink  href="/">Search</NavLink>
						</NavItem>
						<NavItem style={{color:"white"}}className="">
							<NavLink  href="/login">Log In</NavLink>
						</NavItem>
						<NavItem style={{color:"white"}}className=""> 
							<NavLink  href="/register">Sign Up</NavLink>
						</NavItem>
						{document.location.pathname == '/private-route' ? <NavItem style={{color:"white"}}className=""> 
							<NavLink href="/" onClick={logout} >Log Out</NavLink>
						</NavItem>: null}
				</Container>	
			</Nav>
		</Navbar>
		
    );
}
export default NavBar;