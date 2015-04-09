var React = require('react');
var AccordionItem = require('./accordion-item.react');

var accordion = React.createClass({
	getInitialState: function() {
		return {
			now:null
		};
	},
	componentWillMount: function() {
		
	},
	componentWillUnmount: function() {

	},
	render: function() {
		var menu = this.props.data;
		var menus = [];
		var now = this.state.now;


		for(var k in menu){
			menus.push(<AccordionItem head={k} data={menu[k]} onclick={this._clickHead} active={now == k?true:false}/>)
			console.log(now == k?true:false)
		}
		console.log(menus)
		return (
			<div className='accordion'>
				{menus}
			</div>
		);
	},
	_clickHead:function(o){
		this.setState({
			now:o.head 
		});
	}

});

module.exports = accordion;