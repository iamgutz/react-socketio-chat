import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as ManSocialNetworking } from 'assets/svg/man-social-networking.svg';
import { ReactComponent as RechatLogo } from 'assets/svg/rechat-logo.svg';
import { signIn } from './actions';
import { getSignInError } from './selectors';
import {
  ErrorMessage,
  LoginButton, LoginField, LoginWrap, LogoWrap,
} from './styles';

const Login = ({
  onSignIn,
  signInError,
}) => {
  const [animateIn, setAnimateIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
    onSignIn({ username });
  };

  const handleOnInputChange = ({ target }) => {
    const { value } = target;
    setUsername(value);
  };

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  return (
    <LoginWrap animateIn={animateIn}>
      <LogoWrap animateIn={animateIn}>
        <RechatLogo />
      </LogoWrap>
      <ManSocialNetworking />
      <h1>Wanna Rechat?</h1>
      <form onSubmit={handleOnSubmit}>
        <LoginField
          type="text"
          value={username}
          onChange={handleOnInputChange}
          placeholder="Type your display name"
        />
        <LoginButton type="submit">
          <span>Enter</span>
        </LoginButton>
        {signInError && (
          <ErrorMessage>{signInError}</ErrorMessage>
        )}
      </form>
    </LoginWrap>
  );
};

Login.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  signInError: PropTypes.string,
};

Login.defaultProps = {
  signInError: null,
};

const mapStateToProps = state => ({
  signInError: getSignInError(state),
});

const mapDispatchToProps = {
  onSignIn: signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);