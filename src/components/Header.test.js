import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})

describe("When the Header renders", () => {
    it("displays a heading", () => {
      const home = shallow(<Header />)
      const homeHeading = home.find("h2").text()
      expect(homeHeading).toEqual("Header")
    })
  }) 