import React from 'react'

const Sidebar = () => 
  <div className="col s12 m4 l3 right-side-bar">
    <ul className="tabs tabs-fixed-width">
        <li className="tab"><a href="#test1">Ulubione</a></li>
        <li className="tab"><a className="active" href="#test2">Ostatnia aktywność</a></li>
    </ul>
    <section className="last-activities-wrapper">
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
    </section>
  </div>;

export default Sidebar;
