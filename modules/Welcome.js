import React from 'react'

import { Link } from 'react-router'

var mainData = [
			{
			   sales:67,
			   byDate:15,
			   refund:5,
			   deposit:6
			   
			},
			{
				expenses:100,
				marketPlaceFee:50,
				shipping:7
			},
			{
			   inventory:16,
			   outOfSync:4
			},
			{
				item:177,
				salesChannel:10,
				xero:17,
				mapped:2,
				hidden:8
			}
	]


export default React.createClass({
		
		getInitialState: function() {
			return {data: mainData};
		},
		
		render: function() {
			return (
			<div className="leftMenu">
			<div className="click">click</div>
				<ul>
					<li><Link to="/app">Home</Link>  </li>	
					<li> <Link to="/sales">Sales</Link> <span className="glyphicon glyphicon-chevron-down sales"> </span><span>{this.state.data[0].sales}</span> 
						<div className="salesSub">
							<ul>
								<li>By Date <span>{this.state.data[0].byDate}</span></li>
								<li>Refund <span>{this.state.data[0].refund}</span></li>
								<li>By Deposits <span>{this.state.data[0].deposit}</span></li>
							</ul>
						</div>
					</li>
					<li> <Link to="/expenses">Expenses</Link>  <span>{this.state.data[1].expenses}</span>
						<div className="expensesSub">
							<ul>
								<li>MarketPlace Fee <span>{this.state.data[1].marketPlaceFee}</span></li>
								<li>Shipping <span>{this.state.data[1].shipping}</span></li>
							</ul>
						</div>
					</li>
					<li> <Link to="/inventory">Inventory</Link> <span>{this.state.data[2].inventory}</span>
						<div className="inventorySub">
							<ul>
								<li>Out Of Sync <span>{this.state.data[2].outOfSync}</span></li>
							</ul>
						</div>
					</li>
					<li><Link to="/item">Item</Link> <span>{this.state.data[3].item}</span>
						<div className="itemSub">
							<ul>
								<li>Sales Channel <span>{this.state.data[3].salesChannel}</span></li>
								<li>Xero <span>{this.state.data[3].xero}</span></li>
								<li>Mapped <span>{this.state.data[3].mapped}</span></li>
								<li>Hidden <span>{this.state.data[3].hidden}</span></li>
							</ul>
						</div>
					</li>
					
				</ul>
			</div>
			);
		}
	});
