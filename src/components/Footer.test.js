import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from  './Footer'
// import Footer from './component/Footer'

Enzyme.configure({adapter: new Adapter()})

// describe('When the app renders', () => {
//     it('displays a footer', () => {
//       const renderedApp = shallow(<App/>)
//       const renderedFooter = renderedApp.find("Footer")
//       expect(renderedFooter.length).toEqual(1)
//     })
//   })

  describe("When Footer renders", () => {
    it("displays a heading", () => {
      const foot = shallow(<foot />)
      const footHeading = home.find("h3").text()
      expect(footHeading).toEqual("Jimmy & Toni")
    })
  })