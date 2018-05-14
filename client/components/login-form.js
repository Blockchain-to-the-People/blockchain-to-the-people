import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {TextField, RaisedButton, Paper} from 'material-ui'
import {login} from '../store';

/**
 * COMPONENT
 */
const buttonStyle = {
  margin: 15,
 };

const style = {
  height: 400,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const LoginForm = (props) => {
  const {name, handleSubmit, error} = props

  return (
    <div className="form">
      <Paper style={style} zDepth={2}>
        <br />
        <h1>Log In</h1>
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit} name={name}>
          <TextField
          hintText="Enter your Email"
          floatingLabelText="Email"
          name="email"
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            name="password"
            />
          <br />
            <RaisedButton type="submit" label="Login" primary={true} style={buttonStyle} />
          {error && error.response && <div> {error.response.data} </div>}
        </form>
  {/*<a href="/auth/google">{displayName} with Google</a>*/}
      </Paper>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(login(email, password))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(LoginForm)
/**
 * PROP TYPES
 */
LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
