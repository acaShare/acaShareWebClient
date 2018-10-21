import MainContainer from './MainContainer';
import NavBar  from './NavBar';
import Sidebar from './Sidebar';
import '../Styles/App.css';
import '../Styles/home.css';
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../Authentication/_helpers';
import { alertActions } from '../Authentication/_actions';
import { PrivateRoute } from '../Authentication/_components';
import { HomePage } from '../Authentication/HomePage/HomePage';
import { LoginPage } from '../Authentication/LoginPage/LoginPage';
import { RegisterPage } from '../Authentication/RegisterPage/RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
          <>
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
              <>
                <NavBar />

                <div className="row home-container">
                  <div className="col s12 m8 l9 home-part">
                    <div className="data-container">
                      <PrivateRoute path="/universities" component={MainContainer} />
                      <Route path="/login" component={LoginPage} />
                      <Route path="/register" component={RegisterPage} />
                    </div>
                  </div>
                  <Sidebar />
                </div>
              </>
            </Router>
          </>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 