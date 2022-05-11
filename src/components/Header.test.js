import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({adapter: new Adapter()})

// describe('When the app renders', () => {
//     it('displays a header', () => {
//       const renderedApp = shallow(<App/>)
//       const renderedHeader = renderedApp.find("Header")
//       expect(renderedHeader.length).toEqual(1)
//     })
//   })

describe("When Home renders", () => {
    it("displays a heading", () => {
      const home = shallow(<Home />)
      const homeHeadingText = home.find("h2").text()
      expect(homeHeadingText).toEqual("Welcome to Cat Tinder!")
    })
  })