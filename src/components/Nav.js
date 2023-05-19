import '../styles/Nav.css';
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Nav = ({ cartCount }) => {
    return (
        <div className='nav'>
            <h1>Logo</h1>
            <ul className='nav-links'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <li>
                    <CartIcon cartCount={cartCount}/>
                </li>
            </ul>
        </div>
    );
}

export default Nav;