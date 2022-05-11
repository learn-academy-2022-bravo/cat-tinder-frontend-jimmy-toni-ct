import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'


  describe("When Home renders", () => {
    it("displays a heading", () => {
      const home = shallow(<Home />)
      const homeHeadingText = home.find("h2").text()
      expect(homeHeadingText).toEqual("Welcome to Puppy Tinder")
    })
  })