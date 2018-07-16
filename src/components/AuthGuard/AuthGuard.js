import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

function PrivateRoute({component: Component, isAuthenticated, ...rest}) {
  const renderComponent = props => (
    isAuthenticated ?
      <Component {...props} /> :
      <Redirect
        to={{
          pathname: '/login',
          state: {from: 'props.location'},
        }}
      />
  );
  return <Route {...rest} render={renderComponent}/>;
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func,
};

const mapStateToProps = ({auth}) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);