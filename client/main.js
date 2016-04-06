'use strict'

import React from 'react'

// App
class App extends React.Component {
  // From a JavaScript perspective we’re now using ES6 classes, typically this
  // would be used with something like Babel to compile the ES6 to ES5 to work
  // in other browsers.
  constructor (props) {
    // With this change, we introduce the constructor, where we need to call
    // super() to pass the props to React.Component.
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>hey</div>
    )
  }
}

export default App
