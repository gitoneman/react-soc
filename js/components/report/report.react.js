var React = require('react');
var Submenu = require('../../common/accordion/accordion.react');
var menu = {
	"我的菜单":[
		{
			name:"侧栏菜单一",
			href:"/"
		},
		{
			name:"侧栏菜单二",
			href:"/"
		},
		{
			name:"侧栏菜单三",
			href:"/"
		},
		{
			name:"侧栏菜单四",
			href:"/"
		},
		{
			name:"侧栏菜单五",
			href:"/"
		}
	],
	"我的菜单二":[
		{
			name:"侧栏菜单一",
			href:"/"
		},
		{
			name:"侧栏菜单二",
			href:"/"
		},
		{
			name:"侧栏菜单三",
			href:"/"
		},
		{
			name:"侧栏菜单四",
			href:"/"
		},
		{
			name:"侧栏菜单五",
			href:"/"
		}
	],
	"我的菜单三":[
		{
			name:"侧栏菜单一",
			href:"/"
		},
		{
			name:"侧栏菜单二",
			href:"/"
		},
		{
			name:"侧栏菜单三",
			href:"/"
		},
		{
			name:"侧栏菜单四",
			href:"/"
		},
		{
			name:"侧栏菜单五",
			href:"/"
		}
	]
}

var report = React.createClass({
	render: function() {
		return (
			<div className="submenu">
				<Submenu data={menu}/>
			</div>
			
		);
	}
});

module.exports = report;