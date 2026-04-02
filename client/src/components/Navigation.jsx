import React from "react";
import { Link } from "react-router-dom"; // React Router Link
import { AiFillHome } from "react-icons/ai"; // Home icon
import Button from "./Button";

const Navigation = () => {
    return (
        <nav className="absolute z-10 p-2 top-0 left-1/2 transform -translate-x-1/2 flex space-x-4 sm:left-auto sm:transform-none sm:top-0">

            {/* Home Icon Button */}
            <Link to="/">
                <Button text={<AiFillHome size={20} />} />
            </Link>

            {/* Other navigation buttons */}
            <Link to="/projects">
                <Button text="Projects" />
            </Link>

            <Link to="/about">
                <Button text="About" />
            </Link>

        </nav>
    );
};

export default Navigation;