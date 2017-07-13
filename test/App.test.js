import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../src/App'

describe('<App />', () => {
  it('renders text', () => {
    const app = shallow(<App />)
    expect(app.text()).toContain('Spothire')
  })
})
