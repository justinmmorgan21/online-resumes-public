import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {   
    authenticationLinks = (
      <div>
        <a href="/login">Login</a> | 
        <a href="/signup">Signup</a>
      </div>
    )
  }  else {  
    authenticationLinks = (
      <LogoutLink />
    )
  }
  return (
    <header>
      <nav>
        <Link to="/">All Students</Link>
      </nav>
      {authenticationLinks}
    </header>
  )
}