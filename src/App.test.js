import React from 'react';
import ReactDOM from 'react-dom';
import AppRouterContainer from './App';

it('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppRouterContainer/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
