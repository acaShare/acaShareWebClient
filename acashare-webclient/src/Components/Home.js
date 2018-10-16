import React from 'react'

const Home = () =>
  <div className="col s12 m8 l9 home-part">
    <div className="data-container">
        <nav className="colornav">
            <div className="nav-wrapper path-header-wrapper">
                <div className="col s12 tree-path">
                    <a href="home.html" className="breadcrumb">Uczelnie</a>
                </div>
            </div>
        </nav>

        <div className="home-content">
            <ul className="collection">
                <li className="collection-item path-list-item"><div>Polsko-Japońska Akademia Technik Komputerowych<a href="pjatk.html" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                <li className="collection-item path-list-item"><div>Politechnika Warszawska<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                <li className="collection-item path-list-item"><div>Uniwersytet Warszawski<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                <li className="collection-item path-list-item"><div>Szkoła Główna Gospodarstwa Wiejskiego<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            </ul>
        </div>
    </div>
  </div>

export default Home
