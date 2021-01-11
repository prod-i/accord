import React, { Suspense } from 'react';
import { compose } from 'redux';
import './App.css';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from './redux/redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';
import { initializeApp } from './redux/appReducer';
import Login from './components/Login/Login';
import HeaderContainer from './components/Header/HeaderContainer';
import Preloader from './components/common/Preloader/Preloader';

const ProfileContainer     = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer     = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer       = React.lazy(() => import('./components/Users/UsersContainer'));
const NewsContainer        = React.lazy(() => import('./components/News/NewsContainer'));
const SettingsContainer    = React.lazy(() => import('./components/Settings/SettingsContainer'));


class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    // alert('Some error occured')
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount(){
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="accord">
        
            <Route path='/' render={() => <HeaderContainer />} />

        <div className="app__loading_content">
          <Switch>

            <Route exact path='/'           render={() => <Redirect to='/profile' />} />  
            
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}   />

            <Route path='/dialogs'          render={withSuspense(DialogsContainer)}   />

            <Route path='/users'            render={withSuspense(UsersContainer)}     />

            <Route path='/news'             render={withSuspense(NewsContainer)}      />

            <Route path='/settings'         render={withSuspense(SettingsContainer)}  />

            <Route path='/login'            render={() => <Login />}      />

            <Route path='*'                 render={() => <div>404</div>} />

          </Switch>
        </div>

      </div>
    );
  };
};





const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

const AppRouterContainer = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>

        <AppContainer />

      </Provider>
    </HashRouter>
  )
}

export default AppRouterContainer;
