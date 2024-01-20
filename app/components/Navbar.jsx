import { NavLink } from "@remix-run/react";

export function Navbar()  {
    return (
			<header>
				<NavLink to='/'>                
                <h3>OpenJava</h3>
				</NavLink>
				<nav>
                <NavLink to='/about'>About</NavLink>
                {" "}
					<NavLink to='/contact'>Contact</NavLink>
				</nav>
			</header>
		)
}
