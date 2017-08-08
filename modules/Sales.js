import React from 'react'
import Welcome from './Welcome'
import Home from './Home'

export default React.createClass({
  render() {
    return <div>
			<Home/>
			<div className="col-lg-2"><Welcome/></div>
			<div className="col-lg-10">Sales</div>
			
		   </div>
  }
})