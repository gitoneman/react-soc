var React = require('react');
var Submenu = require('../../common/accordion/accordion.react')

var report = React.createClass({
	render: function() {
		return (
			<div className="submenu">
				<Submenu/>
			</div>
			
		);
	}
});

module.exports = report;