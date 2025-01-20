// import React from "react";
import { Link } from "react-router-dom";
import './app-nav.scss';

  
export const AppNav = ({item}) => {
    // const navigate = useNavigate();

    // const goToPage = () => {
    //     navigate('/our-coffee');
    // };

    const logo = `${process.env.PUBLIC_URL}/assets/images/Logo${item === "footer" ? "2" : ""}.svg`;

    return (
        <div className="container items-end">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <nav>
                <ul className="items-end">
                    <li><Link to="/our-coffee">Our coffee</Link></li>
                    <li><Link to="/for-your-pleasure">For your pleasure</Link></li>
                </ul>
            </nav>
        </div>
    ); 
}

export default AppNav;
