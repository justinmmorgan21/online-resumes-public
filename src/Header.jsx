import { Link } from "react-router-dom";
export function Header() {
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
    </header>
  )
}