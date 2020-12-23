import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MARZIPAN } from 'global/colors';
import Chat from '../containers/Chat';
import Login from '../containers/Login';
import { initApp } from './actions';
import { getSessionAuthenticated } from './session/selectors';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  overflow: hidden;
  background: ${MARZIPAN};
`;

const App = ({
  isAuthenticated,
  onEnter,
}) => {
  useEffect(() => {
    onEnter();
  }, []);

  return (
    <MainContainer>
      {!isAuthenticated && (<Login />)}
      {isAuthenticated && (<Chat />)}
    </MainContainer>
  );
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