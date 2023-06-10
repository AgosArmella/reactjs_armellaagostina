import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgMatos = "../img/matos.jpg";
  return (
    <header>
        <Link to={"/"}>
          <img className="imgMatos" src={imgMatos} alt="" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink className="miBtn" activeClassName="active" to={"/categoria/2"}> CLAVOS </NavLink>
                </li>

                <li>
                  <NavLink className="miBtn" activeClassName="active" to={"/categoria/3"}> ALAMBRES </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar