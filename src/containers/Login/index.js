import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn } from './actions';
import { getSignInError } from './selectors';

const Login = ({
  onSignIn,
  signInError,
}) => {
  const [username, setUsername] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
    onSignIn({ username });
  };

  const handleOnInputChange = ({ target }) => {
    const { value } = target;
    setUsername(value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={username} onChange={handleOnInputChange} />
      <button type="submit">
        <span>Login</span>
      </button>
      {signInError && (
        <p>{signInError}</p>
      )}
    </form>
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