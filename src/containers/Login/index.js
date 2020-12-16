import React, { useState } from 'react';
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

const mapStateToProps = state => ({
  signInError: getSignInError(state),
});

const mapDispatchToProps = {
  onSignIn: signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);