import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from 'utils/privateRoute';
import Loading from 'lib/elements/Loading';

const RouterManager = ({ progress, location, dispatch, ...props }) => (
  <Fragment>
    <Navbar />

    <Switch>
      <Route exact path='/' component={ AboutUs } />
      <PrivateRoute path='/dashboard' component={ Dashboard } />
    </Switch>

    <Footer />

    { props.showModalSignup && <Signup /> }
    { props.showModalSignin && <Signin /> }
    { props.showModalOffer && <Offer /> }

    <Loading shown={progress} />
  </Fragment>
);

const mapStateToProps = state => ({
  ...state.modalControl
})

export default withRouter(connect(mapStateToProps)(RouterManager));
