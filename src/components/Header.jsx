import React from "react";
import "./_Header.css";

const Header = () => {
  return (
    <header>
      <div className="headerImage">
        <div className="headerText">
          <div className="subtitle">
            <h3>La mas actualizada información</h3>
          </div>
          <div className="title">
            <h1>Noticias Argentinas</h1>
          </div>
          <div className="description">
            <p>
              Este es un proyecto de desarrollo web que conecta con una de las
              mejores APIs de noticias a nivel mundial
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
