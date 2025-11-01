import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title = "GitHub Finder" }) {
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                    <FaGithub className="text-3xl" />
                    <Link to="/" className="text-xl font-bold">
                        {title}
                    </Link>
                </div>

                <div className="flex space-x-2">
                    <NavLink to="/" className='btn btn-ghost btn-lg rounded-xl'>
                        Home
                    </NavLink>
                    <NavLink to="/about" className='btn btn-ghost btn-lg rounded-xl'>
                        About
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
};

export default Navbar;
