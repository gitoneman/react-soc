var React = require('react');

var accordion = React.createClass({
	componentWillMount: function() {

	},
	componentWillUnmount: function() {

	},
	render: function() {
		return (
			<div className='accordion'>
				<div className='accordion-item'>
					<div className='accordion-item-head'>head1</div>
					<ul className='accordion-item-content'>
						<li>item1</li>
						<li>item2</li>
						<li>item3</li>
					</ul>
				</div>
				<div className='accordion-item'>
					<div className='accordion-item-head'>head2</div>
					<ul className='accordion-item-content'>
						<li>item1</li>
						<li>item2</li>
						<li>item3</li>
					</ul>
				</div>
				<div className='accordion-item'>
					<div className='accordion-item-head'>head2</div>
					<ul className='accordion-item-content'>
						<li>item1</li>
						<li>item2</li>
						<li>item3</li>
					</ul>
				</div>

			</div>
		);
	}

});

module.exports = accordion;