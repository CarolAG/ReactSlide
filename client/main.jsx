'use strict'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import WebFlight from '../app/components/WebFlight.jsx'
import { sources } from '../app/utils/img-sources.js'
import Gallery from '../app/components/Gallery.jsx'

// App
class DemoSlide extends Component {
  // From a JavaScript perspective we’re now using ES6 classes, typically this
  // would be used with something like Babel to compile the ES6 to ES5 to work
  // in other browsers.
  constructor (props) {
    // With this change, we introduce the constructor, where we need to call
    // super() to pass the props to React.Component and use the 'this' keyword
    super(props)
    this.srcArray = sources
    this.state = { bottom: 6, current: this.srcArray.slice(0, 6) }
    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  handleClick () {
    console.log('this', this, 'can I console component', Component)
  }
  render () {
    return (
      <div onClick = {this.handleClick}>hey</div>
    )
  }
}
 // This is a very recent change introduced with 0.14. They split up React into
 // a core library and the DOM adapter. Rendering is now done via ReactDOM.render
ReactDOM.render(<App/>, document.getElementById('content'))
