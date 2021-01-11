import React from 'react';
import './FormsControls.css';
import { Field } from 'redux-form';


const FormControl = ({ input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <>
            {children}
            {hasError && <span className='warning'>{error}</span>}
        </>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} className={props.className} /></FormControl>
    )
}
export const Input = (props) => {
    const { input, meta: {touched, error}, child, ...restProps } = props;
    return (<FormControl {...props}><input {...input} {...restProps} className={touched && error ? 'Login_login required' : 'Login_login'} /></FormControl>
    )
}

export const createField = (placehloder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placehloder} name={name} validate={validators} component={component} {...props} /> {text}
    </div>
)