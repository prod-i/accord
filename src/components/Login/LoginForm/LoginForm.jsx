import React from 'react';
import './LoginForm.css';
import { Field } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { required, maxLength } from '../../../utils/validators/validators';

const maxLen = maxLength(30);
const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form className='Login_form' onSubmit={handleSubmit}>
            <div className='warn'>
                <Field className='Login_login' placeholder={'Email'} name={'email'} component={Input} validate={[required, maxLen]} />
            </div>
            <div className='warn'>
                <Field className='Login_password' type='password' placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLen]} />
            </div>
            <div className='warn formError'>
                {error}
            </div>
            <div className='warn'>
                <Field className='Login_remember' type={'checkbox'} name={'remmemberMe'} component={'input'} /> remember me
            </div>
            
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <Field name={'captcha'} component={'input'} />}
            <div className='warn'>
                <button className='Login_button'>Login</button>
            </div>
        </form>
    );
}

export default LoginForm;