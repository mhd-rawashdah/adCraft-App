import React from 'react';
import './style/App.css';
import PropTypes from 'prop-types';
import signUpPic from './style/signup.png';
import SignIn from './components/SignIn.jsx'

class Login extends React.Component {
  render() {
    // Render blank if its false
    if(!this.props.show) {
      return null;
    }

    // sign up modal render file, as the modern type of web design
    // declare node file as based on prototype node, anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
    return (
      <div className="backdrop1">
        <div className="Login">
          {this.props.children}

          <div className="footer1">
            <button onClick={this.props.onClose}>
              X
            </button>
          </div>
        <div class="forLogin">
          <SignIn />
        </div>
        </div>
      </div>
    );
  }
}

// PropTypes was originally exposed as part of the React core module, and is commonly used with React components.
// this asasigned to declare prototypal type that you want to use in components
Login.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Login;
