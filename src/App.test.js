import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div'); // eslint-disable-line no-undef
    ReactDOM.render(<App />, div);
  });

  it('renders a title', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find('h2').length).toBe(1);
  });

  it('renders a snapshot', () => {
    const tree = ReactTestRenderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
