var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var TabbedArea = require('react-bootstrap').TabbedArea;
var TabPane = require('react-bootstrap').TabPane;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
var Panel = require('react-bootstrap').Panel;
var SplitButton = require('react-bootstrap').SplitButton;
var Button = require('react-bootstrap').Button;
var Chart = require('../../common/charts/charts.react')
var systemStore = require('./store/systemStore');
var Reactable = require('reactable');
var Table = Reactable.Table;
var Tr = Reactable.Tr;
var Td = Reactable.Td;


var system = React.createClass({
	getInitialState: function() {
		return {
			key:1 
		};
	},
	componentDidMount: function() {
	    systemStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
	    systemStore.removeChangeListener(this._onChange);
	},
	render: function() {
		var chartData = systemStore.getChartData();
		var chart1 = chartData["0"];
		var chart2 = chartData["1"];

		return (
			<div className="g-cnt">
				<TabbedArea activeKey={this.state.key} onSelect={this.handleTab} animation={false}>
			        <TabPane eventKey={1} tab='数据分区'>
			        	<Grid fluid>
						    <Row className='show-grid'>
						      	<Col xs={6} md={4}>
						      		<Chart onClick={this.chartClick} bsType="bar" data={chart1}/>
						      	</Col>
						      	<Col xs={12} md={8}>
						      		<Chart onClick={this.chartClick} bsType="bar" data={chart2}/>
						      	</Col>
						    </Row>
						</Grid>
						<div className="">
							<Grid fluid>
							    <Row className='show-grid'>
							      	<Col xs={18} md={12}>
							      		<Panel>
									    	<ButtonToolbar className="pull-left f-mr5">
									 			<DropdownButton title='远程恢复'>
											        <MenuItem eventKey='1'>Dropdown link</MenuItem>
											        <MenuItem eventKey='2'>Dropdown link</MenuItem>
											    </DropdownButton>
											</ButtonToolbar>
							      			<ButtonToolbar className="pull-left f-mr5">
											    <Button >备份</Button>
											    <Button  >归档</Button>
											    <Button  >恢复</Button>
											    <Button  >下载</Button>
											</ButtonToolbar>
											<ButtonToolbar className="pull-left">
											    <SplitButton title='Dropdown right' pullRight>
												    <MenuItem eventKey='1'>Action</MenuItem>
												    <MenuItem eventKey='2'>Another action</MenuItem>
												    <MenuItem eventKey='3'>Something else here</MenuItem>
												    <MenuItem divider />
												    <MenuItem eventKey='4'>Separated link</MenuItem>
											  	</SplitButton>
											</ButtonToolbar>
											<ButtonToolbar className="pull-right">
											    <Button >上传归档文件</Button>
											</ButtonToolbar>
											<ButtonToolbar className="pull-right f-mr5">
											    <DropdownButton title='远程恢复' pullRight>
											        <MenuItem eventKey='1'>Dropdown link</MenuItem>
											        <MenuItem eventKey='2'>Dropdown link</MenuItem>
											    </DropdownButton>
											</ButtonToolbar>										
										</Panel>
							      	</Col>
							    </Row>
							</Grid>
							<Grid fluid>
							    <Row className='show-grid'>
							      	<Col xs={18} md={12}>
							      		<Table className="table" data={[
									        { Name: 'Griffin Smith', Age: 18,Position: 'Developer' },
									        { Age: 23,  Name: 'Lee Salminen',Position: 'Developer' },
									        { Age: 28, Position: 'Developer',Name:'sunny lu' },
									    ]} />
									    <Table className="table" id="table">
									        <Tr>
									            <Td column="Name" data="Griffin Smith">
									                <b>Griffin Smith111</b>
									            </Td>
									            <Td column="Age">18</Td>
									        </Tr>
									        <Tr>
									            <Td column="Name">Lee Salminen</Td>
									            <Td column="Age">23</Td>
									        </Tr>
									        <Tr>
									            <Td column="Position">Developer</Td>
									            <Td column="Age">28</Td>
									        </Tr>
									    </Table>,
							      	</Col>
							    </Row>
							</Grid>
						</div>
			        </TabPane>
			        <TabPane eventKey={2} tab='网络配置'>网络配置</TabPane>
			        <TabPane eventKey={3} tab='告警配置'>告警配置</TabPane>
			        <TabPane eventKey={4} tab='服务配置'>服务配置</TabPane>
		      	</TabbedArea>	
			</div>
		);
	},
	handleTab:function(key){
		this.setState({
			key:key 
		});
	},
	chartClick:function(e){
		console.log(e);

	},
	_onChange:function(){
		alert("change")
	}
});

module.exports = system;