import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">All Students</Link>
      </nav>
    </header>
  )
}