import React from 'react';
import { connect } from 'react-redux';
import {logout} from '../../redux/authReducer';
import Header from './Header';
import { Redirect } from 'react-router-dom';

class HeaderContainer extends React.Component {
    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />
        return <Header {...this.props} />
    }
};


const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {logout})(HeaderContainer);