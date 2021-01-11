import React from 'react';
import './Login.css';
import LoginForm from './LoginForm/LoginForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.remmemberMe, formData.captcha)
    }
    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div className="Login">
            <p className="Login_Title">sign in</p>

            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>

        </div>
    );
};
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, { login })(Login);