import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chat from '../containers/Chat';
import Login from '../containers/Login';
import { initApp } from './actions';
import { getSessionAuthenticated } from './session/selectors';

const App = ({
  isAuthenticated,
  onEnter,
}) => {
  useEffect(() => {
    onEnter();
  }, []);

  if (!isAuthenticated) {
    return (<Login />);
  }
  return (<Chat />);
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: getSessionAuthenticated(state),
});

const mapDispatchToProps = {
  onEnter: initApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);