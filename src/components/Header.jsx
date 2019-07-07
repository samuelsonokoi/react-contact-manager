import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;

  Header.defaultProps = {
    branding: "My Contact App"
  };

  Header.propTypes = {
    branding: PropTypes.string.isRequired
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          {branding}
        </a>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
