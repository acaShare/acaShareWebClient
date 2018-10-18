import React from 'react'

const Sidebar = () => 
    <div className="col s12 m4 l3 right-side-bar">
        <ul id="tabs-swipe-demo" className="tabs tabs-fixed-width">
            <li className="tab"><a href="#test-swipe-1">Ulubione</a></li>
            <li className="tab"><a className="active" href="#test-swipe-2">Ostatnia aktywność</a></li>
        </ul>
        <div id="test-swipe-1" className="favourites-wrapper">

            <a href="none" className="favourites-link">
                <div className="last-activity-wrapper">
                    <div className="last-activities-date">Dodano: 30 min. temu</div>
                    <div className="last-activities-content">
                        <i className="medium material-icons">description</i>
                        <span className="last-activities-material-type">PJATK -> Informatyka -> ABD -> MS SQL -> Notatki z wykładu</span>
                    </div>
                </div>
            </a>

            <a href="none" className="favourites-link">
                <div className="last-activity-wrapper">
                    <div className="last-activities-date">Dodano: 22 maja</div>
                    <div className="last-activities-content">
                        <i className="medium material-icons">description</i>
                        <span className="last-activities-material-type">UW -> Finanse i Rachunkowość -> Makroekonomia -> Wzrost i rozwój gopodarczy -> Zadania na kolokwium</span>
                    </div>
                </div>
            </a>

            <a href="none" className="favourites-link">
                <div className="last-activity-wrapper">
                    <div className="last-activities-date">Dodano: 14 kwietnia</div>
                    <div className="last-activities-content">
                        <i className="medium material-icons">description</i>
                        <span className="last-activities-material-type">PW -> Inżynieria środowiska -> Technologia oczyszczania wody i ścieków -> Uzdatnianie wody do wybranych gałęzi przemysłu -> Zadania z ćwiczeń</span>
                    </div>
                </div>
            </a>

            <a href="none" className="favourites-link">
                <div className="last-activity-wrapper">
                    <div className="last-activities-date">Dodano: 12 kwietnia</div>
                    <div className="last-activities-content">
                        <i className="medium material-icons">description</i>
                        <span className="last-activities-material-type">SGGW -> Weterynaria -> Anatomia zwierząt -> Nauka o połączeniach kości -> Notatki z wykładu</span>
                    </div>
                </div>
            </a>

            <a href="none" className="favourites-link">
                <div className="last-activity-wrapper">
                    <div className="last-activities-date">Dodano: 3 marca</div>
                    <div className="last-activities-content">
                        <i className="medium material-icons">description</i>
                        <span className="last-activities-material-type">PJTK -> Sztuka nowych mediów -> Rysunek -> Rola światła w perpektywie -> Pytania na kolokwium</span>
                    </div>
                </div>
            </a>

        </div>
        <div id="test-swipe-2" className="last-activities-wrapper">
            <div className="last-activity-wrapper">
                <div className="last-activities-date">5 min. temu</div>
                <div className="last-activities-content">
                    <i className="medium material-icons">note_add</i>
                    <span className="last-activities-material-type">Użytkownik Maciej Sadoś wstawił materiał "Jak zaliczyć PRO"</span>
                </div>
            </div>

            <div className="last-activity-wrapper">
                <div className="last-activities-date">20 czerwca</div>
                <div className="last-activities-content">
                    <i className="medium material-icons">note_add</i>
                    <span className="last-activities-material-type">Użytkownik Maciej Sadoś wstawił materiał "Projekt z MAS"</span>
                </div>
            </div>

            <div className="last-activity-wrapper">
                <div className="last-activities-date">17 maja</div>
                <div className="last-activities-content">
                    <i className="medium material-icons">comment</i>
                    <span className="last-activities-material-type">Użytkownik Maciej Sadoś skomentował materiał "Ściągi z MIW"</span>
                </div>
            </div>

            <div className="last-activity-wrapper">
                <div className="last-activities-date">22 kwietnia</div>
                <div className="last-activities-content">
                    <i className="medium material-icons">note_add</i>
                    <span className="last-activities-material-type">Użytkownik Maciej Sadoś wstawił materiał "Prezentacja ABD"</span>
                </div>
            </div>

            <div className="last-activity-wrapper">
                <div className="last-activities-date">16 lutego</div>
                <div className="last-activities-content">
                    <i className="medium material-icons">comment</i>
                    <span className="last-activities-material-type">Użytkownik Maciej Sadoś skomentował materiał "Notatki z IPB"</span>
                </div>
            </div>

            <div className="last-activity-wrapper">
                <div className="last-activities-date">12 grudnia 2017</div>
                <div className="last-activities-content">
                    <i className="medium material-icons">note_add</i>
                    <span className="last-activities-material-type">Użytkownik Maciej Sadoś wstawił materiał "Jak zaliczyć PRO"</span>
                </div>
            </div>

            <div className="last-activity-wrapper">
                <div className="last-activities-date">12 grudnia 2017</div>
                <div className="last-activities-content">
                    <i className="medium material-icons">note_add</i>
                    <span className="last-activities-material-type">Użytkownik Maciej Sadoś wstawił materiał "Jak zaliczyć PRO"</span>
                </div>
            </div>
        </div>
    </div>;

export default Sidebar;
