import React from 'react'

const Sidebar = () => 
    <div class="col s12 m4 l3 right-side-bar">
        <ul id="tabs-swipe-demo" class="tabs tabs-fixed-width">
            <li class="tab"><a href="#test-swipe-1">Ulubione</a></li>
            <li class="tab"><a class="active" href="#test-swipe-2">Ostatnia aktywność</a></li>
        </ul>
        <div id="test-swipe-1" class="favourites-wrapper">

            <a class="favourites-link" href="notatkizwykladu.html">
                <div class="last-activity-wrapper">
                    <div class="last-activities-date">Dodano: 30 min. temu</div>
                    <div class="last-activities-content">
                        <i class="medium material-icons">description</i>
                        <span class="last-activities-material-type">PJATK -> Informatyka -> ABD -> MS SQL -> Notatki z wykładu</span>
                    </div>
                </div>
            </a>

            <a class="favourites-link">
                <div class="last-activity-wrapper">
                    <div class="last-activities-date">Dodano: 22 maja</div>
                    <div class="last-activities-content">
                        <i class="medium material-icons">description</i>
                        <span class="last-activities-material-type">UW -> Finanse i Rachunkowość -> Makroekonomia -> Wzrost i rozwój gopodarczy -> Zadania na kolokwium</span>
                    </div>
                </div>
            </a>

            <a class="favourites-link">
                <div class="last-activity-wrapper">
                    <div class="last-activities-date">Dodano: 14 kwietnia</div>
                    <div class="last-activities-content">
                        <i class="medium material-icons">description</i>
                        <span class="last-activities-material-type">PW -> Inżynieria środowiska -> Technologia oczyszczania wody i ścieków -> Uzdatnianie wody do wybranych gałęzi przemysłu -> Zadania z ćwiczeń</span>
                    </div>
                </div>
            </a>

            <a class="favourites-link">
                <div class="last-activity-wrapper">
                    <div class="last-activities-date">Dodano: 12 kwietnia</div>
                    <div class="last-activities-content">
                        <i class="medium material-icons">description</i>
                        <span class="last-activities-material-type">SGGW -> Weterynaria -> Anatomia zwierząt -> Nauka o połączeniach kości -> Notatki z wykładu</span>
                    </div>
                </div>
            </a>

            <a class="favourites-link">
                <div class="last-activity-wrapper">
                    <div class="last-activities-date">Dodano: 3 marca</div>
                    <div class="last-activities-content">
                        <i class="medium material-icons">description</i>
                        <span class="last-activities-material-type">PJTK -> Sztuka nowych mediów -> Rysunek -> Rola światła w perpektywie -> Pytania na kolokwium</span>
                    </div>
                </div>
            </a>

        </div>
        <div id="test-swipe-2" class="last-activities-wrapper">
            <div class="last-activity-wrapper">
                <div class="last-activities-date">5 min. temu</div>
                <div class="last-activities-content">
                    <i class="medium material-icons">note_add</i>
                    <span class="last-activities-material-type">Użytkownik Maciej Sadoś wstawił materiał "Jak zaliczyć PRO"</span>
                </div>
            </div>

            <div class="last-activity-wrapper">
                <div class="last-activities-date">20 czerwca</div>
                <div class="last-activities-content">
                    <i class="medium material-icons">note_add</i>
                    <span class="last-activities-material-type">Użytkownik Maciej Sadoś wstawił materiał "Projekt z MAS"</span>
                </div>
            </div>

            <div class="last-activity-wrapper">
                <div class="last-activities-date">17 maja</div>
                <div class="last-activities-content">
                    <i class="medium material-icons">comment</i>
                    <span class="last-activities-material-type">Użytkownik Maciej Sadoś skomentował materiał "Ściągi z MIW"</span>
                </div>
            </div>

            <div class="last-activity-wrapper">
                <div class="last-activities-date">22 kwietnia</div>
                <div class="last-activities-content">
                    <i class="medium material-icons">note_add</i>
                    <span class="last-activities-material-type">Użytkownik Maciej Sadoś wstawił materiał "Prezentacja ABD"</span>
                </div>
            </div>

            <div class="last-activity-wrapper">
                <div class="last-activities-date">16 lutego</div>
                <div class="last-activities-content">
                    <i class="medium material-icons">comment</i>
                    <span class="last-activities-material-type">Użytkownik Maciej Sadoś skomentował materiał "Notatki z IPB"</span>
                </div>
            </div>

            <div class="last-activity-wrapper">
                <div class="last-activities-date">12 grudnia 2017</div>
                <div class="last-activities-content">
                    <i class="medium material-icons">note_add</i>
                    <span class="last-activities-material-type">Użytkownik Maciej Sadoś wstawił materiał "Jak zaliczyć PRO"</span>
                </div>
            </div>

            <div class="last-activity-wrapper">
                <div class="last-activities-date">12 grudnia 2017</div>
                <div class="last-activities-content">
                    <i class="medium material-icons">note_add</i>
                    <span class="last-activities-material-type">Użytkownik Maciej Sadoś wstawił materiał "Jak zaliczyć PRO"</span>
                </div>
            </div>
        </div>
    </div>;

export default Sidebar;
