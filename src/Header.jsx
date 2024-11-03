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
        <div className="Logo"> <Link to="/">Resume Finder</Link>
        </div>
        <div className="searchbar">
          <input type="text" />
        </div>
        <div className="searchbutton">
          <button>Search</button>
        </div>
      </nav>
      {authenticationLinks}
    </header>
  )
}