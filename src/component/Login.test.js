import React from 'react'
import { mount } from 'enzyme'
import Login from './Login'

describe('Login Component', () => {
  it('User must be André Oliveira', () => {

    const props = {
        isLoggedIn: "true",
        username: "André Oliveira"
    
    }
    const component = mount(<Login {...props} />);
  
    expect(component.find('p').at(0).text()).toEqual("Olá André Oliveira, esse é o nosso Dashboard.")
  });
});