import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div'); // eslint-disable-line no-undef
    ReactDOM.render(<App />, div);
  });
});
