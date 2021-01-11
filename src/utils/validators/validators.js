import React from 'react';

export const required = (value) => {
    if(value) return undefined
    return <></>
}
export const maxLength = (maxLength) => (value) => {
    if(value && value.length > maxLength) return `Max Length ${maxLength}`
    return undefined;
}
