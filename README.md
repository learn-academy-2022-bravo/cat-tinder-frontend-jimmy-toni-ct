# Cat Tinder

- Added repo to project
- Created branch protection

### Frontend Structure
- Added Reactstrap
- Added react-router-dom
- Added mockCats
- Added Header and Footer component
- Added pages with routes
- Styles Header, Footer, NotFound components

### Testing with Jest and Enzyme
  $ git checkout -b test-coverage
  Install enzyme
  $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
  $ yarn test


As a developer, I have test coverage on my Header component.
  - Created a test file for Header, Footer, NotFound, Home
  - Added tests to above files and App.test.js

# RESTful Routes
  - For the data side of the app:
    - index (read / get) - all the cats
    - show (read / get) - one cat - needs an id as a param to show which cat
    - create
    - update
    - delete

  - For the user side of the app:
    - new
    - edit


# Index
  - Updated our route to CatIndex to be dynamic so we can pass props
  - Mapped over this.props.cats in CatIndex to show all the cat's names
  - Added testing for CatIndex to CatIndex.test.js

# Show 
  - Updated route to be dynamic to CatShow
  - Displayed content of cat on CatShow page
  - Added testing for CatShow to CatShow.test.js





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import NotFound from './NotFound'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When NotFound renders", () => {
    it("displays a heading", () => {
      const notFound = shallow(<NotFound />)
      const not_found = notFound.find("h1").text()
      expect(not_found).toEqual("Not Found")
    })
  })


// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'

import PropTypes from 'prop-types';

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
    it("displays a heading", () => {
    const home = shallow(<Home />)
    const homeH1 = home.find("h1").text()
    expect(homeH1).toEqual("Home")
    })
    it("displays an image", () => {
        const wrapper = shallow(<Home includedProp="Mittens"  />);
        expect(wrapper.props().includedProp).to.equal("Mittens" )
    })
});

@Elyse Montano @Sarah Please review PR request for test coverage
PR: https://github.com/learn-academy-2022-bravo/cat-tinder-frontend-jimmy-toni-ct/pull/3
Trello: https://trello.com/c/SSdPN68q/11-testing-with-jest-and-enzyme
test-coverage