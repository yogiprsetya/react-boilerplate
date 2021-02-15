import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import PrivateRoute from 'utils/privateRoute';

import Loading from 'lib/elements/Loading';
import Navbar from 'lib/components/Navbar';
import Footer from 'lib/components/Footer';

import Home from 'pages/Home';

const RouterManager = ({ progress }) => (
  <Fragment>
    <Navbar />

    <Switch>
      <Route exact path='/' component={ Home } />
      {/* <PrivateRoute path='/dashboard' component={ Dashboard } /> */}
    </Switch>

    <Footer />

    <Loading shown={progress} />
  </Fragment>
);

const mapStateToProps = state => ({
  ...state.modalControl
})

export default connect(mapStateToProps)(RouterManager);
