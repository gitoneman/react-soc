var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;
// var Bootstrap = require('react-bootstrap');
// var Navbar = Bootstrap.NavBar;
// var Nav = Bootstrap.Nav;
// var NavItem = Bootstrap.NavItem;


var menu = React.createClass({

	render: function() {
		return (
			<nav className="navbar navbar-default" role="navigation">
				<div className="navbar-header">
					
					<a className="navbar-brand" href="#">Title</a>
				</div>
				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav">
						<li><Link to="dashboard">Dashboard</Link></li>
						<li><Link to="report">report</Link></li>
						<li><Link to="events">events</Link></li>
						
					</ul>					
				</div>
			</nav>
		);
	}
});

module.exports = menu;