import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({adapter: new Adapter()})

describe('When the app renders', () => {
    it('provides a route "/" to the NotFound component', () => {
      const renderedApp = shallow(<NotFound/>)
      const renderedNotFound = renderedApp.find('[path="/"]')
      expect(renderedNotFound.props().component).toEqual(NotFound)
    })
  })