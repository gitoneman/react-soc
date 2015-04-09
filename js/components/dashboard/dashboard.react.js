var React = require('react');
var Button = require('../../common/button/button.react')

var dashboard = React.createClass({

	render: function() {
		return (
			<div className="toolbar">
			<Button bStyle="btn-primary btn-lg" bText="button1" onclick={this.btnClick}/>
			<Button bStyle="btn-info btn-sm" bText="button2" />
			<Button bStyle="btn-info" bText="button3" />
			</div>
		);
	},
	btnClick:function(){
		alert(1)
	}

});

module.exports = dashboard;