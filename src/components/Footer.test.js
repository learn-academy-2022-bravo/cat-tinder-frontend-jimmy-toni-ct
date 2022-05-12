import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({adapter: new Adapter()})

describe("When the Footer renders", () => {
    it("displays a tag", () => {
      const homeFooter = shallow(<Footer />)
      const homeFooterTxt = homeFooter.find("h3").text()
      expect(homeFooterTxt).toEqual("footer")
    })
  }) 