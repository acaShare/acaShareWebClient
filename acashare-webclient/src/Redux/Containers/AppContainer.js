import { connect } from "react-redux";
import { universitiesFetched } from "../Actions";
import App from '../../Components/App';

const mapStateToProps = (state) => {
  return {
    universities: state.universities
  }
};

const mapDispatchToProps = { universitiesFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);