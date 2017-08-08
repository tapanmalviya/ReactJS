import React from 'react'
import Home from './Home'
import Welcome from './Welcome'

export default React.createClass({
  render() {
    return <div>
	<Home/>
			<div className="col-lg-2"><Welcome/></div>
			<div className="col-lg-10">Expenses</div>
			
			
			</div>
  }
})